import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  Card,
  CardItem,
  Left,
  Right,
  Body,
  Icon,
  Badge,
  Content,
} from "native-base";

const testImage = require("../../../assets/1.png");
const Analyze = () => {
  return (
    <Content padder>
      <View style={style.Container}>
        <Text>해시태그</Text>
        <Icon name="ios-add-circle-outline" style={{ opacity: 0.2 }} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Badge
          style={{
            backgroundColor: "transparent",
            borderWidth: 0.5,
            marginRight: 10,
          }}
        >
          <Text>#해시태그</Text>
        </Badge>
        <Badge
          style={{
            backgroundColor: "transparent",
            borderWidth: 0.5,
            marginRight: 10,
          }}
        >
          <Text>#해시태그</Text>
        </Badge>
        <Badge
          style={{
            backgroundColor: "transparent",
            borderWidth: 0.5,
            marginRight: 10,
          }}
        >
          <Text>#해시태그</Text>
        </Badge>
        <Badge
          style={{
            backgroundColor: "transparent",
            borderWidth: 0.5,
            marginRight: 10,
          }}
        >
          <Text>#해시태그</Text>
        </Badge>
      </View>
      <View style={style.Container}>
        <Text>나와 잘 맞는 친구</Text>

        <Icon name="ios-add-circle-outline" style={{ opacity: 0.2 }} />
      </View>
      <Card>
        <CardItem>
          <Left>
            <Icon name="ios-person" />
            <Body>
              <Text>유저명</Text>
              <Text>주소</Text>
            </Body>
          </Left>
          <Right>
            <Badge style={{ backgroundColor: "transparent", borderWidth: 0 }}>
              <Text style={{ color: "purple" }}>89%</Text>
            </Badge>
          </Right>
        </CardItem>
      </Card>
      <View style={style.Container}>
        <Text>최애 메뉴</Text>
        <Icon style={{ opacity: 0.2 }} name="ios-add-circle-outline" />
      </View>
      <Card>
        <CardItem>
          <Left>
            <Image source={testImage} style={{ width: 40, height: 40 }} />
            <Body>
              <Text>메뉴명</Text>
              <Text>상호명</Text>
            </Body>
          </Left>
          <Right>
            <Badge style={style.Percent}>
              <Text style={{ color: "purple" }}>89%</Text>
            </Badge>
          </Right>
        </CardItem>
      </Card>
    </Content>
  );
};
export default Analyze;

const style = StyleSheet.create({
  Container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  Percent: {
    backgroundColor: "transparent",
    borderWidth: 0,
  },
});
