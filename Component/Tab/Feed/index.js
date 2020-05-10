import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation';
import Feed from './Feed';
import HashTag from './Hashtag';
import InstaPage from './InstaTab';
import MenuInsta from './MenuInsta';

const FeedPage = createStackNavigator({
    Main:{screen: Feed, navigationOptions:{header:null}},
    HashTag:{screen: HashTag, navigationOptions:{header:null}},
    // InstaPage:{screen:InstaPage},
    MenuInsta:{screen:MenuInsta, navigationOptions:{header:null}},
})
export default createAppContainer(FeedPage);