import React, { useState } from "react";
import {
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Left,
  Right,
  Icon,
  Badge,
} from "native-base";
import { AllIcon } from "../ImportImage";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

let testImage = require("../../../assets/1.png");
const MyInsta = ({ props }) => {
  const [liked, setLiked] = useState(false);

  const onLike = () => {
    setLiked(!liked);
  };

  return (
    <Container style={{height:viewportHeight-290}}>
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Icon name="ios-person" />
              <Body>
                <Text>유저명</Text>
                <Text>
                  33.3333%<Text>00:00</Text>
                </Text>
              </Body>
            </Left>
            <Right>
              <Text>마리스커피</Text>
              <Text>아이스아메리카노</Text>
            </Right>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{ uri: testImage }}
              style={{ height: viewportWidth, width: viewportWidth, flex: 1 }}
            />
          </CardItem>
          <CardItem style={{ paddingLeft: 0 }}>
            <TouchableOpacity onPress={() => onLike()}>
              <Image
                source={
                  liked === true ? AllIcon.likeActive : AllIcon.likeInactive
                }
                style={[style.iconRight, style.icon]}
              />
            </TouchableOpacity>
            <Image
              source={AllIcon.feedInactive}
              style={[style.iconRight, style.icon]}
            />
            <Image source={AllIcon.bookmarkInactive} style={style.icon} />
            <Body />
            <Right>
              <Badge
                style={{
                  backgroundColor: "transparent",
                  borderColor: "black",
                  borderWidth: 1,
                }}
              >
                <Text
                  onPress={() => props.navigate("HashTag")}
                  style={{ margin: "auto" }}
                >
                  #해시태그
                </Text>
              </Badge>
            </Right>
          </CardItem>
          <CardItem style={{ flexDirection: "column" }}>
            <Text>
              <Text style={{ fontWeight: "bold" }}>Lorem</Text> ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod...
            </Text>
            <Text>
              <Text style={{ fontWeight: "bold" }}>Lorem</Text> ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod...
            </Text>
            <Text>
              <Text style={{ fontWeight: "bold" }}>Lorem</Text> ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod...
            </Text>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Left>
              <Icon name="ios-person" />
              <Body>
                <Text>유저명</Text>
                <Text>
                  33.3333%<Text>00:00</Text>
                </Text>
              </Body>
            </Left>
            <Right>
              <Text>마리스커피</Text>
              <Text>아이스아메리카노</Text>
            </Right>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{ uri: testImage }}
              style={{ height: viewportWidth, width: viewportWidth, flex: 1 }}
            />
          </CardItem>
          <CardItem style={{ paddingLeft: 0 }}>
            <TouchableOpacity onPress={() => onLike()}>
              <Image
                source={
                  liked === true ? AllIcon.likeActive : AllIcon.likeInactive
                }
                style={[style.iconRight, style.icon]}
              />
            </TouchableOpacity>
            <Image
              source={AllIcon.feedInactive}
              style={[style.iconRight, style.icon]}
            />
            <Image source={AllIcon.bookmarkInactive} style={style.icon} />
            <Body />
            <Right>
              <Badge
                style={{
                  backgroundColor: "transparent",
                  borderColor: "black",
                  borderWidth: 1,
                }}
              >
                <Text style={{ margin: "auto" }}>#해시태그</Text>
              </Badge>
            </Right>
          </CardItem>
          <CardItem style={{ flexDirection: "column" }}>
            <Text>
              <Text style={{ fontWeight: "bold" }}>Lorem</Text> ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod...
            </Text>
            <Text>
              <Text style={{ fontWeight: "bold" }}>Lorem</Text> ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod...
            </Text>
            <Text>
              <Text style={{ fontWeight: "bold" }}>Lorem</Text> ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod...
            </Text>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};
export default MyInsta;
const style = StyleSheet.create({
  icon: { height: 50, width: 50 },
  iconLeft: { paddingLeft: 10 },
  iconRight: { marginRight: -10 },
});
