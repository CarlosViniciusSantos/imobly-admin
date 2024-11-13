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
                    />
                </View>

                <View style={styles.formGroup}>
                    <TextInput
                        style={styles.input}
                        placeholder="CPF"
                        value=''
                        onChangeText=''
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Data de Nascimento"
                        value=''
                        onChangeText=''
                    />
                </View>
                <View style={styles.formGroup}>
                    <TextInput
                        style={[styles.input, styles.nome]}
                        placeholder="Email"
                        value=''
                        onChangeText=''
                    />
                </View>
                <View style={styles.formGroup}>
                    <TextInput
                        style={styles.input}
                        placeholder="Cidade"
                        value=''
                        onChangeText=''
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Estado"
                        value=''
                        onChangeText=''
                    />
                </View>
                <View style={styles.formGroup}>
                    <TextInput
                        style={[styles.input, styles.nome]}
                        placeholder="Telefone"
                        value=''
                        onChangeText=''
                    />
                </View>
                <View style={styles.formGroup}>
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        value=''
                        onChangeText=''
                        secureTextEntry
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Confirmar Senha"
                        value=''
                        onChangeText=''
                        secureTextEntry
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
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    loginBox: {
        width: '100%',
        paddingVertical: 50,
        paddingHorizontal: 30,
        backgroundColor: '#f2f2f2',
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
        borderBottomColor: '#000',
        marginBottom: 20,
        fontSize: 16,
    },
    signupText: {
        marginTop: 10,
        fontSize: 14,
        color: '#000',
        marginBottom: 40,
    },
    signupLink: {
        fontWeight: 'bold',
        color: '#000',
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