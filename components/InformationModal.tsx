import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

type InformationModalData = {
  informationData: string[];
};

const InformationModal = (props: InformationModalData) => {
  const { informationData } = props;
  const [isModalVisible, setModalVisible] = useState(false);
  const openModal1 = () => {
    setModalVisible(true);
  };
  const closeModal1 = () => {
    setModalVisible(false);
  };
  return (
    <>
      <View style={styles.modalTecnologies}>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={openModal1}
        >
          <Text style={[styles.textStyle, styles.buttonText]}>
            Información Varia
          </Text>
        </Pressable>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal1}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalHeader}>Cosas que me gustan</Text>
            <View style={styles.informationContainer}>
              {informationData.map((data, key) => (
                <Text key={key} style={styles.informationStyle}>
                  {'>'} {data}
                </Text>
              ))}
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
    </>
  );
};

export default InformationModal;

const styles = StyleSheet.create({
  modalTecnologies: {
    marginTop: 30,
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: "bold",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
    backgroundColor: "white",
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
  informationStyle: {
    alignItems: "flex-start",
    height: 20,
    width: 200,
    marginLeft: 10,
  },
  informationContainer: {
    borderWidth: 1,
    borderRadius: 20,
    margin: 10
  }
});
