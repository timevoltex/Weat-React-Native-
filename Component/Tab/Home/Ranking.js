import React from "react";
import { View, Text } from "react-native";
import {
  Card,
  Left,
  Thumbnail,
  Body,
  Right,
  CardItem,
  Grid,
  Col,
} from "native-base";
import { AllIcon, Heart } from "../ImportImage";

const Ranking = () => {
  return <>
  <RankingContent rank={1}/>
  <RankingContent rank={2}/>
  <RankingContent rank={3}/>
  <RankingContent rank={4}/>
  <RankingContent rank={5}/>
  </>;
};
export default Ranking;

const RankingContent = ({rank}) => (
  <Grid>
    <Col style={{ flexGrow: 0, flexShrink: 1, flexBasis: 1 }}>
      <Text
        style={[rank === 1 ? {color:'#9943fc'} : {color:'#b8b8b8'}, {
          fontSize: 20,
          fontWeight: "bold",
          width: 24,
          textAlign: "right",
          marginVertical: "auto",
        }]}
      >
        {rank}
      </Text>
    </Col>
    <Col>
      <Card style={{ width: "90%", height: 60, alignSelf: "flex-end" }}>
        <CardItem cardBody>
          <Left>
            <Thumbnail source={AllIcon.creatActive} />
            <Body>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                청미래 닭갈비 <Text style={{ color: "#9943fc" }}>87%</Text>
              </Text>
              <Text style={{ fontSize: 10, color: "#b8b8b8" }}>
                강원도 춘천시 백령로
              </Text>
            </Body>
          </Left>
          <Right style={{ flex: 0, paddingRight: 10 }}>
            <Heart width={16} height={16} fill="#ccc" />
          </Right>
        </CardItem>
      </Card>
    </Col>
  </Grid>
);
