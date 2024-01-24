import { ScrollViewComponent, StyleSheet, View, Text, ScrollView, ImageBackground } from "react-native";
import React from "react";
import Card from "../components/Card";
import { peopleData } from "../data/InformationData";


const MainPage = () => {
  const renderCards = () => {
    return peopleData.map((person, index) => (
      <Card
        key={index}
        personalImage={person.personalImage}
        name={person.name}
        info={person.info}
        iconsUrls={person.iconsUrls}
        iconsMedia={person.iconsMedia}
        qrURL={person.qrURL}
      />
    ));
  };
  return (
    <ImageBackground
      source={require('../assets/fondo4.jpg')}
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.bodystails}>
        <Text></Text>
        {renderCards()}
      </ScrollView>
    </ImageBackground>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  bodystails: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
