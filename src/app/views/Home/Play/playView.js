
import React, { Component } from 'react';
import PlayViewModel from './playViewModel';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image

} from 'react-native';
import RoundedButton from '../../../components/RoundedButton';
import FlatButton from '../../../components/FlatButton';


//
// Play View
//
export default class PlayView extends Component {

  static navigationOptions = {title: 'Play'};

  constructor() {
    super();
    this.vm = new PlayViewModel(() => { this.setState({}) });
  
  }


  render() {
    return (
      <SafeAreaView style={styles.container}>
        <GameStatus  vm={this.vm}/>
         <TicTacToeBoard vm={this.vm}/>
         <ActionButton vm={this.vm}/>
      </SafeAreaView>

    )
  }
}

//
// Tic Tac Toe Board
//
const TicTacToeBoard = ({vm}) => {
  return (
      <View style={styles.board}>
          {[...Array(3)].map((x, i) =>
              <View key={i} style={styles.ticTacToeRow}>
                  {[...Array(3)].map((x, j) =>
                      < TicTacToeButton key={(i+1)*(j+1)} x={i} y={j} vm={vm} />
                  )}
              </View>
          )}
      </View>
  );
}

//
// Tic Tac Toe Button
//
const TicTacToeButton = ({ x, y, vm }) => {
  
  return (
        
    <TouchableOpacity style={styles.tacTacToeButton}
      onPress={vm.winner == null && vm.game[x][y] == 0  ? () => vm.ticTacToeButtonPressed(x, y) : null} >
      {
        vm.game[x][y] == 1 ?
          <Image source={require("../../../../../assets/x.png")} /> :
          vm.game[x][y] == 2 ?
            <Image source={require("../../../../../assets/o.png")} /> :
            <></>
      }
    </TouchableOpacity>
  );
}

//
// Game Status
//
const GameStatus = ({vm}) => {


  if (!vm.isStarted) return <Text></Text>;

  switch (vm.winner) {
    case 0:
      return <Text style={styles.gameStatus}>Draw!</Text>;
    case 1:
    case 2:
      return <Text style={styles.gameStatus}> Player {vm.winner} Wins!</Text>;
    default:
      return <Text style={styles.gameStatus}> Player {vm.whosTurn}'s Turn</Text>;
  }

}

//
// Action Button
//
const ActionButton = ({vm}) => {
 
  if (vm.isStarted && vm.winner == null) {
      return <FlatButton title="Reset" onPress={() => vm.resetButtonPressed()} />
  }
  else if (vm.isStarted) {
    return <RoundedButton title="Play Again" onPress={() => vm.resetButtonPressed()} />
  }
  else {
      return <RoundedButton title="Start" onPress={() => vm.startButtonPressed()} />
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
  board: {
    //borderWidth: 10,
    //borderColor: 'white',
    height: 300,
    width: 300,
    justifyContent: 'center',
    alignSelf: 'center',

  },
  tacTacToeButton: {
    //backgroundColor: 'blue',
    height: 100,
    width: 100,
    borderWidth: 1,
    borderColor: "#64ffda",
  },
  ticTacToeRow: {
    flexDirection: 'row',

  },
  actionButton: {
    color: "#64ffda",
    backgroundColor: "#64ffda",
  },
  title: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 18.0,
    fontWeight: 'bold',
    marginTop: 45.0,
  },
  scoreboardImage: {
    height: 40.0,
    width: 40.0,
  },
  playerScoreboard: {
    // flex: 1,
    flexDirection: 'row',
  },
  gameStatus: {
    color: 'white',
    fontSize: 22.0,
    fontWeight: 'bold',
    alignSelf: 'center',

  }

});




