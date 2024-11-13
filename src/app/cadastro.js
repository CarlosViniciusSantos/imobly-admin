import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import Button from '../components/Button';

export default function Cadastro() {
    const router = useRouter();

    const handleRegister = () => {
        router.replace('/home');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>

            <View style={styles.loginBox}>
                <View style={styles.loginTitleContainer}>
                    <Text style={styles.loginTitle}>Cadastre-se</Text>
                </View>

                <View style={styles.formGroup}>
                    <TextInput
                        style={[styles.input, styles.nome]}
                        placeholder="Nome"
                        value=''
                        onChangeText=''
                    placeholderTextColor={'#fff'}
                    />
                </View>

                <View style={styles.formGroup}>
                    <TextInput
                        style={[styles.input, styles.nome]}
                        placeholder="CNPJ"
                        value=''
                        onChangeText=''
                    placeholderTextColor={'#fff'}
                    />
                </View>
                <View style={styles.formGroup}>
                    <TextInput
                        style={[styles.input, styles.nome]}
                        placeholder="Email"
                        value=''
                        onChangeText=''
                    placeholderTextColor={'#fff'}
                    />
                </View>
                <View style={styles.formGroup}>
                    <TextInput
                        style={styles.input}
                        placeholder="Cidade"
                        value=''
                        onChangeText=''
                    placeholderTextColor={'#fff'}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Estado"
                        value=''
                        onChangeText=''
                    placeholderTextColor={'#fff'}
                    />
                </View>
                <View style={styles.formGroup}>
                    <TextInput
                        style={[styles.input, styles.nome]}
                        placeholder="Telefone"
                        value=''
                        onChangeText=''
                    placeholderTextColor={'#fff'}
                    />
                </View>
                <View style={styles.formGroup}>
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        value=''
                        onChangeText=''
                        secureTextEntry
                        placeholderTextColor={'#fff'}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Confirmar Senha"
                        value=''
                        onChangeText=''
                        secureTextEntry
                        placeholderTextColor={'#fff'}
                    />
                </View>
            </View>

            <Button onPress={handleRegister}>Cadastrar</Button>

            <Text style={styles.signupText}>
                Já tem uma conta?{' '}
                <Text
                    style={styles.signupLink}
                    onPress={() => router.push('/login')}
                >
                    Entre aqui
                </Text>
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#00557A',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    loginBox: {
        width: '100%',
        paddingVertical: 50,
        paddingHorizontal: 30,
        backgroundColor: '#00557A',
        borderRadius: 10,
        alignItems: 'center',
        position: 'relative',
        marginTop: 100
    },
    loginTitleContainer: {
        position: 'absolute', 
        top: -30, 
        backgroundColor: '#00557A',
        paddingVertical: 20,
        paddingHorizontal: 40,
        borderRadius: 10,
    },
    loginTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    input: {
        width: '48%',
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        marginBottom: 20,
        fontSize: 16,
    },
    signupText: {
        marginTop: 10,
        fontSize: 14,
        color: '#fff',
        marginBottom: 40,
    },
    signupLink: {
        fontWeight: 'bold',
        color: '#fff',
    },
    formGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        gap: 10
    },
    nome: {
        width: '100%'
    },
});