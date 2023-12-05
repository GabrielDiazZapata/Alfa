import React, { useState } from "react";
import {
  StyleSheet,
  Modal,
  Text,
  View,
  Pressable,
  Image,
  ImageProps,
} from "react-native";
import QrCode from "./QrCode";

type ModalProps = {
  iconsUrls: string[];
  iconsMedia: ImageProps[];
  qrURL: string;
};

const ModalComponent = (props: ModalProps) => {
  const { iconsUrls, iconsMedia, qrURL } = props;
  const [isModalVisible1, setModalVisible1] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);

  const openModal1 = () => setModalVisible1(true);
  const closeModal1 = () => setModalVisible1(false);

  const openModal2 = () => setModalVisible2(true);
  const closeModal2 = () => setModalVisible2(false);

  return (
    <>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={openModal1}
        >
          <Text style={styles.buttonText}>Qr Github</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={openModal2}
        >
          <Text style={styles.buttonText}>Social Media</Text>
        </Pressable>
      </View>

      {/* Modal 1: Qr Github */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible1}
        onRequestClose={closeModal1}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <QrCode qrURL={qrURL} />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={closeModal1}
            >
              <Text style={styles.buttonText}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Modal 2: Social Media */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible2}
        onRequestClose={closeModal2}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.socialIconsContainer}>
              <View style={styles.sociaMediaIconsContainer}>
                {iconsMedia.map((icon, key) => (
                  <Image
                    key={key}
                    style={styles.socialMediaIcons}
                    source={icon}
                  />
                ))}
              </View>
              <View style={styles.socialMediaInfoSocial}>
                {iconsUrls.map((url, key) => (
                  <Text key={key} style={styles.infoSocial}>
                    {url}
                  </Text>
                ))}
              </View>
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={closeModal2}
            >
              <Text style={styles.buttonText}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 3,
    margin: 5,
    minWidth: 120,
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
  modalView: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 20,
    padding: 5,
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
  socialIconsContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  sociaMediaIconsContainer: {
    width: '8%',
    alignItems: 'center',
  },
  socialMediaIcons: {
    width: 22,
    height: 22,
    borderRadius: 20,
    marginBottom: 10,
  },
  socialMediaInfoSocial: {
    width: '70%',
    alignItems: 'flex-start',
  },
  infoSocial: {
    marginBottom: 10,
  },
});

export default ModalComponent;
