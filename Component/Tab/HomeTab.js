import React from "react";
import { View, StyleSheet, Text} from "react-native";
import { Icon, Container, Header, Input, Item, Content, Thumbnail, Card, CardItem, Left, Body, Right} from "native-base";

function Home() {
  return (
    <Container>
      <Header searchBar rounded style={{ backgroundColor: "#fff" }}>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="오늘은 뭘 먹지?" />
        </Item>
      </Header>
      <Content>
        <View
          style={{ width: "100%", height: 100, backgroundColor: "gray" }}
        ></View>
        <View>
          <View style={{flexDirection:'row', justifyContent:"space-between"}}>
          <Text style={{margin:'auto 0'}}>이벤트 
          </Text>
            <Icon type="Octicons" name="list-unordered" style={{color:'#c2c2c2'}}/>
          </View>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'assets/1.png'}}/>
              </Left>
              <Body>
                <Text>
                  이거시 테스트다
                </Text>
              </Body>
              <Right>
                
              </Right>
            </CardItem>
          </Card>
        </View>
      </Content>
    </Container>
  );
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    alignSelf: "center",
    flexDirection: "row",
  },
});
export default Home;
