import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Image } from 'react-native';
import MyButton from './MyButton';

class Zadanie extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Czuwaj
                </Text>
                <Text style={styles.info}>
                    Aplikacja stworzona na potrzeby zbiórki harcerskiej 3 próbnej Podgórskiej Drużyny Harcerzy 'Tarcza'
                </Text>
            </View >
        );
    }
}
const styles = StyleSheet.create({

    container: {
        margin: 20,
        flex: 1,
        display: "flex",
        alignItems: 'center'
    },

    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 50,
        marginTop: 0,
        textAlignVertical: "center",
        justifyContent: 'center'
    },
    info: {
        paddingTop: 100,
        textAlign: 'center',
        fontStyle: 'italic',
        fontSize: 20,
        marginTop: 0,
        textAlignVertical: "center",
        justifyContent: 'center'
    }
})

export default Zadanie;
