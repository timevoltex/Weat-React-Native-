import React, { useState } from "react";
import {
  Footer,
  Icon,
  FooterTab,
  Button,
  Container,
  Content,
} from "native-base";
import HomeTab from "./Tab/HomeTab";
import Add from "./Tab/Add";
import OrderList from "./Tab/OrderLIst";
import Feed from "./Tab/Feed";
import Profile from "./Tab/Profile";


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
  const [activeIndex, setActiveIndex] = useState(1);

  const switchIndex = (activeIndex) => {
    setActiveIndex(activeIndex);
    console.log(activeIndex);
  };

  return (
<>
      {ChangeTab()}

      <Footer>
        <FooterTab>
          <Button onPress={() => switchIndex(0)} active={activeIndex === 0}>
            <Icon type="Entypo" name="home" />
          </Button>
          <Button onPress={() => switchIndex(1)} active={activeIndex === 1}>
            <Icon type="MaterialIcons" name="chat" />
          </Button>
          <Button onPress={() => switchIndex(2)} active={activeIndex === 2}>
            <Icon name="ios-add-circle" />
          </Button>
          <Button onPress={() => switchIndex(3)} active={activeIndex === 3}>
            <Icon type="Foundation" name="clipboard-pencil" />
          </Button>
          <Button onPress={() => switchIndex(4)} active={activeIndex === 4}>
            <Icon name="md-person" />
          </Button>
        </FooterTab>
      </Footer>
    </>
  );
};
export default NavigationTab;
