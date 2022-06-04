import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import PropTypes from 'prop-types';

class MyButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.onPress = this.onPress.bind(this)
    }
    onPress(data) {
        this.props.function(this.props.data)
    }

    render() {
        return (
            <TouchableOpacity
                onPress={this.onPress}
                style={[styles.container,
                { backgroundColor: this.props.bgcolor },
                { ...this.props.style }]
                }>
                <Text style={[
                    styles.text,
                    { color: this.props.color },
                    {
                        fontSize: parseInt(this.props.size),
                        fontWeight: 'bold'
                    }
                ]}>
                    {this.props.title}
                </Text>
            </TouchableOpacity >
        );
    }
}

MyButton.propTypes = {
    // login: PropTypes.string.isRequired,
    // pass: PropTypes.string.isRequired,
    bgcolor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,

};

const styles = StyleSheet.create({
    container: {
        borderColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    text: {
        color: 'black',
        fontSize: 10
    }
})
export default MyButton;
