import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Profile from './Profile';
import HashTag from '../Feed/Hashtag';


const ProfileNavigation = createStackNavigator({
  Main:{screen:Profile, navigationOptions:{header:null}},
  HashTag:{screen:HashTag, navigationOptions:{header:null}}
})
export default createAppContainer(ProfileNavigation)