import React, {useState} from 'react';
import {Text, Image, Dimensions, StyleSheet} from 'react-native';
import {Header, Tabs, Tab, Icon, Card, CardItem, Left, Body, Right, Badge, TabHeading} from 'native-base';
import {AllIcon} from '../ImportImage';

const {width:viewportWidth, height: veiwportHeight} = Dimensions.get('window');

let testImage = require('../../../assets/1.png');
const MyPhoto = () => {
  const [activeTab, setActiveTab] = useState(0);
  return(
    <>
        <Tabs tabBarUnderlineStyle={tab.tabUnderline} initialPage={activeTab} onChangeTab={({i}) => setActiveTab(i)}>
          <Tab heading={<TabHeading style={tab.tabHeader}><Text style={activeTab === 0 ? tab.activeText:tab.inactiveText}>메뉴</Text></TabHeading>}>
            <PhotoTab/>
          </Tab>
          <Tab heading={<TabHeading style={tab.tabHeader}><Text style={activeTab === 1 ? tab.activeText:tab.inactiveText}>식당</Text></TabHeading>}>
            <CollectionStore/>
          </Tab>
        </Tabs>
    </>
    )
}
export default MyPhoto;

const PhotoTab = () => {
  return(
    <Image source={{uri:testImage}} style={{width: viewportWidth/3, height:viewportWidth/3}}/>
  )
}

const CollectionStore = () => {
  return (
    <>
    <Card>
      <CardItem>
        <Left>
          <Icon name='ios-person'/>
          <Body>
            <Text>상호명<Image source={AllIcon.storeActive} style={{width: 25, height:25}}/></Text>
            <Text>주소</Text>
          </Body>
        </Left>
        <Right>
          <Badge style={{backgroundColor:'transparent'}}>
            <Text style={{color:'purple'}}>89%</Text>
          </Badge>
        </Right>
      </CardItem>
    </Card>
    </>
  )
}

const tab = StyleSheet.create({
  tabHeader:{backgroundColor:'#f8f8f8'},
  activeText:{color:"#9c48fc"},
  inactiveText:{color:"#DDD"},
  tabUnderline:{backgroundColor:'#9c48fc'}
})