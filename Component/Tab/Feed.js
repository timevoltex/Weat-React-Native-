import React, {useState} from "react";
import { View, StyleSheet, Text, Dimensions, Image } from "react-native";
import {
  Icon,
  Container,
  Header,
  Input,
  Item,
  Content,
  Segment,
  Tab,
  Tabs,
  TabHeading,
  Thumbnail,
  Card,
  CardItem,
  Body,
  Left,
  Right,
  Button,
  Title,
} from "native-base";
import Carousel from "react-native-snap-carousel";
import InstaTab from './Feed/InstaTab';
import PhotoTab from './Feed/PhotoTab';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

const Feed = () => {

  return(
  <Container>
    <Header>
        <Left>
          <Icon type="Entypo" name="location-pin" style={{ paddingLeft: 10 }} />
        </Left>
        <Body>
          <Title>현재 주소</Title>
        </Body>
        <Right>
          <Icon
            type="FontAwesome"
            name="sliders"
            style={{ paddingRight: 10 }}
          />
        </Right>
      </Header>
    <Header hasTabs searchBar rounded style={{ backgroundColor: "#fff" }}>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="오늘은 뭘 먹지?" />
        </Item>
      </Header>
      <Tabs>
        <Tab heading={<TabHeading><Icon name="square"/></TabHeading>}>
          <InstaTab/>
        </Tab>
        <Tab heading={<TabHeading><Icon name="apps"/></TabHeading>}>
          <PhotoTab/>
        </Tab>
      </Tabs>
  </Container>
  )
}
export default Feed;