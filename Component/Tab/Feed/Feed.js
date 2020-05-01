import React, {useState} from "react";
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
import InstaTab from './InstaTab';
import PhotoTab from './PhotoTab';
import {AllIcon} from '../ImportImage';
import SearchBar from '../../SearchBar'

const Feed = () => {
  const [activeTab, setActiveTab] = useState(0);

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
      <SearchBar/>
      <Tabs tabBarUnderlineStyle={{backgroundColor:"#9c48fc"}} locked onChangeTab={({i}) => setActiveTab(i)}>
        <Tab heading={<TabHeading style={tab.tab}><Icon name="square" style={activeTab === 0 ? {color:'#9C48FC'} : {color:'#e5e5e5'}}/></TabHeading>}>
          <InstaTab/>
        </Tab>
        <Tab heading={<TabHeading style={tab.tab}><Icon name="apps" style={activeTab === 1 ? {color:'#9C48FC'} : {color:'#e5e5e5'}}/></TabHeading>}>
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