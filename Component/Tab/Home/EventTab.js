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
      <Content padder>
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
        price={8000}
        remain={3}
        props={props}
        />
        <Homefooter/>
      </Content>
      </Container>
  );
};export default EventTab;

export const RenderSale = ({time,cnt, menu, store, addr, sale, price, remain, props}) => {
  const aftersale = price*((100-sale)/100);
    return(
  <Card style={{borderRadius:5}}>
    <CardItem cardBody button onPress={() => props('StoreDetail', {saleprice:aftersale, store:store, time:time,remain:remain, addr:addr,price:price, sale:sale, menu:menu, cnt:cnt})}>
      <Thumbnail
        square
        source={foodImage[0].source}
        style={{ width: 135, height: 135}}
        
      />
      <RendertimeBadge remain={remain}/>
      <Body style={{ paddingHorizontal: 10, alignSelf: "center" }}>
        <Text
          style={{
            fontSize: 12,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Text style={{color:'#707070'}}>{time}</Text>
          <Text style={{color:'#ccc'}}>{cnt}개 남음</Text>
        </Text>
        <Text style={{ fontSize: 14, fontWeight:'bold' }}>{menu}</Text>
        <Text style={{ fontSize: 14 }}>{store}</Text>
        <Text>{addr}</Text>
        <Text
          style={{
            fontSize: 20,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Text style={{color:'#707070'}}>{sale}%</Text>
          <Text style={{color:'#9943fc'}}>{price*((100-sale)/100)}원</Text>
        </Text>
      </Body>
    </CardItem>
  </Card>
)};

const RenderMore = () => (
  <Button transparent style={{ width: "100%", borderWidth: 0.5 }}>
    <Text style={{ marginHorizontal: "auto" }}>더보기</Text>
  </Button>
);
const RendertimeBadge = ({remain}) => (
  <Badge style={{transform:[{translateY:10}, {translateX:5}], width:"10%", height:21, position:'absolute', backgroundColor:'#9943fc'}}><Text style={{alignSelf:'center',fontSize:11,color:"#fff"}}>{remain}분</Text></Badge>

)
const CardContent = ({ how, store, content, date, reward }) => {
  return (
    <Card>
      <CardItem>
        <Left>
          <Icon name="ios-person" />
          <Body>
            <Text>
              <Text style={{color:'#9c48fc'}}>{how}</Text> | {store}
            </Text>
            <Text style={{fontWeight:'bold'}}>{content}</Text>
            <Text style={{color:"#dadada"}}>{date}</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem style={{backgroundColor:'#9c48fc'}}>
        <Text style={{color:"#fff", fontWeight:'bold', marginHorizontal:'auto'}}>{reward}</Text>
      </CardItem>
    </Card>
  );
};

