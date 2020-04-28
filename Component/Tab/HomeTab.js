import React from "react";
import { View, StyleSheet, Text, Dimensions, Image } from "react-native";
import {
  Icon,
  Container,
  Header,
  Input,
  Item,
  Content,
  Thumbnail,
  Card,
  CardItem,
  Body,
  Left,
  Right,
  Title,
} from "native-base";
import Carousel from "react-native-snap-carousel";
import {AllIcon} from './ImportImage';



const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);
let filter = AllIcon.filterInactive;
let testImage = require("../../assets/1.png");
let testImage2 = require("../../assets/2.png");
let logo = require("../../assets/Connple-black.png");
function Home() {
  const array = [
    { source: "../../assets/1.png" },
    { source: "../../assets/2.png" },
    { source: "../../assets/3.png" },
    { source: "../../assets/5.png" },
    { source: "../../assets/6.png" },
    { source: "../../assets/7.png" },
    { source: "../../assets/4.png" },
  ];
  const _renderItem = (i) => {
    return (
      <View key={i}>
        <Thumbnail
          square
          source={testImage}
          style={{ width: 170, height: 170 }}
        />
        <Text
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Text>가게명</Text>
          <Text>시간</Text>
        </Text>
        <Text>메뉴</Text>
        <Text>
          할인율<Text>가격</Text>
        </Text>
      </View>
    );
  };
  console.log(location);
  return (
    <Container>
      <Header style={style.header}>
        <Left style={style.headerLeft}>
          <Image source={AllIcon.locationInactive} style={style.iconLeft, style.icon} />
        </Left>
        <Body style={{alignItems:'center'}}>
          <Title style={style.headertitle}>현재 주소</Title>
        </Body>
        <Right>
          <Image source={filter}
            style={style.iconRight, style.icon }
          />
        </Right>
      </Header>
      <Header searchBar rounded style={{ backgroundColor: "#fff" }}>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="오늘은 뭘 먹지?" />
        </Item>
      </Header>
      <Content>
        <View
          style={{ width: "100%", height: 100, backgroundColor: "gray" }}
        ></View>
        <View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                paddingLeft: 10,
              }}
            >
              이벤트
            </Text>
            <Image source={AllIcon.listsInactive}
              style={style.iconRight, style.icon}
            />
          </View>
          <Card>
            <CardItem>
              <Thumbnail
                square
                source={testImage}
                style={{ width: 80, height: 80 }}
              />
              <Body style={{ paddingLeft: 10, alignSelf: "center" }}>
                <Text
                  style={{
                    fontSize: 14,
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>상호명</Text>
                  <Text>기간</Text>
                </Text>
                <Text style={{ fontSize: 14 }}>퀘스트</Text>
                <Text style={{ fontSize: 14 }}>리워드</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Thumbnail
                square
                source={testImage2}
                style={{ width: 80, height: 80 }}
              />
              <Body style={{ paddingLeft: 10, alignSelf: "center" }}>
                <Text
                  style={{
                    fontSize: 14,
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>상호명</Text>
                  <Text>기간</Text>
                </Text>
                <Text style={{ fontSize: 14 }}>퀘스트</Text>
                <Text style={{ fontSize: 14 }}>리워드</Text>
              </Body>
            </CardItem>
          </Card>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                paddingLeft: 10,
              }}
            >
              타임세일
            </Text>
            <Image source={AllIcon.listsInactive}
              style={style.iconRight, style.icon}
            />
          </View>
          <Carousel
            data={array}
            hideIndicators={true}
            renderItem={_renderItem}
            sliderWidth={viewportWidth}
            itemWidth={170}
          ></Carousel>
          <View style={{ backgroundColor: "#E6E6E6", height: 110 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                height: 30,
              }}
            >
              <Text style={{ fontSize: 10, marginVertical: "auto" }}>
                이용약관
              </Text>
              <Text style={{ fontSize: 10, marginVertical: "auto" }}>
                자주 묻는 질문
              </Text>
              <Text style={{ fontSize: 10, marginVertical: "auto" }}>
                공지사항
              </Text>
              <Text style={{ fontSize: 10, marginVertical: "auto" }}>
                이벤트
              </Text>
            </View>
            <View>
              <Left
                style={{
                  alignSelf: "auto",
                  marginVertical: 6,
                  marginHorizontal: 24,
                }}
              >
                <Text
                  style={{
                    fontSize: 10,
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>
                    강원도 춘천시 강원대학길1, KNU스타트업큐브 B동 214호
                  </Text>
                  <Image
                    source={{ uri: logo }}
                    style={{ width: 51, height: 15, opacity: 0.2 }}
                  />
                </Text>
                <Text style={{ fontSize: 10 }}>
                  사업자 등록 번호: 151-20-00854 <Text>대표 최원준</Text>
                </Text>
                <Text style={{ fontSize: 10 }}>
                  Copyright {"\u00A9"} 2020 Connple.All rights reserved.
                </Text>
              </Left>
            </View>
          </View>
        </View>
      </Content>
    </Container>
  );
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    alignSelf: "center",
    flexDirection: "row",
  },
  header:{
    backgroundColor: 'transparent',
  },
  headertitle:{
    color:'black'
  },
  headerLeft:{
    flex:1
  },
  icon:{
    width: 50, height:50,
  },
  iconLeft:{
    paddingLeft:10
  },
  iconRight:{
    paddingRight:10
  },
});
export default Home;
