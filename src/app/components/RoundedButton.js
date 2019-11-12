
import React, { Component } from 'react';
import { StyleSheet, Button, TouchableOpacity, Text } from 'react-native';

const RoundedButton = (props) => {
    return <TouchableOpacity
        style={styles.roundedButton}
        activeOpacity={.5}
        onPress={props.onPress}>
        <Text style={styles.textStyle}>{props.title}</Text>
    </TouchableOpacity>



}

const styles = StyleSheet.create({
    roundedButton: {

        marginTop: 10,
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#64ffda',
        borderRadius: 50,
       
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        
        elevation: 20,
        
    },
    textStyle: {
        alignSelf: 'center',
    }

});

export default RoundedButton;

