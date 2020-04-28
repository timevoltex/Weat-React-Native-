import React from 'react';
import {Text, Image, Dimensions} from 'react-native';
import {Container, Content, Card, CardItem, Body, Left, Right, Icon, Badge} from 'native-base';
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

let testImage = require('../../../assets/1.png');
const MyInsta = () => {
  return(
        <>
        <Card>
          <CardItem>
            <Left>
              <Icon name="ios-person"/>
              <Body>
                <Text>유저명</Text>
                <Text>33.3333%<Text>00:00</Text></Text>
              </Body>
            </Left>
            <Right>
              <Text>마리스커피</Text>
              <Text>아이스아메리카노</Text>
            </Right>
          </CardItem>
          <CardItem cardBody>
            <Image source={{uri: testImage}} style={{height: viewportWidth, width: viewportWidth, flex:1}}/>
          </CardItem>
          <CardItem>

            <Icon name="ios-heart-empty"/>
            <Icon type="MaterialIcons" name="message"/>
            <Icon name="ios-bookmark"/>
            <Body/>
            <Right>
              <Badge style={{backgroundColor:'transparent',borderColor:'black', borderWidth:1}}><Text style={{margin:'auto'}}>#해시태그</Text></Badge>
            </Right>
          </CardItem>
          <CardItem style={{flexDirection:'column'}}>
            <Text><Text style={{fontWeight:'bold'}}>Lorem</Text> ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod...</Text>
            <Text><Text style={{fontWeight:'bold'}}>Lorem</Text> ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod...</Text>
            <Text><Text style={{fontWeight:'bold'}}>Lorem</Text> ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod...</Text>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Left>
              <Icon name="ios-person"/>
              <Body>
                <Text>유저명</Text>
                <Text>33.3333%<Text>00:00</Text></Text>
              </Body>
            </Left>
            <Right>
              <Text>마리스커피</Text>
              <Text>아이스아메리카노</Text>
            </Right>
          </CardItem>
          <CardItem cardBody>
            <Image source={{uri: testImage}} style={{height: viewportWidth, width: viewportWidth, flex:1}}/>
          </CardItem>
          <CardItem>

            <Icon name="ios-heart-empty"/>
            <Icon type="MaterialIcons" name="message"/>
            <Icon name="ios-bookmark"/>
            <Body/>
            <Right>
              <Badge style={{backgroundColor:'transparent',borderColor:'black', borderWidth:1}}><Text style={{margin:'auto'}}>#해시태그</Text></Badge>
            </Right>
          </CardItem>
          <CardItem style={{flexDirection:'column'}}>
            <Text><Text style={{fontWeight:'bold'}}>Lorem</Text> ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod...</Text>
            <Text><Text style={{fontWeight:'bold'}}>Lorem</Text> ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod...</Text>
            <Text><Text style={{fontWeight:'bold'}}>Lorem</Text> ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod...</Text>
          </CardItem>
        </Card>
      </>
    )
}
export default MyInsta;