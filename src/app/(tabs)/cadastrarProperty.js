import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Alert, ActivityIndicator } from 'react-native';
import NavbarPadrao from '../../components/NavbarPadrao';
import ButtonDetails from '../../components/ButtonDetails';
import { useRouter } from 'expo-router';
import { useLoginStore } from '../../stores/useLoginStore';
import render from '../../utils/render';

export default function CadastrarImovel() {
    const { id, accessToken } = useLoginStore();
    const router = useRouter();

    const [nome, setNome] = useState('');
    const [cep, setCep] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [fotoImovel, setFotoImovel] = useState('');
    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');
    const [tipo, setTipo] = useState('');
    const [loading, setLoading] = useState(false);

    const handleRegister = async () => {
        const propertyData = {
            nome,
            cep,
            cidade,
            estado,
            foto: fotoImovel,
            valor: parseInt(valor),
            descricao,
            tipo,
            id_empresa: parseInt(id),
        };

        setLoading(true);

        try {
            const response = await fetch(`${render}properties`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
                body: JSON.stringify(propertyData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                Alert.alert('Sucesso', 'Imóvel cadastrado com sucesso');
                router.replace('/home');
                setCep('');
                setCidade('');
                setEstado('');
                setFotoImovel('');
                setNome('');
                setValor('');
                setDescricao('');
                setTipo('');
            } else {
                const data = await response.json();
                Alert.alert('Erro ao cadastrar', data.error || 'Erro desconhecido');
                console.log(data.error);
            }
        } catch (error) {
            Alert.alert('Erro ao cadastrar', 'Erro de rede ou servidor');
            console.error('Erro ao cadastrar:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <NavbarPadrao texto="Cadastrar Imóvel" />
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
                        placeholder="URL da Foto"
                        value={fotoImovel}
                        onChangeText={setFotoImovel}
                        keyboardType='url'
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
                        <ButtonDetails onPress={handleRegister} disabled={loading}>
                            {loading ? <ActivityIndicator color="#fff" /> : <Text>Cadastrar</Text>}
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
