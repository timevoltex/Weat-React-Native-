import React from "react";
import { Text, Dimensions } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Icon,
  Body,
  Left,
  Button,
  Badge,
} from "native-base";
import {foodImage} from '../ImportImage';
import Homefooter from './footer';
const {height:viewportHeight} = Dimensions.get('screen');

const EventTab = ({props}) => {
  return (
    <Container style={{height:viewportHeight-200}}>
      <Content>
        <CardContent
          how="방문리뷰"
          store="맛찬들"
          content="허니갈릭 스페셜 메뉴 리뷰 공모전"
          date="5.7(목)-5.14(목)"
          reward="3,000원 할인권"
        />
        <CardContent
          how="영상리뷰"
          store="함박웃음"
          content="함박웃음 먹방 이벤트"
          date="5.11(월)-5.18(월)"
          reward="3회 무료 식사권"
        />
        <CardContent
          how="방문리뷰"
          store="봄들식당"
          content="신메뉴 '봄들나물 비빔밥' 리뷰"
          date="5.11(월)-5.18(월)"
          reward="흑임자 쉐이크 기프티콘"
        />
        <RenderMore />
        <RenderSale 
        time="22:00-23:00"
        cnt={3}
        menu="닭삼겹"
        store="청미래 닭갈비"
        addr="춘천시 석사동 198-3"
        sale={25}
        price={6000}
        remain={3}
        props={props}
        />
        <Homefooter/>
      </Content>
      </Container>
  );
};export default EventTab;

export const RenderSale = ({time,cnt, menu, store, addr, sale, price, remain, props}) => (
  <Card>
    <CardItem button onPress={() => props('StoreDetail')}>
      <Thumbnail
        square
        source={foodImage[0].source}
        style={{ width: 135, height: 135}}
        
      />
      <RendertimeBadge remain={remain}/>
      <Body style={{ paddingLeft: 10, alignSelf: "center" }}>
        <Text
          style={{
            fontSize: 14,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Text>{time}</Text>
          <Text>{cnt}개 남음</Text>
        </Text>
        <Text style={{ fontSize: 14 }}>{menu}</Text>
        <Text style={{ fontSize: 14 }}>{store}</Text>
        <Text>{addr}</Text>
        <Text
          style={{
            fontSize: 14,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Text>{sale}%</Text>
          <Text>{price}원</Text>
        </Text>
      </Body>
    </CardItem>
  </Card>
);

const RenderMore = () => (
  <Button transparent style={{ width: "100%", borderWidth: 0.5 }}>
    <Text style={{ marginHorizontal: "auto" }}>더보기</Text>
  </Button>
);
const RendertimeBadge = ({remain}) => (
  <Badge style={{transform:[{translateY:10}, {translateX:5}], width:"fit-content", height:21, position:'absolute', backgroundColor:'#9943fc'}}><Text style={{alignSelf:'center',fontSize:11,color:"#fff"}}>{remain}분</Text></Badge>

)
const CardContent = ({ how, store, content, date, reward }) => {
  return (
    <Card>
      <CardItem>
        <Left>
          <Icon name="ios-person" />
          <Body>
            <Text>
              <Text>{how}</Text> | {store}
            </Text>
            <Text>{content}</Text>
            <Text>{date}</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem>
        <Text>{reward}</Text>
      </CardItem>
    </Card>
  );
};

