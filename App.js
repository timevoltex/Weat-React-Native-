import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'
import MainScreen from './Component/MainScreen';
import { createAppContainer } from 'react-navigation';


const AppStackNavigator = createStackNavigator({
  Main:{
    screen: MainScreen
  }
})

export default createAppContainer(AppStackNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
