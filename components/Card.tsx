import {
  ImageProps,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import ModalComponent from "./ModalComponent";
import InformationModal from "./InformationModal";

type CardProps = {
  personalImage: ImageProps;
  name: string;
  info: string;
  iconsUrls: string[];
  iconsMedia: ImageProps[];
  qrURL: string;
  informationData: string[];
  isEnabled: boolean;
};

const Card = (props: CardProps) => {
  const { personalImage, name, info, iconsUrls, iconsMedia, qrURL, informationData, isEnabled } = props;
  return (
    <View style={[styles.cardContainer, {backgroundColor: isEnabled ? "#D7D0C8" : "#607471"}]}>
      <View style={styles.cardTitleContainer}>
        <Image style={styles.personalImage} source={personalImage} />
        <Text style={styles.cardTitleText}>{name}</Text>
        <Text style={styles.textStyle}> {info} </Text>
        <ModalComponent isEnabled={isEnabled} iconsUrls={iconsUrls} iconsMedia={iconsMedia} qrURL={qrURL}/>
        <InformationModal isEnabled={isEnabled} informationData={informationData}/>
      </View>
    </View>
  );
};
export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    width: "90%",
    height: "90%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 80,
    /* backgroundColor: "#D7D0C8", //Nice */
    backgroundColor: "#607471",
    borderRadius: 40,
    marginVertical: 20,
    marginHorizontal: 15,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 25,
  },
  personalImage: {
    height: 150,
    width: 150,
    borderRadius: 50,
  },
  cardTitleContainer: {
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  cardTitleText: {
    fontSize: 22,
    fontWeight: "bold",
    paddingTop: 10,
  },
  cardBodyText: {
    height: 120,
    margin: 10,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  textStyle: {
    color: "black",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    maxWidth: 200
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonDefault: {
    backgroundColor: "#ccc",
    borderColor: "#999",
  },
  buttonClose: {
    backgroundColor: "#F194FF",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  socialIconsContainer: {
    flexDirection: "row",
  },
  iconImage: {
    bottom: 10,
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  qr: {
    bottom: 10,
  },
});
