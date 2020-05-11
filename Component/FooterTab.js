import React, { useState, } from "react";
import {
  Footer,

  FooterTab,
  Button,

} from "native-base";
import {Image, StyleSheet} from 'react-native'
import HomeTab from "./Tab/Home/index";
import Add from "./Tab/Add/Add";
import OrderList from "./Tab/OrderList/OrderLIst";
import Feed from "./Tab/Feed/index";
import Profile from "./Tab/Profile/index";
import {Home, Feed as FeedIcon, Plus, OrderList as OrderListIcon, Mypage} from './Tab/ImportImage';


const NavigationTab = () => {
  function ChangeTab() {
    switch (activeIndex) {
      case 0: return (<HomeTab/>)

      case 1:return (<Feed/>);

      case 2: return(<Add/>);

      case 3: return (<OrderList/>);

      case 4: return (<Profile/>);

      default:
    }
  }
  const [activeIndex, setActiveIndex] = useState(0);

  const switchIndex = (activeIndex) => {
    setActiveIndex(activeIndex);
  };

  return (
<>
      {ChangeTab()}

      <Footer >
        <FooterTab style={{backgroundColor:'#fff'}}>
          <Button style={{backgroundColor:"#fff"}} onPress={() => switchIndex(0)} active={activeIndex === 0}>
            <Home fill={activeIndex === 0? '#9943fc' : '#c2c2c2'} style={style.icon}/>
          </Button>
          <Button style={{backgroundColor:"#fff"}} onPress={() => switchIndex(1)} active={activeIndex === 1}>
            <FeedIcon fill={activeIndex === 1? '#9943fc' :  '#c2c2c2'} style={style.icon}/>
          </Button>
          <Button style={{backgroundColor:"#fff"}} onPress={() => switchIndex(2)} active={activeIndex === 2}>
            <Plus fill={activeIndex === 2?  '#9943fc' :  '#c2c2c2'} style={style.icon}/>
          </Button>
          <Button style={{backgroundColor:'#fff'}} onPress={() => switchIndex(3)} active={activeIndex === 3}>
            <OrderListIcon fill={activeIndex === 3? '#9943fc' : '#c2c2c2' } style={style.icon}/>
          </Button>
          <Button style={{backgroundColor:'#fff'}} onPress={() => switchIndex(4)} active={activeIndex === 4}>
            <Mypage fill={activeIndex === 4 ?  '#9943fc' : '#c2c2c2' } style={style.icon}/>
          </Button>
        </FooterTab>
      </Footer>
    </>
  );
};
export default NavigationTab;

const style= StyleSheet.create({
  icon:{
    width:22, height:22
  }
})
