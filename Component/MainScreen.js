import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Icon, Container, Text, Header, Input, Item } from "native-base";
import NavigationTab from './FooterTab'

function MainScreen() {
  return (

    <NavigationTab/>
    // <View>
    //   <Header searchBar rounded style={{ backgroundColor: "#fff" }}>
    //     <Item>
    //       <Icon name="ios-search" />
    //       <Input placeholder="오늘은 뭘 먹지?" />
    //     </Item>
    //   </Header>
    //   <View
    //     style={{ width: "100%", height: 100, backgroundColor: "gray" }}
    //   ></View>
    //   <View className="container">
    //     <View></View>
    //   </View>
    // </View>
  );
}

MainScreen.navigationOptions = {
  header:null
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
