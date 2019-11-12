
import React, { Component } from 'react';
import StatsViewModel from './statsViewModel';


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
import StatNumber from '../../../components/StatNumber';



//
// Stats View
//
export default class StatsView extends Component {
    static navigationOptions = { title: 'Stats' };

    constructor(props) {
        super();
        this.vm = new StatsViewModel(() => { this.setState({}) }, props);
    }


    render() {
        if (this.vm.isLoading) {
            return <Text style={styles.centerText}>Loading...</Text>
        }
        return (
            <SafeAreaView style={styles.container}>
                <StatNumber title="Games Played" number={this.vm.getTotalGames()} />
                <StatNumber title="Player 1 wins" number={this.vm.getTotalPlayer1Wins()} />
                <StatNumber title="Player 2 wins" number={this.vm.getTotalPlayer2Wins()} />
                <StatNumber title="Draws" number={this.vm.getTotalDraws()} />
            </SafeAreaView>

        )
    }
}

//
// Styles
//
const styles = StyleSheet.create({
    container: {
        height: '80%',
        justifyContent: 'space-around',
        alignItems: 'stretch',

    },
    centerText: {
        flex: 1,
        color: 'white',
        alignSelf: 'center',
        justifyContent: 'center',
    },
});





