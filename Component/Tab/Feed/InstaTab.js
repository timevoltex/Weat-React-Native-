import React, {useState} from 'react';
import {Text, Image, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {Container, Content, Card, CardItem, Body, Left, Right, Icon, Badge} from 'native-base';
import {AllIcon} from '../ImportImage';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');


let testImage = require('../../../assets/1.png');
const IntaTab = () => {
  const [liked, setLiked] = useState(false);

  return(
    <Container style={{paddingBottom:200}}>
      <Content>
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
          <CardItem style={{paddingLeft:0}}>
            <TouchableOpacity onPress={() => setLiked(!liked)}>
              <Image source={liked === true ? AllIcon.likeActive : AllIcon.likeInactive} style={[style.iconRight, style.icon]}/>
            </TouchableOpacity>
            <Image source={AllIcon.feedInactive} style={[style.iconRight, style.icon]}/>
            <Image source={AllIcon.bookmarkInactive} style={ style.icon}/>

            <Body/>
            <Right>
              <Badge style={{backgroundColor:'transparent',borderRadius:8,borderColor:'#9c48fc', borderWidth:1}}><Text style={{margin:'auto', color:'#9c48fc'}}>#해시태그</Text></Badge>
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
          <CardItem style={{paddingLeft:0}}>

          <Image source={AllIcon.likeInactive} style={[style.iconRight, style.icon]}/>
            <Image source={AllIcon.feedInactive} style={[style.iconRight, style.icon]}/>
            <Image source={AllIcon.bookmarkInactive} style={ style.icon}/>
            <Body/>
            <Right>
            <Badge style={{backgroundColor:'transparent',borderRadius:8,borderColor:'#9c48fc', borderWidth:1}}><Text style={{margin:'auto', color:'#9c48fc'}}>#해시태그</Text></Badge>
            </Right>
          </CardItem>
          <CardItem style={{flexDirection:'column'}}>
            <Text><Text style={{fontWeight:'bold'}}>Lorem</Text> ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod...</Text>
            <Text><Text style={{fontWeight:'bold'}}>Lorem</Text> ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod...</Text>
            <Text><Text style={{fontWeight:'bold'}}>Lorem</Text> ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod...</Text>
          </CardItem>
        </Card>
      </Content>
    </Container>
    )
}
export default IntaTab;

const style= StyleSheet.create({
  icon: {
    width:50, height:50
  },
  iconLeft: {
    paddingLeft:10
  },
  iconRight:{
    marginRight:-10
  }

})