
import React, { Component } from 'react';
import HistoryViewModel from './historyViewModel';
import moment from 'moment';
import { StyleSheet, Text } from 'react-native';
import ListTile from '../../../components/ListTile';



//
// History View
//
export default class HistoryView extends Component {

  static navigationOptions = { title: 'History' };

  constructor(props) {
    super();
    this.vm = new HistoryViewModel(() => { this.setState({}) }, props);
  }


  render() {
    if (this.vm.isLoading) {
      return <Text style={styles.centerText}>Loading...</Text>
    }
    else if (this.vm.gameHistories.length <= 0) {
      return <Text style={styles.centerText}>You have no played any games yet</Text>
    }
    else {
      return this.vm.gameHistories.map((gameHistory) =>
        <ListTile title={this.vm.getTitleFromGameHistory(gameHistory)} subtitle={moment(gameHistory.date).fromNow()} />
      );
    }
  }
}

//
// Styles
//
const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    color: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});





