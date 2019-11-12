
import React, { Component } from 'react';
import HomeViewModel from './homeViewModel';


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Button,
  Image

} from 'react-native';
import RoundedButton from '../../components/RoundedButton';


//
// Home View
//
export default class HomeView extends Component {

  static navigationOptions = {title: 'Tic Tac Toe'};


  constructor(props) {
    super();
    this.vm = new HomeViewModel(() => { this.setState({}) }, props);
  }


  render() {
    return (
      
      <SafeAreaView>
        <StatusBar barStyle="light-content"  />
        <Image style={styles.logo} source={require("../../../../assets/logo_transparent.png")}  />
        <RoundedButton title="Play" onPress={() => this.vm.playPressed()}></RoundedButton>
        <RoundedButton title="History" onPress={() => this.vm.historyPressed()}></RoundedButton>
        <RoundedButton title="Stats" onPress={() => this.vm.statsPressed()}></RoundedButton>
      </SafeAreaView>

    )
  }
}

//
// Styles
//
const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'space-around',
    //alignItems: 'center',
  },

  logo: {
    alignSelf: 'center',
    height: 250.0,
    width: 250.0,
  },
  

});





