import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';

export default function Home() {

    return (
        <ScrollView style={styles.container}>
            <Text>Home</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});