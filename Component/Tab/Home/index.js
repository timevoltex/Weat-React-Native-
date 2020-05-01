import React, { Component } from "react";
import HomeTab from "./HomeTab.js";
import StoreDetail from "./StoreDetail.js";
// import EditScreenTwo from "./EditScreenTwo.js";
import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from 'react-navigation'
const DrawNav = createStackNavigator({
  HomeTab: { screen: HomeTab, navigationOptions:{header:null}},
  StoreDetail: { screen: StoreDetail, navigationOptions:{header:null} }
  // EditScreenTwo: { screen: EditScreenTwo }
});
export default createAppContainer(DrawNav);