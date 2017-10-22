import React from 'react';
import {SyleSheet, text, View } from 'react-native';

export default class App extends React.Componet {
    render(){
        return (
            <View style={styles.container}>
                <Text>Hello World</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const test = 'hi';
