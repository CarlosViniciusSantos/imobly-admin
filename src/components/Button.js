import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export default function Button({ onPress, children }) {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.button,
                { backgroundColor: pressed ? '#05547F' : '#1E3A8A' }
            ]}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '50%',
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: 'center',
        marginTop: 40,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});