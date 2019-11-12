
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
import BigStatNumber from '../../../components/BigStatNumber';



//
// Stats View
//
export default class StatsView extends Component {
    static navigationOptions = { title: 'Stats' };

    constructor(props) {
        super();
        this.vm = new StatsViewModel(() => { this.setState({}) }, props);
    }

    componentDidUpdate(){
        this.vm.isMounted = true;
    }


    render() {
        if (this.vm.isLoading) {
            return <Text style={styles.centerText}>Loading...</Text>
        }
        return (
            <SafeAreaView style={styles.container}>
                <BigStatNumber title="Total Games Played" number={this.vm.getTotalGames()} />
                <View style={styles.row}>
                    <StatNumber title="Player 1 wins" number={this.vm.getTotalPlayer1Wins()} />
                    <StatNumber title="Draws" number={this.vm.getTotalDraws()} />
                    <StatNumber title="Player 2 wins" number={this.vm.getTotalPlayer2Wins()} />
                    
                </View>
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
        justifyContent: 'center',
        alignItems: 'stretch',

    },
    centerText: {
        flex: 1,
        color: 'white',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 45.0,
        justifyContent: 'space-around',
    }
});





