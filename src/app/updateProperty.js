import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import NavbarPadrao from '../components/NavbarPadrao';
import ButtonDetails from '../components/ButtonDetails';
import { useLoginStore } from '../stores/useLoginStore';
import { usePropertyStore } from '../stores/usePropertyStore';
import render from '../utils/render';

export default function AtualizarImovel() {
    const { id: userId, accessToken } = useLoginStore();
    const { properties, updateProperty } = usePropertyStore();
    const router = useRouter();
    const { id } = useLocalSearchParams();

    const property = properties.find((item) => item.id === +id);

    const [cep, setCep] = useState(property?.cep || '');
    const [cidade, setCidade] = useState(property?.cidade || '');
    const [estado, setEstado] = useState(property?.estado || '');
    const [fotoImovel, setFotoImovel] = useState(property?.foto_imovel || '');
    const [nome, setNome] = useState(property?.nome || '');
    const [valor, setValor] = useState(property?.valor.toString() || '');
    const [descricao, setDescricao] = useState(property?.descricao || '');
    const [tipo, setTipo] = useState(property?.tipo || '');
    const [loading, setLoading] = useState(false);

    const handleUpdateProperty = async () => {
        const propertyData = {
            nome,
            cep,
            cidade,
            estado,
            foto_imovel: fotoImovel,
            valor: parseInt(valor),
            descricao,
            tipo,
            id_empresa: parseInt(userId),
        };

        setLoading(true);

        try {
            const response = await fetch(`${render}properties/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
                body: JSON.stringify(propertyData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Response data:', data);
                updateProperty(data);
                Alert.alert('Sucesso', 'Imóvel atualizado com sucesso');
                router.replace('/home');
            } else {
                const data = await response.json();
                Alert.alert('Erro ao atualizar', data.error || 'Erro desconhecido');
                console.log(data.error);
            }
        } catch (error) {
            Alert.alert('Erro ao atualizar', 'Erro de rede ou servidor');
            console.error('Erro ao atualizar:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <NavbarPadrao texto="Atualizar Imóvel" />
            <View style={styles.container2}>
                <ScrollView style={styles.formContainer}>
                    <Text style={styles.sectionTitle}>Onde se Localiza o Imóvel?</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="CEP"
                        value={cep}
                        onChangeText={setCep}
                    />
                    <View style={styles.row}>
                        <TextInput
                            style={[styles.input, styles.smallInput]}
                            placeholder="Cidade"
                            value={cidade}
                            onChangeText={setCidade}
                        />
                        <TextInput
                            style={[styles.input, styles.smallInput]}
                            placeholder="Estado"
                            value={estado}
                            onChangeText={setEstado}
                        />
                    </View>
                    <Text style={styles.sectionTitle}>Fotos do Imovel</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Url da Foto"
                        value={fotoImovel}
                        onChangeText={setFotoImovel}
                    />
                    <Text style={styles.sectionTitle}>Digite Informações do Imóvel</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        value={nome}
                        onChangeText={setNome}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Valor"
                        value={valor}
                        onChangeText={setValor}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Tipo de imóvel"
                        value={tipo}
                        onChangeText={setTipo}
                    />
                    <TextInput
                        style={[styles.input, styles.description]}
                        placeholder="Descrição do Imóvel"
                        value={descricao}
                        onChangeText={setDescricao}
                        multiline
                    />
                    <View style={styles.buttonContainer}>
                        <ButtonDetails onPress={handleUpdateProperty} disabled={loading}>
                            {loading ? <ActivityIndicator color="#fff" /> : 'Atualizar'}
                        </ButtonDetails>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container2: {
        flex: 1,
        padding: 20,
    },
    formContainer: {
        flex: 1,
    },
    input: {
        height: 40,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    smallInput: {
        width: '48%',
    },
    largeInput: {
        width: '48%',
    },
    description: {
        height: 80,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1E3A8A',
        marginTop: 20,
        marginBottom: 10,
    },
    row2: {
        flexDirection: 'row',
        gap: 10
    },
    buttonContainer: {
        marginTop: 110,
    }
});
