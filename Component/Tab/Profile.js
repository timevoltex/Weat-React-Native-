import React from "react";
import {
  Container,
  Content,
  Header,
  Icon,
  Body,
  Title,
  Right,
  Left,
  Tabs,
  Tab,
  Thumbnail,
  Badge,
  Card,
  CardItem,
} from "native-base";
import { Text, View } from "react-native";
import MyInsta from "./ProfileTab/MyInsta";
import MyPhoto from "./ProfileTab/MyPhoto";
import Noti from './ProfileTab/Noti';
import Analyze from './ProfileTab/analyze';

const Profile = () => {
  return (
    <Container>
      <Header hasTabs style={{backgroundColor:'transparent'}}>
        <Left style={{flex:1,}}>
          <Icon name="edit" type="MaterialIcons" />
        </Left>
        <Body style={{alignItems:'center'}}>
          <Title style={{color:'#000'}}>마이페이지</Title>
        </Body>
        <Right>
          <Icon type="SimpleLineIcons" name="settings" />
        </Right>
      </Header>
      <Content>
        <Card>
          <CardItem>
          <Left>
            <Icon name="ios-person" />
          <Body>
            <Text>유저명</Text>
            <Text>강원도 춘천시 석사동</Text>
          </Body>
          </Left>
          <Right>
            <Badge style={{backgroundColor:'#fff', borderRadius:'3px'}}>
              <Text style={{color:'purple'}}>1,000P</Text>
            </Badge>
          </Right>
          </CardItem>
          <CardItem>
            <View style={{flexDirection:'row', justifyContent:'space-around', width:'100%'}}>
              <Text style={{textAlign:'center'}}>000<br/>팔로워</Text>
              <Text style={{textAlign:'center'}}>000<br/>팔로잉</Text>
              <Text style={{textAlign:'center'}}>000<br/>리뷰</Text>
              <Text style={{textAlign:'center'}}>000<br/>단골식당</Text>
            </View>
          </CardItem>
        </Card>
        <Tabs initialPage={0}>
          <Tab heading="프로필">
            <MyInsta />
          </Tab>
          <Tab heading="알림">
            <Noti/>
          </Tab>
          <Tab heading="분석"><Analyze/></Tab>
          <Tab heading="컬렉션"><MyPhoto /></Tab>
        </Tabs>
      </Content>
    </Container>
  );
};
export default Profile;
