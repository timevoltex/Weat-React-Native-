import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Left, Button, Body, Title, Right, Content } from 'native-base';
import InstaTab from './InstaTab';
import SearchBar from '../../SearchBar';
import {AllIcon} from '../ImportImage';

export default function MenuInsta({navigation}) {
  return(
    <Container>
      <Header style={style.header}>
        <Left style={style.headerLeft}>
          <Button style={{ paddingLeft: 0 }} transparent onPress={() => navigation.goBack()}>
            <Image source={AllIcon.backInactive} style={style.icon} />
          </Button>
        </Left>
        <Body style={{ alignItems: "center" }}>
          <Title style={style.headertitle}><Image source={AllIcon.weat} style={{width: 66, height:22}}/></Title>
        </Body>
        <Right>
          <Image
            source={AllIcon.filterInactive}
            style={{ height: 50, width: 50, paddingRight: 10 }}
          />
        </Right>
      </Header>
      <SearchBar />
      <Content>
        <InstaTab/>
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