import React, {useState} from "react";
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
  TabHeading,
} from "native-base";
import {
  AllIcon,
  Location,
  Gps,
} from "../ImportImage";
import SearchBar from "../../SearchBar";
import EventTab from "./EventTab";
import TimeSale from "./TimeSale";
import Ranking from "./Ranking";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);
let filter = AllIcon.filterInactive;
function Home({navigation:{navigate}}) {
  const [activeTab, setActiveTab ] = useState(0);
  return (
    <Container>
      <Header  transparent>
        <Left style={headerStyle.headerLeft}>
          <Location
            fill="#c2c2c2"
            width={18}
            height={24}
            style={headerStyle.iconLeft}
          />
        </Left>
        <Body style={headerStyle.headerBody}>
          <Title style={headerStyle.headertitle}>현재 주소</Title>
        </Body>
        <Right>
          <Gps width={24} height={24 } fill="#c2c2c2" style={headerStyle.iconRight} />
        </Right>
      </Header>
      <SearchBar />
      <Tabs style={tabStyle.tabs} tabBarUnderlineStyle={tabStyle.tabUnder} onChangeTab={({i}) => setActiveTab(i)}>
      <Tab tabStyle={tabStyle.tabs}  heading={<TabHeading style={tabStyle.tabHeading}><Text style={activeTab === 0 ? tabStyle.tabActive : tabStyle.tabInActive}>이벤트</Text></TabHeading>}>
        <EventTab props={navigate}/>
      </Tab>
      <Tab heading={<TabHeading style={tabStyle.tabHeading}><Text style={activeTab === 1 ? tabStyle.tabActive : tabStyle.tabInActive}>타임세일</Text></TabHeading>}>
        <TimeSale props={navigate} />
      </Tab>
      <Tab heading={<TabHeading style={tabStyle.tabHeading}><Text style={activeTab === 2 ? tabStyle.tabActive : tabStyle.tabInActive}>랭킹</Text></TabHeading>}>
        <Ranking />
      </Tab>
    </Tabs>
    </Container>
  );
}

const RenderTab = ({props}) => {
  return (
    <Tabs tabBgColor="transparent">
      <Tab heading="이벤트">
        <EventTab props={props}/>
      </Tab>
      <Tab heading="타임세일">
        <TimeSale props={props} />
      </Tab>
      <Tab heading="랭킹">
        <Ranking props={props}/>
      </Tab>
    </Tabs>
  );
};

export const headerStyle= StyleSheet.create({
  header: {
    backgroundColor: "transparent",
  },
  headertitle: {
    color: "black",
    fontSize:16
  },

  headerLeft: {
    flex: 1,
  },
  headerBack:{
    paddingLeft:0
  },
  headerBody:{
    alignItems:'center'
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
})

export const tabStyle=StyleSheet.create({
  tabs:{
    backgroundColor:'transparent'
  },
  tabUnder:{
    backgroundColor:'#9943fc'
  },
  tabActive:{
    color:'#9943fc'
  },
  tabInActive:{
    color:'#dadada'
  }, 
  tabHeading:{
    backgroundColor:'#fff'
  },

})
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
