import React from 'react'
import {View, Text, Image} from 'react-native';
import {Left} from 'native-base'
import {AllIcon} from '../ImportImage';

const Homefooter = () => (
  <View style={{ backgroundColor: "#E6E6E6", height: 110 }}>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        height: 30,
      }}
    >
      <Text style={{ fontSize: 10, marginVertical: "auto" }}>이용약관</Text>
      <Text style={{ fontSize: 10, marginVertical: "auto" }}>
        자주 묻는 질문
      </Text>
      <Text style={{ fontSize: 10, marginVertical: "auto" }}>공지사항</Text>
      <Text style={{ fontSize: 10, marginVertical: "auto" }}>이벤트</Text>
    </View>
    <View>
      <Left
        style={{
          alignSelf: "auto",
          marginVertical: 6,
          marginHorizontal: 24,
        }}
      >
        <Text
          style={{
            fontSize: 10,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Text>강원도 춘천시 강원대학길1, KNU스타트업큐브 B동 214호</Text>
          <Image
            source={AllIcon.logo}
            style={{ width: 51, height: 15, opacity: 0.2 }}
          />
        </Text>
        <Text style={{ fontSize: 10 }}>
          사업자 등록 번호: 151-20-00854 <Text>대표 최원준</Text>
        </Text>
        <Text style={{ fontSize: 10 }}>
          Copyright {"\u00A9"} 2020 Connple.All rights reserved.
        </Text>
      </Left>
    </View>
  </View>
);
export default Homefooter
