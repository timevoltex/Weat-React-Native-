import React, { useState } from "react";
import {
  Footer,
  Icon,
  FooterTab,
  Button,
  Container,
  Content,
} from "native-base";
import {Image, StyleSheet} from 'react-native'
import HomeTab from "./Tab/Home/HomeTab";
import Add from "./Tab/Add/Add";
import OrderList from "./Tab/OrderList/OrderLIst";
import Feed from "./Tab/Feed/Feed";
import Profile from "./Tab/Profile/Profile";
import {AllIcon} from './Tab/ImportImage';


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
    console.log(activeIndex);
  };

  return (
<>
      {ChangeTab()}

      <Footer >
        <FooterTab style={{backgroundColor:'#fff'}}>
          <Button style={{backgroundColor:"#fff"}} onPress={() => switchIndex(0)} active={activeIndex === 0}>
            <Image source={activeIndex === 0? AllIcon.homeActive : AllIcon.homeInactive} style={style.icon}/>
          </Button>
          <Button style={{backgroundColor:"#fff"}} onPress={() => switchIndex(1)} active={activeIndex === 1}>
            <Image source={activeIndex === 1? AllIcon.feedActive : AllIcon.feedInactive} style={style.icon}/>
          </Button>
          <Button style={{backgroundColor:"#fff"}} onPress={() => switchIndex(2)} active={activeIndex === 2}>
            <Image source={activeIndex === 2? AllIcon.creatActive : AllIcon.creatInactive} style={style.icon}/>
          </Button>
          <Button style={{backgroundColor:'#fff'}} onPress={() => switchIndex(3)} active={activeIndex === 3}>
            <Image source={activeIndex === 3? AllIcon.listActive : AllIcon.listInactive} style={style.icon}/>
          </Button>
          <Button style={{backgroundColor:'#fff'}} onPress={() => switchIndex(4)} active={activeIndex === 4}>
            <Image source={activeIndex === 4 ? AllIcon.mypageActive : AllIcon.mypageInactive} style={style.icon}/>
          </Button>
        </FooterTab>
      </Footer>
    </>
  );
};
export default NavigationTab;

const style= StyleSheet.create({
  icon:{
    width:50, height:50
  }
})
