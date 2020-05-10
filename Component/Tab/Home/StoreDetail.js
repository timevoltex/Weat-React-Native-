import React from "react";
import {
  Button,
  Container,
  Header,
  Content,
  Left,
  Body,
  Title,
  Right,
  List,
  ListItem,
  Footer,
  Badge,
  Fab,
} from "native-base";
import { Image, StyleSheet, View, Dimensions, Text } from "react-native";
import { AllIcon, Back, List as ListIcon } from "../ImportImage";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

function StoreDetail({ navigation }) {
  return (
    <Container>
      <Header style={style.header}>
        <Left style={style.headerLeft}>
          <Button style={{ paddingLeft: 0 }} transparent onPress={() => navigation.goBack()}>
            <Back fill="#c2c2c2" style={style.icon} />
          </Button>
        </Left>
        <Body style={{ alignItems: "center" }}>
          <Title style={style.headertitle}>상호명</Title>
        </Body>
        <Right>
          <ListIcon
            fill="#c2c2c2"
            style={{ height: 50, width: 50, paddingRight: 10 }}
          />
        </Right>
      </Header>
      <Content>
        <View
          style={{
            width: viewportWidth,
            height: viewportWidth,
            backgroundColor: "#DCDCDC",
          }}
        />
        <View style={{ padding: 17 }}>
          <Text>시간</Text>
          <Text
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text>메뉴</Text>
            <Text>구매 인원</Text>
          </Text>
          <Text
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text>할인율 가격</Text>
            <Text>잔여 물량</Text>
          </Text>
        </View>
        <View style={{ backgroundColor: "#f2f2f2" }}>
          <List>
            <ListItem itemHeader first>
              <Text>상세정보</Text>
            </ListItem>
            <ListItem >
              <Text>영업시간</Text>
            </ListItem>
            <ListItem>
              <Text>가게위치</Text>
            </ListItem>
            <ListItem>
              <Text>전화번호</Text>
            </ListItem>
            <ListItem>
              <Text>해시태그</Text>
            </ListItem>
            <ListItem last>
              <Text>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur
              </Text>
            </ListItem>
            <ListItem itemHeader first>
              <Text>위치</Text>
            </ListItem>
            <ListItem last>
              <View
                style={{
                  width: viewportWidth - 36,
                  height: viewportWidth - 36,
                  backgroundColor: "#DCDCDC",
                }}
              >
                <Text>naverMap 추가 예정</Text>
              </View>
            </ListItem>
            <ListItem itemHeader first>
              <Text>타임세일 이용방법</Text>
            </ListItem>
            <ListItem last>
              <Text>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur
                </Text>
            </ListItem>
          </List>
        </View>
        <Button onPress={() => navigation.navigate('OrderPage')}
          style={[style.boxShadow,{ position: 'sticky', width: '90%', height: 50, borderRadius: 30, backgroundColor: '#9c48fc', bottom: 10, left: '5%' }]}>
          <Text style={{alignSelf:'center', marginHorizontal:'auto', color:'white', fontSize:20}}>예약하기</Text>
        </Button>
      </Content>
    </Container>
  );
}
export default StoreDetail;

const style = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    alignSelf: "center",
    flexDirection: "row",
  },
  header: {
    backgroundColor: "transparent",
  },
  headertitle: {
    color: "black",
  },
  headerLeft: {
    flex: 1,
  },
  icon: {
    width: 50,
    height: 50,
  },
  iconLeft: {
    paddingLeft: 10,
  },
  iconRight: {
    paddingRight: 10,
  },
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: -5,  //x-position
      height: 5,  //y-position
    },
    shadowOpacity: 0.4, //opacity
    shadowRadius: 4.65, //blur

    elevation: 7, // This adds a drop shadow to the item and affects z-order for overlapping views
  }
});
