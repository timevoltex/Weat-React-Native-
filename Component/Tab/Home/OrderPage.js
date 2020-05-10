import React from 'react';
import { Container, Header, Left, Body, Title, Right, Content, Card, Thumbnail, CardItem, Badge, Button, List, ListItem, Item, Input } from 'native-base';
import { Text } from 'react-native';
import { foodImage, Back, Diner } from '../ImportImage';
const OrderPage = ({navigation}) => {
    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                    <Back />
                    </Button>
                </Left>
                <Body>
                    <Title>청미래 닭갈비</Title>
                </Body>
                <Right>
                    <Diner />
                </Right>
            </Header>
            <Content>
                <Card>
                    <CardItem>
                        <Thumbnail
                            square
                            source={foodImage[0].source}
                            style={{ width: 135, height: 135 }}

                        />

                        <Body style={{ paddingLeft: 10, alignSelf: "center" }}>
                            <Text
                                style={{
                                    fontSize: 14,
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Text>22:00-23:00</Text>
                                <Text>3개 남음</Text>
                            </Text>
                            <Text
                                style={{
                                    fontSize: 14,
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >

                                <Text style={{ fontSize: 14 }}>닭삼겹</Text>
                                <RendertimeBadge remain={3} />
                            </Text>
                            <Text style={{ fontSize: 14 }}>청미래 닭갈비</Text>
                            <Text
                                style={{
                                    fontSize: 14,
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Text>춘천시 석사동 198-3</Text>
                                <Text>6,000원</Text>
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
                <List>
                    <ListItem itemHeader>
                        <Text>찾아가실분 정보</Text>
                    </ListItem>
                    <ListItem >
                        <Input style={{borderWidth:0.5, borderRadius:5}} placeholder="이름을 입력해주세요"/>
                    </ListItem>
                    <Item regular>
                        <Input placeholder="010-0000-0000"/>
                    </Item>
                </List>
            </Content>
        </Container>
    )
}
const RendertimeBadge = ({ remain }) => (
    <Badge style={{ width: "fit-content", height: 21, backgroundColor: '#9943fc' }}><Text style={{ alignSelf: 'center', fontSize: 11, color: "#fff" }}>{remain}분</Text></Badge>

)
export default OrderPage;