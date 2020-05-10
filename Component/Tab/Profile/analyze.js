import React, {useState} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import {
  Card,
  CardItem,
  Left,
  Right,
  Body,
  Icon,
  Badge,
  Content,
  Container,
} from "native-base";
import {AllIcon} from '../ImportImage';
import AnalyzeG from './analyzeG';
const {height:viewportHeight} = Dimensions.get('screen');

const testImage = require("../../../assets/1.png");
const Analyze = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <Container style={{height:viewportHeight-290}}>

    <Content padder>
      <View style={style.Container}>
        <Text>해시태그</Text>
        <TouchableOpacity onPress={() => setToggle(!toggle)}>
          <Image source={toggle === true ? AllIcon.creatInactive : AllIcon.creatActive} style={{height:30, width:30}} />
        </TouchableOpacity>
      </View>
     {toggle === true ? <AnalyzeN/> : <AnalyzeG/>}
    </Content>
    </Container>
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

const AnalyzeN = () => {
  return(
    <>
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

        <Image source={AllIcon.creatInactive} style={{height:30, width:30}} />
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
        <Image source={AllIcon.creatInactive} style={{height:30, width:30}} />
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
    </>
  )
}