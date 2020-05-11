import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation';
import Feed from './Feed';
import HashTag from './Hashtag';
import InstaPage from './InstaTab';
import MenuInsta from './MenuInsta';

const FeedPage = createStackNavigator({
    Main:{screen: Feed, navigationOptions:{headerShown:false}},
    HashTag:{screen: HashTag, navigationOptions:{headerShown:false}},
    // InstaPage:{screen:InstaPage},
    MenuInsta:{screen:MenuInsta, navigationOptions:{headerShown:false}},
})
export default createAppContainer(FeedPage);