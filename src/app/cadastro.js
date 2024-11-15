import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useLoginStore } from '../stores/useLoginStore';
import Button from '../components/Button';
import { storeObjectData } from '../utils/asyncStorage';
import render from '../utils/render';

export default function Cadastro() {
    const [name, setName] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { login } = useLoginStore();
    const router = useRouter();

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            Alert.alert('Erro', 'As senhas não coincidem');
            return;
        }

        const userData = {
            nome: name,
            cnpj,
            email,
            senha: password,
        };

        try {
            const response = await fetch(`${render}companies`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                login({ accessToken: data.token, ...data.company });
                await storeObjectData('userLogged', { accessToken: data.token, ...data.company });
                router.replace('/login');
            } else {
                const data = await response.json();
                Alert.alert('Erro ao cadastrar', data.error || 'Erro desconhecido');
                console.log(data.error);
            }
        } catch (error) {
            Alert.alert('Erro ao cadastrar', 'Erro de rede ou servidor');
            console.error('Erro ao cadastrar:', error);
        }
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
                        value={name}
                        onChangeText={setName}
                        placeholderTextColor={'#fff'}
                    />
                </View>

                <View style={styles.formGroup}>
                    <TextInput
                        style={[styles.input, styles.nome]}
                        placeholder="CNPJ"
                        value={cnpj}
                        onChangeText={setCnpj}
                        placeholderTextColor={'#fff'}
                    />
                </View>
                <View style={styles.formGroup}>
                    <TextInput
                        style={[styles.input, styles.nome]}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        placeholderTextColor={'#fff'}
                    />
                </View>
                <View style={styles.formGroup}>
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        placeholderTextColor={'#fff'}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Confirmar Senha"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
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
        color: '#fff',
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