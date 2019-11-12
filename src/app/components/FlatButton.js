
import React, { Component } from 'react';
import { StyleSheet, Platform, Button, TouchableOpacity, Text } from 'react-native';


const FlatButton = (props) => {
    if (Platform.OS === 'ios') {
        return (
            <Button color={"#64ffda"} title={props.title} onPress={props.onPress} />
        );

    }
    else {
        return (
            <TouchableOpacity onPress={props.onPress}>
                <Text style={styles.text}>{props.title}</Text>
            </TouchableOpacity>
        )
    }
    return



}

const styles = StyleSheet.create({
    text: {
        color: "#64ffda",
        alignSelf: 'center',
        fontSize: 16.0,

    },


});

export default FlatButton;

