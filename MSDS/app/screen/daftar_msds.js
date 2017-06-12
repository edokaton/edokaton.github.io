import React, { Component } from 'react';
import {
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  Alert,
  Button,
  Text,
  View,
  ListView
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Left,
  Body,
  List,
  ListItem,
  Icon
} from 'native-base';
// import axios from 'axios';

class DaftarMsds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('http://192.168.43.118/msds_api/public/')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.msds),
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // componentWillUnmount() {
  //   this.serverRequest.abort();
  // }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

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
            <Title>Daftar Zat Kimia</Title>
          </Body>
        </Header>
        <Content>
          <View style={{flex: 1, paddingTop: 20}}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) => <Text>{rowData.nama}</Text>}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

export default DaftarMsds;
