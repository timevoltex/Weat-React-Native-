import React from 'react';
import { Image, Dimensions, Text } from 'react-native';
import { Container, Header, Button, Left, Body, Title, Badge, Content, Right } from 'native-base';
import {AllIcon, foodImage} from '../ImportImage';
import SearchBar from '../../SearchBar';

const {width: viewportWidth, height:viewportHeight} = Dimensions.get('window');
const Hashtag = ({navigation}) => {
    return(
        <Container>
            <Header style={{backgroundColor:'transparent'}}>
                <Left style={{flex:1}}>
                <Button onPress={()=> navigation.goBack()} transparent style={{paddingLeft:0}}>
                    <Image source={AllIcon.backInactive} style={{height:50, width:50}}/>
                </Button>
                </Left>
                <Body style={{alignItems:'center'}}>
                    <Title>
                        <Badge style={{backgroundColor:'transparent'}}><Text style={{color:'#9c48fc'}}>#해시태그</Text></Badge>
                    </Title>
                </Body>
                <Right>
                    <Image source={AllIcon.filterInactive} style={{height:50, width:50, paddingRight:10}}/>
                </Right>
            </Header>
            <SearchBar/>
            <Content>
                {foodImage.map((image, i) => (
                    <Image key={i} source={image.source} style={{width:viewportWidth/3, height:viewportWidth/3}}/>
                ))}
            </Content>
        </Container>

    )
}
export default Hashtag;