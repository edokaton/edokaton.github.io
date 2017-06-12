import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor: '#00BFA5',
    height: 'auto'
  },
  TitleLogo:{
    fontSize: 54,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30,
    color: '#fff',
    fontWeight: 'bold'
  },
  search:{
    height: 250,
    marginLeft: 20,
    marginBottom: 50,
    marginRight: 20,
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  searchInput:{
    backgroundColor: '#fff',
    padding: 10
  },
  centerColumn:{
    flex:1,
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'center'
  },
  homeMenuWrapper:{
    width: '100%',
    height: 'auto',
    backgroundColor:'#ecf0f1',
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    // marginRight: 10,
    // marginLeft: 10,
    borderRadius: 5
  },
  menuInnerWrapper:{
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  },
  btnImage:{
    width: 100,
    height: 100,
    marginTop: 20,
    marginBottom: 20
  },
});

export default styles;
