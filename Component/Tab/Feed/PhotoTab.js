import React from 'react';
import {Text, Image, Dimensions} from 'react-native';
import {Container, Content} from 'native-base';
const {width:viewportWidth, height: veiwportHeight} = Dimensions.get('window');

let testImage = require('../../../assets/1.png');
const PhotoTab = () => {
  return(
    <Container>
      <Content>
        <Image source={{uri:testImage}} style={{width: viewportWidth/3, height:viewportWidth/3}}/>
      </Content>
    </Container>
    )
}
export default PhotoTab;