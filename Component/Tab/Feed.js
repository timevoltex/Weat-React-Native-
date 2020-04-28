import React from "react";
import { StyleSheet, Dimensions, Image } from "react-native";
import {
  Icon,
  Container,
  Header,
  Input,
  Item,
  Tab,
  Tabs,
  TabHeading,
  Body,
  Left,
  Right,
  Title,
} from "native-base";
import InstaTab from './Feed/InstaTab';
import PhotoTab from './Feed/PhotoTab';
import {AllIcon} from './ImportImage';

const Feed = () => {
  return(
  <Container>
    <Header style={header.header}>
        <Left style={header.headerLeft}>
          <Image source={AllIcon.locationInactive} style={icon.iconLeft, icon.icon} />
        </Left>
        <Body style={header.headerTitle}>
          <Title style={{color:'#000'}}>현재 주소</Title>
        </Body>
        <Right>
          <Image source={AllIcon.filterInactive}
            style={icon.iconRight, icon.icon}
          />
        </Right>
      </Header>
    <Header hasTabs searchBar rounded style={header.searchBar}>
        <Item style={header.searchBar}>
          <Image source={AllIcon.searchInactive} style={header.searchBar,icon.left, {width:30, height:30}}/>
          <Input placeholder="오늘은 뭘 먹지?" placeholderTextColor={{color:'#E5E5E5'}} style={header.searchBar}/>
        </Item>
      </Header>
      <Tabs locked>
        <Tab tabStyle={tab.tab} heading={<TabHeading><Icon name="square"/></TabHeading>}>
          <InstaTab/>
        </Tab>
        <Tab heading={<TabHeading><Icon name="apps"/></TabHeading>}>
          <PhotoTab/>
        </Tab>
      </Tabs>
  </Container>
  )
}
export default Feed;

const icon = StyleSheet.create({
  icon: {width: 50, height: 50},
  iconLeft:{paddingLeft:10},
  iconRight:{paddingRight:10},
})

const header = StyleSheet.create({
  header: {backgroundColor:'transparent'},
  headerLeft:{flex:1},
  headerTitle:{ alignItems:'center'},
  searchBar:{backgroundColor:'transparent'}
})

const tab = StyleSheet.create({
  tab:{
    backgroundColor:'#F8F8F8'
  }
})