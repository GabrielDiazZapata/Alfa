import React, { useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Audio } from 'expo-av';
import { Sound } from 'expo-av/build/Audio';
import { getRecordings, storeRecordings } from '../data/MicrophoneStorage';

export type RecordFile = {
  duration: string;
  sound: Sound;
  file: string | null | undefined;
};

const MicrophoneScreen = () => {
  const [recording, setRecording] = React.useState<Audio.Recording>();
  const [recordingList, setRecordingList] = React.useState<RecordFile[]>([]);
  const [message, setMessage] = React.useState('');

  useEffect(() => {
    const allAudios = async () => {
      let audioList = await getRecordings();
      if (audioList !== null) {
        setRecordingList(audioList);
      }
    };
    allAudios();
  }, []);

  const startRecording = async () => {
    try {
      const permission = await Audio.requestPermissionsAsync();

      if (permission.granted) {
        const { recording } = await Audio.Recording.createAsync(
          Audio.RecordingOptionsPresets.HIGH_QUALITY
        );
        setRecording(recording);
      } else {
        setMessage('Por favor, conceda permisos a la app para poder continuar');
      }
    } catch (error) {
      console.error('Error, por favor vuelve a intentarlo: ', error);
    }
  };

  const stopRecording = async () => {
    if (!recording) {
      return;
    }

    setRecording(undefined);

    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    console.log('Grabación detenida y almacenada en', uri);

    const { sound, status } = await recording.createNewLoadedSoundAsync();

    if (status.isLoaded) {
      let newRecord: RecordFile = {
        sound: sound!,
        duration: getDurationFormatted(status.durationMillis),
        file: uri,
      };
      setRecordingList((existingList) => [...existingList, newRecord]);
      await storeRecordings([...recordingList, newRecord]);
    }
  };

  const DeleteRecordings = async () => {
    setRecordingList([]);
    await storeRecordings([]);
  };

  const getDurationFormatted = (milliseconds: number | undefined) => {
    if (milliseconds !== undefined) {
      const minutes = milliseconds;
      const minutesDisplay = Math.floor(minutes);
      const seconds = Math.round((minutes - minutesDisplay) * 60);
      const secondsDisplay = seconds < 60 ? `0${seconds}` : seconds;
      return `${minutesDisplay}:${secondsDisplay}`;
    }
    return '0:00';
  };

  const getRecordingLines = () => {
    return recordingList.map((recordingLine, index) => {
      return (
        <View key={index} style={styles.row}>
          <TouchableOpacity
            style={styles.playButton}
            onPress={() => (recordingLine.sound as Audio.Sound).replayAsync()}
          >
            <Text style={styles.buttonWords}>Play </Text>
          </TouchableOpacity>
          <View style={styles.align}>
            <Text style={styles.fill}>Audio {index + 1} - {recordingLine.duration}    </Text>
          </View>
        </View>
      );
    });
  };

  return (
    <ImageBackground source={require('../assets/beach.gif')} resizeMode='cover' style={styles.background}>
      <Text style={styles.titleText}>Audios </Text>
      <ScrollView style={styles.scroll}>{getRecordingLines()}</ScrollView>
      <View style={styles.containerBottom}>
        <TouchableOpacity style={styles.recordingButton} onPress={recording ? stopRecording : startRecording}>
          {recording ? <Text style={styles.recordingText}>Recording... </Text> : <Text style={styles.recordingText}>Engrave </Text>}
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={DeleteRecordings}>
          <Text style={styles.deleteText}>Delete all </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    marginTop: 20,
    marginBottom: 0,
    color: 'white',
    fontSize: 20,
  },
  containerBottom: {
    flexDirection: 'row',
  },
  align: {
    marginTop: 18,
  },
  recordingButton: {
    width: 150,
    borderStyle: 'solid',
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderRadius: 50,
    backgroundColor: '#525FE1',
  },
  recordingText: {
    fontSize: 20,
    color: 'white',
  },
  deleteButton: {
    width: 150,
    borderStyle: 'solid',
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderRadius: 50,
    marginTop: 0,
    backgroundColor: '#525FE1',
  },
  deleteText: {
    fontSize: 20,
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  fill: {
    flex: 1,
    fontSize: 17,
    margin: 15,
    color: 'white',
  },
  scroll: {
    marginTop: '5%',
    height: 500,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 50,
    marginBottom: 30,
    backgroundColor: 'rgba(204, 204, 204, 0.2)',
  },
  playButton: {
    width: 90,
    height: 40,
    borderStyle: 'solid',
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderColor: 'white',
    marginTop: 20,
  },
  buttonWords: {
    color: 'black',
  },
});

export default MicrophoneScreen;
