import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Image } from 'react-native';
import MyButton from './MyButton';

class Zadanie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            isHidden: false,
            letter: this.props.route.params.letter,
            message: this.props.route.params.message,
            photo: this.props.route.params.photo
        }
    }
    confirm = async () => {
        if (this.state.password == this.state.message) {
            alert("Dobra robota!")
            this.setState({
                isHidden: true
            })
        } else {
            alert("Próbuj dalej")

        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{
                        width: '100%',
                        alignSelf: 'center',
                        flex: 1,
                    }}
                    source={this.state.photo}
                />
                <View style={styles.password}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="H A S Ł O"
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                    />
                    <View style={{
                        borderBottomColor: '#26A65B',
                        borderBottomWidth: 5,
                        marginBottom: 20

                    }}></View>
                    <MyButton
                        title="Dalej"
                        color="#fff"
                        size={'30'}
                        bgcolor="#26A65B"

                        function={() => this.confirm()}
                    />
                </View>
                <View style={styles.hidenLetterView}>
                    {
                        this.state.isHidden ?
                            <Text style={styles.hidenLetter}>{this.state.letter}</Text>
                            :
                            null
                    }
                </View>

            </View >
        );
    }
}
const styles = StyleSheet.create({

    container: {
        margin: 20,
        display: 'flex',
        flexDirection: 'column',
        flex: 1,

    },
    textInput: {
        fontSize: 40,
    },
    password: {
        flex: 1,
        marginTop: 20
    },
    hidenLetterView: {
        marginTop: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        flex: 1.5,
        justifyContent: 'center'


    },
    hidenLetter: {
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 70,
        marginTop: 0,
        textAlignVertical: "center",
        justifyContent: 'center'
    }
})

export default Zadanie;
