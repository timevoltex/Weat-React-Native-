import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Icon, Container, Text, Header, Input, Item } from "native-base";
import NavigationTab from './FooterTab'

function MainScreen() {
  return (
    <NavigationTab/>
  );
}

MainScreen.navigationOptions = {
  headerShown:false
};

const style = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    alignSelf: "center",
    flexDirection: "row",
  },
});
export default MainScreen;
