import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
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
  Col,
  H1
} from 'native-base';
import styles from '../style/detail_msds_style.js';

export default class DetailMsds extends Component {
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
            <Title>Data Zat</Title>
          </Body>
        </Header>
        <Content>
          {/* <Text>halaman detail</Text> */}
          <ScrollView>
            <View style={styles.button_wrapper}>
              <Button
                transparent
                style={
                  {
                    backgroundColor:'#009688',
                    borderRadius: 5,
                    marginLeft: 5,
                    marginRight: 5,
                    width: '28%'
                  }
                }
              >
                <Text style={{color:'#fff', textAlign: 'center', width: '100%'}}>Share</Text>
              </Button>

              <Button
                transparent
                style={
                  {
                    backgroundColor:'#009688',
                    borderRadius: 5,
                    marginLeft: 5,
                    marginRight: 5,
                    width: '28%'
                  }
                }
              >
                <Text style={{color:'#fff', textAlign: 'center', width: '100%'}}>Report</Text>
              </Button>

              <Button
                transparent
                style={
                  {
                    backgroundColor:'#009688',
                    borderRadius: 5,
                    marginLeft: 5,
                    marginRight: 5,
                    width: '28%'
                  }
                }
              >
                <Text style={{color:'#fff', textAlign: 'center', width: '100%'}}>Simpan</Text>
              </Button>
            </View>

            <View style={styles.msds_title}>
              <H1 style={{textAlign: 'center'}}>Material Safety Data Sheet</H1>
              <H1 style={{textAlign: 'center'}}>Air (H2O)</H1>
            </View>

            <View style={styles.msds_desc}>
              
            </View>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}
