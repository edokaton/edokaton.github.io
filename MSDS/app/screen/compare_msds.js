import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Item,
  Label,
  InputGroup,
  Input,
  Grid,
  Col
} from 'native-base';
import styles from '../style/compare_style.js';

export default class CompareMsds extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#009688'}}>
          <Left>
            <View transparent>
              <Icon name='menu' />
            </View>
          </Left>
          <Body>
            <Title>Bandingkan Zat Kimia</Title>
          </Body>
        </Header>
        <Content style={{backgroundColor: '#00BFA5'}}>
          <Grid>
            <Col style={{borderRightWidth: 1, borderRightColor: '#009688', borderStyle: 'solid', height: '100%'}}>
              <Item style={
                {
                  backgroundColor: '#fff',
                  paddingLeft: 10,
                  paddingRight: 10,
                  marginTop: 20,
                  marginLeft: 5,
                  marginRight: 5,
                  marginBottom: 30,
                  borderRadius: 5
                }
              }>
                      <Icon active name='search' />
                      <Input placeholder='Cari Zat Kimia'/>
              </Item>
            </Col>
            <Col>
              <Item style={
                {
                  backgroundColor: '#fff',
                  paddingLeft: 10,
                  paddingRight: 10,
                  marginTop: 20,
                  marginLeft: 5,
                  marginRight: 5,
                  marginBottom: 30,
                  borderRadius: 5
                }
              }>
                      <Icon active name='search' />
                      <Input placeholder='Cari Zat Kimia'/>
              </Item>
            </Col>
          </Grid>
        </Content>
      </Container>
    );
  }
}
