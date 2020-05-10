import React, { Component } from "react";
import HomeTab from "./HomeTab.js";
import StoreDetail from "./StoreDetail.js";
import OrderPage from './OrderPage';
import EventTab from './EventTab';
import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from 'react-navigation'
const DrawNav = createStackNavigator({
  HomeTab: { screen: HomeTab, navigationOptions:{header:null}},
  StoreDetail: { screen: StoreDetail, navigationOptions:{header:null} },
  OrderPage: { screen: OrderPage, navigationOptions:{header:null} },
  EventTab: {screen: EventTab, navigationOptions:{header:null}}
});
export default createAppContainer(DrawNav);