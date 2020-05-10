import React, {useState} from "react";
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
  TabHeading,
} from "native-base";
import { Text, View, Image, StyleSheet } from "react-native";
import MyInsta from "./MyInsta";
import MyPhoto from "./MyPhoto";
import Noti from './Noti';
import Analyze from './analyze';
import {AllIcon} from '../ImportImage';

const Profile = ({navigation}) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Container>
      <Header hasTabs style={{backgroundColor:'transparent'}}>
        <Left style={{flex:1,}}>
          <Image source={AllIcon.editInactive} style={{width:50, height:50}}/>
        </Left>
        <Body style={{alignItems:'center'}}>
          <Title style={{color:'#000'}}>마이페이지</Title>
        </Body>
        <Right>
          <Image source={AllIcon.settingsInactive} style={{width:50, height:50}} />
        </Right>
      </Header>
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
              <Text style={{textAlign:'center'}}>000{"\n"}팔로워</Text>
              <Text style={{textAlign:'center'}}>000{"\n"}팔로잉</Text>
              <Text style={{textAlign:'center'}}>000{"\n"}리뷰</Text>
              <Text style={{textAlign:'center'}}>000{"\n"}단골식당</Text>
            </View>
          </CardItem>
        </Card>
        <Tabs style={{backgroundColor:'transparent'}} tabBarUnderlineStyle={tab.tabUnderline} initialPage={activeTab} onChangeTab={({i}) => setActiveTab(i)}>
          <Tab tabStyle={{backgroundColor:'transparent'}} heading={<TabHeading style={tab.tabHeader}><Text style={activeTab === 0 ? tab.activeText : tab.inactiveText}>프로필</Text></TabHeading>}>
            <MyInsta props={navigation} style={{overflow:"scroll"}}/>
          </Tab>
          <Tab heading={<TabHeading style={tab.tabHeader}><Text style={activeTab === 1 ? tab.activeText : tab.inactiveText}>알림</Text></TabHeading>}>
            <Noti/>
          </Tab>
          <Tab heading={<TabHeading style={tab.tabHeader}><Text style={activeTab === 2 ? tab.activeText : tab.inactiveText}>분석</Text></TabHeading>}><Analyze/></Tab>
          <Tab heading={<TabHeading style={tab.tabHeader}><Text style={activeTab === 3 ? tab.activeText : tab.inactiveText}>컬렉션</Text></TabHeading>}><MyPhoto /></Tab>
        </Tabs>
  
    </Container>
  );
};
export default Profile;
const tab = StyleSheet.create({
  tabHeader:{backgroundColor:'#fff'},
  activeText:{color:"#9c48fc"},
  inactiveText:{color:"#dadada"},
  tabUnderline:{backgroundColor:'#9c48fc'}
})