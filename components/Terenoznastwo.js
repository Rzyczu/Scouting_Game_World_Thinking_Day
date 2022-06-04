import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView } from 'react-native';
import MyButton from './MyButton';

class Terenoznastwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { title: "Idź prosto", photo: require('../assets/znaki/1.png') },
                { title: "Idź szybko prosto", photo: require('../assets/znaki/2.png') },
                { title: "Biegnij prosto", photo: require('../assets/znaki/3.png') },
                { title: "Wracaj", photo: require('../assets/znaki/4.png') },
                { title: "Wracaj szybko", photo: require('../assets/znaki/5.png') },
                { title: "Wracaj biegiem", photo: require('../assets/znaki/6.png') },
                { title: "Rozdzieliliśmy się", photo: require('../assets/znaki/7.png') },
                { title: "Poszukaj innej drogi", photo: require('../assets/znaki/8.png') },
                { title: "Iść ostrożnie", photo: require('../assets/znaki/9.png') },
                { title: "Nie iść tędy", photo: require('../assets/znaki/10.png') },
                { title: "Zła droga, poszukaj innej", photo: require('../assets/znaki/11.png') },
                { title: "List 9 kroków", photo: require('../assets/znaki/12.png') },
                { title: "Woda zdatna do picia", photo: require('../assets/znaki/13.png') },
                { title: "Woda niezdatna do picia", photo: require('../assets/znaki/14.png') },
                { title: "Poszedłem do domu", photo: require('../assets/znaki/15.png') },
                { title: "Zastrzymaj się tutaj", photo: require('../assets/znaki/16.png') },


            ]
        }
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={styles.row}>
                        {
                            this.state.data.map((item, i) => (
                                <View style={styles.element}>

                                    <Image
                                        style={{
                                            width: '100%', resizeMode: 'contain',
                                            alignSelf: 'center',
                                        }}
                                        source={item.photo}
                                    />
                                    <Text style={styles.text}>{item.title}</Text>
                                </View>
                            ))
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({

    container: {
        margin: 20,
        display: 'flex',
        flex: 1,

    },
    row: {
        display: "flex",
        flexWrap: 'wrap',
        flexDirection: 'row',

    },
    element: {
        // borderColor: 'red',
        // borderWidth: 2,
        display: 'flex',
        width: 150,
        height: 150,
        borderStyle: "solid",
        margin: 10,
        alignItems: 'center'
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold'
    }

})

export default Terenoznastwo;
