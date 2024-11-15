import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Button from '../components/ButtonDetails.js';
import NavbarPadrao from '../components/NavbarPadrao.js';
import { useRouter } from 'expo-router';
import { useLoginStore } from '../stores/useLoginStore';
import { storeObjectData } from '../utils/asyncStorage';
import render from '../utils/render.js';

export default function AtualizarDadosUser() {
    const { id, nome, cnpj, foto_perfil, email, accessToken, updateCompany } = useLoginStore();
    const router = useRouter();
    const [name, setName] = useState(nome || '');
    const [cnpjState, setCnpj] = useState(cnpj || '');
    const [emailState, setEmail] = useState(email || '');
    const [companyId, setCompanyId] = useState(id || '');
    const [token, setToken] = useState(accessToken || '');

    useEffect(() => {
        setName(nome);
        setCnpj(cnpj);
        setEmail(email);
        setCompanyId(id);
        setToken(accessToken);
    }, [nome, cnpj, email, id, accessToken]);

    const handleUpdate = async () => {
        const companyData = {
            nome: name,
            cnpj: cnpjState,
            email: emailState,
        };
        try {
            const response = await fetch(`${render}companies/${companyId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(companyData),
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                updateCompany(data);
                await storeObjectData('userLogged', { ...data, accessToken: token });
                Alert.alert('Sucesso', 'Dados atualizados com sucesso');
                router.replace('/home');
            } else {
                const data = await response.json();
                Alert.alert('Erro ao atualizar', data.error || 'Erro desconhecido');
                console.log(data.error);
            }
        } catch (error) {
            Alert.alert('Erro ao atualizar', 'Erro de rede ou servidor');
            console.error('Erro ao atualizar:', error);
        }
    };

    return (
        <View style={styles.container}>
            <NavbarPadrao texto="Editar dados" />
            <ScrollView style={styles.container2}>
                <View style={styles.image}>
                    <TouchableOpacity>
                        <Image
                            source={foto_perfil ? { uri: foto_perfil } : require('../../assets/images/nophoto.jpg')}
                            style={styles.perfilImage}
                        />
                        <Text>
                            <Feather name="edit-2" size={23} color="black" />
                            Editar
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.headerContainer}></View>
                <View style={styles.formContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        value={name}
                        onChangeText={setName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="CNPJ"
                        value={cnpjState}
                        onChangeText={setCnpj}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={emailState}
                        onChangeText={setEmail}
                    />
                </View>
            </ScrollView>
            <Button onPress={handleUpdate}>Confirmar</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        position: 'relative'
    },
    container2: {
        flex: 1,
        padding: 20,
        marginTop: 30,
        position: 'relative'
    },
    headerContainer: {
        marginBottom: 30,
    },
    formContainer: {
        flex: 1,
        justifyContent: 'space-between'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        height: 40,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    cidadeEstado: {
        width: '48%',
    },
    perfilImage: {
        width: 80,
        height: 80,
        borderRadius: 40
    },
    image: {
        alignItems: 'center'
    }
});
