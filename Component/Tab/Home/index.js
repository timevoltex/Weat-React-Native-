import React, { Component } from "react";
import HomeTab from "./HomeTab.js";
import StoreDetail from "./StoreDetail.js";
import OrderPage from './OrderPage';
import EventTab from './EventTab';
import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from 'react-navigation'
import OrderList from '../OrderList/OrderLIst';
import Ranking from './Ranking';
const DrawNav = createStackNavigator({
  HomeTab: { screen: HomeTab, navigationOptions:{headerShown:false}},
  StoreDetail: { screen: StoreDetail, navigationOptions:{headerShown:false} },
  OrderPage: { screen: OrderPage, navigationOptions:{headerShown:false} },
  EventTab: {screen: EventTab, navigationOptions:{headerShown:false}},
  OrderList: {screen:OrderList, navigationOptions:{headerShown:false}},
  Ranking: {screen:Ranking, navigationOptions:{headerShown:false}}
});
export default createAppContainer(DrawNav);