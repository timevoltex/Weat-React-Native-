import React from 'react';
import { Image } from 'react-native';
import { Container, Left, Button, Body, Right } from 'native-base';
import {AllIcon} from '../ImportImage';
import Searchbar from '../../SearchBar';

export default function Timesale({navigation}){
  return(
    <Container>
     <Header style={style.header}>
        <Left style={style.headerLeft}>
          <Button style={{paddingLeft:0}} transparent onPress={() => navigation.goBack()}>
            <Image source={AllIcon.backInactive} style={style.icon} />
          </Button>
        </Left>
        <Body style={{ alignItems: "center" }}>
          <Title style={style.headertitle}>타임세일</Title>
        </Body>
        <Right>
          <Image
            source={AllIcon.filterInactive}
            style={{ height: 50, width: 50, paddingRight: 10 }}
          />
        </Right>
      </Header>
      <Searchbar/>
      <Content>
      </Content>
    </Container>
  )
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    alignSelf: "center",
    flexDirection: "row",
  },
  header: {
    backgroundColor: "transparent",
  },
  headertitle: {
    color: "black",
  },
  headerLeft: {
    flex: 1,
  },
  icon: {
    width: 50,
    height: 50,
  },
  iconLeft: {
    paddingLeft: 10,
  },
  iconRight: {
    paddingRight: 10,
  },
});