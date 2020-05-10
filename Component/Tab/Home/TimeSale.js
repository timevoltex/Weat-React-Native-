import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Container, Left, Button, Body, Right, Header, Title, Content, Card, CardItem, Thumbnail } from 'native-base';
import { AllIcon, Back, Filter } from '../ImportImage';
import Searchbar from '../../SearchBar';
import {RenderSale} from './EventTab';

const TimeSale = ({props}) => {
  return(
    <Content>
      <RenderSale 
      time="22:00-23:00"
      cnt={3}
      menu="닭삼겹"
      store="청미래 닭갈비"
      addr="춘천시 석사동 198-3"
      sale={25}
      price={6000}
      remain={3}
      props={navigation}
      />
      <RenderSale 
      time="22:00-23:00"
      cnt={4}
      menu="닭갈비 + 우동사리"
      store="오성닭갈비"
      addr="춘천시 석사동 65-6 2층"
      sale={30}
      price={4500}
      remain={5}
      props={navigation}
      />
      <RenderSale 
      time="22:00-23:00"
      cnt={2}
      menu="리얼 스파이시 돈까스"
      store="리얼 돈까스"
      addr="춘천시 석사동 846"
      sale={18}
      price={7800}
      remain={11}
      props={navigation}
      />
      <RenderSale 
      time="22:00-23:00"
      cnt={4}
      menu="야채곱창(2인분)"
      store="돌다리 곱창"
      addr="춘천시 석사동 165-23"
      sale={20}
      price={13000}
      remain={24}
      props={navigation}
      />
    </Content>
  )
}
export default TimeSale














// export default function Timesale({ navigation }) {
//   return (
//     <Container>
//       <Header style={style.header}>
//         <Left style={style.headerLeft}>
//           <Button style={{ paddingLeft: 0 }} transparent onPress={() => navigation.goBack()}>
//             <Back fill="#c2c2c2" style={style.icon} />
//           </Button>
//         </Left>
//         <Body style={{ alignItems: "center" }}>
//           <Title style={style.headertitle}>타임세일</Title>
//         </Body>
//         <Right>
//           <Filter fill="#c2c2c2" style={{ height: 50, width: 50, paddingRight: 10 }}
//           />
//         </Right>
//       </Header>
//       <Searchbar />
//       <Content>
//         <Card>
//           <CardItem >
//             <Left>
//               <Thumbnail square source={require('../../../assets/1.png')} style={{ width: 115, height: 115 }} />
//               <Body style={{flexDirection:'column', justifyContent:'space-between'}}>
//                 <Text>시간</Text>
//                 <Text>가게명</Text>
//                   <Text>메뉴</Text>
//                 <Text style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
//                   <Text>할인율 가격</Text>
//                   <View>
//                     <Text>구매인원</Text>
//                     <Text>잔여물량</Text>
//                   </View>
//                 </Text>
//               </Body>
//             </Left>
//           </CardItem>
//         </Card>
//       </Content>
//     </Container>
//   )
// }

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