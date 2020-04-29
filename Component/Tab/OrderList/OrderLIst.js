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
import {AllIcon} from '../ImportImage';
import SearchBar from '../../SearchBar';

const OrderList = () => {
  return (
    <Container>
      <Header style={{backgroundColor:'transparent'}}>
        <Left style={{flex:1}}/>
        <Body style={{alignItems:'center'}}>
          <Title style={{color:'#000'}}>현재 주소</Title>
        </Body>
        <Right>
          <Image source={AllIcon.filterInactive}
            style={{width:50, height:50, paddingRight: 10 }}
          />
        </Right>
      </Header>
      <SearchBar/>
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
