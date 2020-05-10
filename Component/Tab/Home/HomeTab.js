import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  Container,
  Header,
  Content,
  Thumbnail,
  Card,
  CardItem,
  Body,
  Left,
  Right,
  Title,
  Tab,
  Tabs,
} from "native-base";
import Carousel from "react-native-snap-carousel";
import {
  AllIcon,
  foodImage,
  Location,
  Filter,
  List,
  Locationmark,
  Gps,
} from "../ImportImage";
import SearchBar from "../../SearchBar";
import EventTab from "./EventTab";
import TimeSale from "./TimeSale";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);
let filter = AllIcon.filterInactive;
function Home({navigation:{navigate}}) {
  return (
    <Container>
      <Header hasTabs transparent>
        <Left style={style.headerLeft}>
          <Location
            fill="#c2c2c2"
            width={28}
            height={28}
            style={style.iconLeft}
          />
        </Left>
        <Body style={{ alignItems: "center" }}>
          <Title style={style.headertitle}>현재 주소</Title>
        </Body>
        <Right>
          <Gps width={28} height={28} fill="#c2c2c2" style={style.iconRight} />
        </Right>
      </Header>
      <SearchBar />
      <RenderTab props={navigate}/>
    </Container>
  );
}

const RenderTab = ({props}) => {
  return (
    <Tabs style={{overflow:'scroll'}}>
      <Tab heading="이벤트">
        <EventTab props={props}/>
      </Tab>
      <Tab heading="타임세일">
        <TimeSale props={props} />
      </Tab>
      <Tab heading="랭킹">
        <Text>This is RankingTab</Text>
      </Tab>
    </Tabs>
  );
};

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
export default Home;

{
  /* 
    // const _renderItem = ({ item, i }) => {
  //   return (
  //     <TouchableOpacity
  //       activeOpacity={1}
  //       onPress={() => navigate("StoreDetail")}
  //     >
  //       <View key={i}>
  //         <Thumbnail
  //           square
  //           source={item.source}
  //           style={{ width: 170, height: 170 }}
  //         />
  //         <Text
  //           style={{
  //             display: "flex",
  //             justifyContent: "space-between",
  //             width: "100%",
  //           }}
  //         >
  //           <Text>가게명</Text>
  //           <Text>시간</Text>
  //         </Text>
  //         <Text>메뉴</Text>
  //         <Text>
  //           할인율<Text>가격</Text>
  //         </Text>
  //       </View>
  //     </TouchableOpacity>
  //   );
  // };
  
  
  <Content>
        <View
          style={{ width: "100%", height: 100, backgroundColor: "gray" }}
        ></View>
        <View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                paddingLeft: 10,
              }}
            >
              이벤트
            </Text>
            <List fill="#c2c2c2" style={style.iconRight, style.icon}
            />
          </View>
          <Card>
            {foodImage.map((item, i) => (
            <CardItem key={i} onPress={() => navigate('StoreDetail')}>
              <Thumbnail
                square
                source={item.source}
                style={{ width: 80, height: 80 }}
              />
              <Body style={{ paddingLeft: 10, alignSelf: "center" }}>
                <Text
                  style={{
                    fontSize: 14,
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }} onPress={() => navigate('StoreDetail')}
                >
                  <Text>상호명</Text>
                  <Text>기간</Text>
                </Text>
                <Text style={{ fontSize: 14 }}>퀘스트</Text>
                <Text style={{ fontSize: 14 }}>리워드</Text>
              </Body>
            </CardItem>
            ))}
          </Card>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                paddingLeft: 10,
              }}>
              타임세일
            </Text>
            <TouchableOpacity activeOpacity={1} onPress={() => navigate('TimeSale')}>

            <List fill="#c2c2c2"  style={style.iconRight, style.icon} 
              />
            </TouchableOpacity>
          </View>
          <Carousel
            data={foodImage}
            hideIndicators={true}
            renderItem={_renderItem}
            sliderWidth={viewportWidth}
            itemWidth={170}
          ></Carousel>
          
        </View>
      </Content> */
}
