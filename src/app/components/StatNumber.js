
import React, { Component } from 'react';
import { StyleSheet, Button, TouchableOpacity, Text, View } from 'react-native';


const StatNumber = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{props.number}</Text>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
        



}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center'
       
    },

    number: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 32.0,
        fontWeight: 'bold',
       
    },

    title: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 16.0,
        
       
    },
    

});

export default StatNumber;

