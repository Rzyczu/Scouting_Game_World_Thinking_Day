import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MyButton from './MyButton';

class Szyfry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            czekoladka: false,
            photo: null,
            paragraph1: 'KLUCZ: GA-DE-RY-PO-LU-KI\n\n',
            paragraph2: 'Hasło: Harcerz',
            paragraph3: 'Zaszyfrowane: Hgycdyz\n\n',
            paragraph4: 'Inne klucze: \nPO-LI-TY-KA-NE-RU\nKA-CE-MI-NU-TO-WY\nKO-NI-EC-MA-TU-RY\nNO-WE-BU-TY-LI-SA',
            header: "Szyfr Gaderypoluki"
        }
    }
    gaderypoluki = () => {
        this.setState({
            photo: null,
            paragraph1: 'KLUCZ: GA-DE-RY-PO-LU-KI\n\n',
            paragraph2: 'Hasło: Harcerz',
            paragraph3: 'Zaszyfrowane: Hgycdyz\n\n',
            paragraph4: 'Inne klucze: \nNO-WE-BU-TY-LI-SA\nPO-LI-TY-KA-NE-RU\nKA-CE-MI-NU-TO-WY\nKO-NI-EC-MA-TU-RY',
            header: "Szyfr Gaderypoluki",
            czekoladka: false,
        })
    }
    czekoladka = () => {
        this.setState({
            photo: require('../assets/czekoladka.png'),
            paragraph1: '',
            paragraph2: '',
            paragraph3: '',
            paragraph4: '',
            header: "Szyfr Czekoladka",
            czekoladka: true,
        })
    }
    morse = () => {
        this.setState({
            photo: require('../assets/morse.jpg'),
            paragraph1: '',
            paragraph2: '',
            paragraph3: '',
            paragraph4: '',
            header: "Alfabet Morse'a",
            czekoladka: false,
        })
    }
    ulamkowy = () => {
        this.setState({
            photo: require('../assets/ulamkowy.jpg'),
            paragraph1: '',
            paragraph2: '',
            paragraph3: '',
            paragraph4: '',
            header: " Szyfr Ułamkowy",
            czekoladka: false,
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.menu}>
                    <TouchableOpacity
                        style={styles.person}
                        onPress={() => this.gaderypoluki()}
                    >
                        <Text>Gaderypoluki</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.person}
                        onPress={() => this.czekoladka()}
                    >
                        <Text>Czekoladka</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.person}
                        onPress={() => this.morse()}
                    >
                        <Text>A. Morse'a</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.person}
                        onPress={() => this.ulamkowy()}
                    >
                        <Text>Ułamkowy</Text>
                    </TouchableOpacity>
                </View>
                <SafeAreaView style={styles.page}>
                    <ScrollView>
                        {
                            this.state.photo == null ?
                                null
                                :
                                <Image
                                    style={{
                                        width: '100%', resizeMode: 'contain',
                                        alignSelf: 'center',
                                    }}
                                    source={this.state.photo}
                                />
                        }

                        <Text style={styles.header}>{this.state.header}</Text>
                        {
                            this.state.paragraph1 == '' ?
                                null
                                :
                                <View>
                                    <Text style={styles.text}>{this.state.paragraph1}</Text>
                                    <Text style={styles.text}>{this.state.paragraph2}</Text>
                                    <Text style={styles.text}>{this.state.paragraph3}</Text>
                                    <Text style={styles.text}>{this.state.paragraph4}</Text>
                                </View>
                        }
                        {
                            this.state.czekoladka == false ?
                                null
                                :
                                <View>
                                    <Image
                                        style={{
                                            width: '100%', resizeMode: 'contain',
                                            alignSelf: 'center',
                                        }}
                                        source={require('../assets/czekoladka2.jpg')}
                                    />
                                    <Text style={styles.text}>Alternatywa wesja (stosowana poza granicami Polski, nazywa się Pigpen Cipher</Text>
                                </View>
                        }
                    </ScrollView>
                </SafeAreaView >
            </View >
        );
    }
}
const styles = StyleSheet.create({

    container: {
        margin: 20,
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    },
    menu: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row'
    },
    person: {
        flex: 1,
        flexDirection: 'column',
        marginRight: 20
    },
    page: {
        flex: 10,
    },
    text: {
        fontSize: 20,
        paddingTop: 15
    },
    header: {
        fontSize: 30,
        paddingTop: 15,
        paddingBottom: 30
    },
    credits: {
        fontSize: 15,
        color: 'gray',
        paddingTop: 15
    }
})

export default Szyfry;
