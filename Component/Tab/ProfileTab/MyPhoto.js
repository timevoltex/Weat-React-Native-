import React from 'react';
import {Text, Image, Dimensions} from 'react-native';
import {Header, Tabs, Tab, Icon, Card, CardItem, Left, Body, Right, Badge} from 'native-base';
const {width:viewportWidth, height: veiwportHeight} = Dimensions.get('window');

let testImage = require('../../../assets/1.png');
const MyPhoto = () => {
  return(
    <>
        <Tabs initialPage={0}>
          <Tab heading="메뉴">
            <PhotoTab/>
          </Tab>
          <Tab heading="식당">
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
            <Text>상호명<Icon name="store-alt" type="FontAwesome5"/></Text>
            <Text>주소</Text>
          </Body>
        </Left>
        <Right>
          <Badge style={{backgroundColor:'transparent', BorderWidth:0}}>
            <Text style={{color:'purple'}}>89%</Text>
          </Badge>
        </Right>
      </CardItem>
    </Card>
    </>
  )
}