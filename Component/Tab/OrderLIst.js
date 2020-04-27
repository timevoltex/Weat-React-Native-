import React from 'react'
import {Container, Content, Header, Left, Icon, Body, Title, Right} from 'native-base';
import {Text, Image} from 'react-native'

const OrderList = () => {
  return(
  <Container>
    <Header>
        <Left>
          <Icon type="Entypo" name="location-pin" style={{ paddingLeft: 10 }} />
        </Left>
        <Body>
          <Title>현재 주소</Title>
        </Body>
        <Right>
          <Icon
            type="FontAwesome"
            name="sliders"
            style={{ paddingRight: 10 }}
          />
        </Right>
      </Header>
    <Content>
      <Text>This is OrderList Page</Text>
    </Content>
  </Container>
  )
}
export default OrderList;