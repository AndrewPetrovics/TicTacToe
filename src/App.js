
import React, { useState, useContext, useReducer } from 'react';
// import TicTacToeBoard from './components/TicTacToeBoard';
// import ActionButton from './components/ActionButton';
// import GameStatus from './components/GameStatus'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import {GameProvider} from './contexts/GameContext'
import HomeView from './app/views/Home/homeView'
import PlayView from './app/views/Home/Play/playView'
import HistoryView from './app/views/Home/History/historyView'
import StatsView from './app/views/Home/Stats/statsView'
import Database from './database/database'
import AuthSvc from './businessLogic/AuthSvc'


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



import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

Database.initialize();
AuthSvc.signInUserAnonymously();


const AppNavigator = createStackNavigator({
  Home: { screen: HomeView },
  Play: { screen: PlayView },
  Stats: { screen: StatsView },
  History: { screen: HistoryView },
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#303030',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerBackTitle: "Back"
    
  },
  titleStyle: { color: 'white' }, tintColor: 'white',
  cardStyle: {
    backgroundColor: '#303030'
  }
});

const AppContainer = createAppContainer(AppNavigator);

// console.ignoredYellowBox = [
//   'Setting a timer'
//   ];



export default App = () => {
  console.log("initlizeing")
  return <AppContainer ref={nav => { this.navigator = nav; }}/>
}



