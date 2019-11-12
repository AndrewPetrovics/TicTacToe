
import React, { Component } from 'react';
import { StyleSheet, Button, TouchableOpacity, Text, View } from 'react-native';


const ListTile = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.subtitle}>{props.subtitle}</Text>

        </View>
    );
        



}

const styles = StyleSheet.create({
    container: {
        padding: 15,
       
    },
    title: {
        color: 'white',
        fontSize: 22.0,

       
    },

    subtitle: {
        color: 'grey',
        fontSize: 16.0,
        
       
    },
    

});

export default ListTile;

