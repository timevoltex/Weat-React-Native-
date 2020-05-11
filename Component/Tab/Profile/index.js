import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Profile from './Profile';
import HashTag from '../Feed/Hashtag';


const ProfileNavigation = createStackNavigator({
  Main:{screen:Profile, navigationOptions:{headerShown:false}},
  HashTag:{screen:HashTag, navigationOptions:{headerShown:false}}
})
export default createAppContainer(ProfileNavigation)