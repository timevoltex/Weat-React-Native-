import React from 'react';
import {Image, StyleSheet} from 'react-native'
import {Header, Item, Input} from 'native-base'
import {AllIcon} from './Tab/ImportImage';

const SearchBar = () => {
  return (
    <Header hasTabs searchBar rounded transparent>
        <Item style={header.searchBar}>
          <Image source={AllIcon.searchInactive} style={[header.searchBar,icon.left, {width:30, height:30}]}/>
          <Input placeholder="가게명, 메뉴명으로 검색해보세요" placeholderTextColor={{color:'#E5E5E5'}} style={[header.searchBar, header.placeholder]}/>
        </Item>
      </Header>
  )
}
export default SearchBar

const header = StyleSheet.create({
  header: {backgroundColor:'transparent'},
  headerLeft:{flex:1},
  headerTitle:{ alignItems:'center'},
  searchBar:{backgroundColor:'transparent'},
  placeholder:{fontSize:12}
})
const icon = StyleSheet.create({
  icon: {width: 50, height: 50},
  iconLeft:{paddingLeft:10},
  iconRight:{paddingRight:10},
})