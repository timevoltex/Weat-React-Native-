import React from "react";
import {
  Container,
  Content,
  Header,
  Left,
  Icon,
  Body,
  Title,
  Right,
  Item,
  Input,
  Card,
  CardItem,
} from "native-base";
import { Text, Image } from "react-native";

const OrderList = () => {
  return (
    <Container>
      <Header>
        <Left></Left>
        <Body>
          <Title>현재 주소</Title>
        </Body>
        <Right>
          <Icon
            type="FontAwesome"
            name="sliders"
            style={{ paddingRight: 10 }}
          />
        </Right>
      </Header>
      <Header searchBar rounded style={{ backgroundColor: "#fff" }}>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="오늘은 뭘 먹지?" />
        </Item>
      </Header>
      <Content padder>
        <Card>
          <CardItem style={{ flexDirection: "column", alignItems: "baseline" }}>
            <Text>시간</Text>
            <Text>가게명</Text>
            <Text style={{display:'flex', justifyContent:'space-between', width:'100%'}}> 
              <Text>메뉴</Text>
              <Text>00,000원</Text>
            </Text>
          </CardItem>
          <CardItem style={{borderTopWidth:0.5}}><Text style={{width:'100%', textAlign:'center'}}>리뷰쓰기</Text></CardItem>
        </Card>
      </Content>
    </Container>
  );
};
export default OrderList;
