import React from 'react';
import {Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import {Container, Content} from 'native-base';
const {width:viewportWidth, height: veiwportHeight} = Dimensions.get('window');

let testImage = require('../../../assets/1.png');
const PhotoTab = ({props}) => {
  return(
    <Container>
      <Content>
        <TouchableOpacity onPress={()=>props.navigate('MenuInsta')}>

        <Image source={{uri:testImage}} style={{width: viewportWidth/3, height:viewportWidth/3}}/>
        </TouchableOpacity>
      </Content>
    </Container>
    )
}
export default PhotoTab;