import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Alert,
  Text,
  View,
  Image
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
import styles from '../style/msds_style.js';
// import MsdsList from './app/daftar_msds.js';
import { StackNavigator } from 'react-navigation';


class MSDS extends Component {
  // static navigationOptions = {
  //   title: 'MSDS',
  // };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header style={{backgroundColor: '#009688'}}>
          <Left>
            <View transparent>
              <Icon name='menu' />
            </View>
          </Left>
          <Body>
            <Title style={{paddingLeft: 25}}>Home</Title>
          </Body>
        </Header>
        <Content style={{backgroundColor: '#00BFA5'}}>
          <View>
            <View style={styles.search}>
              <Content>
                <View style={styles.centerColumn}>
                  <Text style={styles.TitleLogo}>MSDS</Text>

                  <Item style={
                    {
                      backgroundColor: '#fff',
                      paddingLeft: 10,
                      paddingRight: 10,
                      marginBottom: 30,
                      borderRadius: 5
                    }
                  }>
                          <Icon active name='search' />
                          <Input placeholder='Cari Zat Kimia'/>
                  </Item>

                  <View>
                    <Button
                      transparent
                      onPress={() => navigate('MsdsList')}
                      style={
                        {
                          backgroundColor:'#009688',
                          borderRadius: 5,
                          width: 150
                        }
                      }
                    >
                      <Text style={{color:'#fff', textAlign: 'center', width: '100%'}}>Cari</Text>
                    </Button>
                  </View>
                </View>
              </Content>
            </View>
            <View style={styles.inlinerview}>
              <Content>
                <Grid>
                  <Col style={{paddingLeft: 10, paddingRight: 5}}>
                    <View style={styles.homeMenuWrapper}>
                      <View style={styles.menuInnerWrapper}>
                        <Image
                          style={styles.btnImage}
                          source={require('../img/list.png')}
                        />
                        <Button
                          transparent
                          block
                          onPress={() => navigate('MsdsList')}
                          style={{backgroundColor:'#009688'}}
                        >
                          <Text style={{color:'#ffffff'}}>Daftar Zat Kimia</Text>
                        </Button>
                      </View>
                    </View>
                  </Col>
                  <Col style={{paddingLeft: 5, paddingRight: 10}}>
                    <View style={styles.homeMenuWrapper}>
                      <View style={styles.menuInnerWrapper}>
                        <Image
                          style={styles.btnImage}
                          source={require('../img/compare.png')}
                        />
                        <Button
                          transparent
                          block
                          onPress={() => navigate('CompareMsds')}
                          style={{backgroundColor:'#009688'}}
                        >
                          <Text style={{color:'#ffffff', fontSize: 14}}>Bandingkan MSDS</Text>
                        </Button>
                      </View>
                    </View>
                  </Col>
                </Grid>
              </Content>
            </View>

          </View>
        </Content>
      </Container>
    );
  }
}

export default MSDS;
