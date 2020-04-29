import React from 'react';
import {View, Text, Image} from 'react-native';
import {Container, Content, Icon, Card, CardItem,  Right, Left, Body} from 'native-base'

const testImage = require('../../../assets/1.png');
const Noti = () => {
  return(

          <Card>
            <CardItem>
              <Left>
              <Icon name="ios-person"/>
              <Body>
                <Text><Text>유저명</Text>알림내용</Text>
                  <Text>00:00</Text>
              </Body>
              </Left>
              <Right>
                <Image source={testImage} style={{width:40, height:40}}/>
              </Right>
            </CardItem>
          </Card>

  )
}
export default Noti;