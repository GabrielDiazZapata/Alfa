import { StyleSheet, View } from "react-native";
import React from "react";
import ScrollviewComponent from "./ScrollviewComponent";

type MainPageProps = {
  isEnabled: boolean
}

const MainPage = (props: MainPageProps) => {
  const {isEnabled} = props
  return (
    <View style={[styles.bodystails, {backgroundColor: isEnabled ? "white" : "#5E6472"}]}>
      <ScrollviewComponent isEnabled={isEnabled}/>
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  bodystails: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    height: "90%",
  },
});
