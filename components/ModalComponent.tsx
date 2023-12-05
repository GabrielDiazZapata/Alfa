import {
  StyleSheet,
  Modal,
  Text,
  View,
  Pressable,
  Image,
  ImageProps,
} from "react-native";
import React, { useState } from "react";
import QrCode from "./QrCode";

type ModalProps = {
  iconsUrls: string[];
  iconsMedia: ImageProps[];
  qrURL: string;
  isEnabled: boolean;
};

const ModalComponent = (props: ModalProps) => {
  const { iconsUrls, iconsMedia, qrURL, isEnabled } = props;
  const [isModalVisible1, setModalVisible1] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);
  const openModal1 = () => {
    setModalVisible1(true);
  };
  const openModal2 = () => {
    setModalVisible2(true);
  };
  const closeModal1 = () => {
    setModalVisible1(false);
  };
  const closeModal2 = () => {
    setModalVisible2(false);
  };

  return (
    <>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={openModal1}
        >
          <Text style={[styles.textStyle, styles.buttonText]}>Qr Github</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={openModal2}
        >
          <Text style={[styles.textStyle, styles.buttonText]}>
            Social Media
          </Text>
        </Pressable>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible1}
        onRequestClose={closeModal1}
      >
        <View style={styles.centeredView}>
          <View style={[styles.modalView, {backgroundColor: isEnabled ? "white" : "#859699"}]}>
            <View style={styles.qr}>
              <QrCode qrURL={qrURL} />
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={closeModal1}
            >
              <Text style={[styles.textStyle, styles.buttonText]}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible2}
        onRequestClose={closeModal2}
      >
        <View style={styles.centeredView}>
          <View style={[styles.modalView, {backgroundColor: isEnabled ? "white" : "#859699"}]}>
            <View style={styles.socialIconsContainer}>
              <View style={styles.sociaMediaIconsContainer}>
                {iconsMedia.map((iconsMedia, key) => (
                  <Image
                    style={styles.socialMediaIcons}
                    source={iconsMedia}
                    key={key}
                  />
                ))}
              </View>
              <View style={styles.socialMediaInfoSocial}>
                {iconsUrls.map((iconsUrls, key) => (
                  <Text style={styles.infoSocial} key={key}>
                    {iconsUrls}
                  </Text>
                ))}
              </View>
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={closeModal2}
            >
              <Text style={[styles.textStyle, styles.buttonText]}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    borderRadius: 40,
    padding: 10,
    elevation: 3,
    margin: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonOpen: {
    backgroundColor: "blue",
  },
  buttonClose: {
    backgroundColor: "blue",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalView: {
    margin: 20,
    borderRadius: 50,
    height: 210,
    width: 260,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  qr: {
    bottom: 10,
  },
  socialIconsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  infoSocial: {
    flexDirection: "column",
    marginBottom: 10
  },
  socialMediaIcons: {
    maxWidth: 20,
    flexDirection: "column",
    height: 20,
    width: 20,
    borderRadius: 50,
    marginBottom: 10
  },
  sociaMediaIconsContainer: {
    width: '20%',
  },
  socialMediaInfoSocial: {
    width: '80%'
  }
});
