import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Alert } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import render from '../utils/render';
import { useLoginStore } from '../stores/useLoginStore';
import { useRouter } from 'expo-router';

const SairModal = ({ visible, onClose }) => {
    const [loading, setLoading] = useState(false);
    const { accessToken, logout } = useLoginStore();
    const router = useRouter();

    const handleLogout = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${render}auth/logout`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: accessToken }),
            });

            if (response.ok) {
                await AsyncStorage.clear();
                logout();
                Alert.alert('Sucesso', 'Você saiu da conta.');
                onClose();
                router.replace('/login');
            } else {
                const data = await response.json();
                Alert.alert('Erro', data.message || 'Erro desconhecido');
            }
        } catch (error) {
            console.error('Erro ao sair da conta:', error);
            Alert.alert('Erro', 'Ocorreu um erro ao tentar sair da conta.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal
            transparent={true}
            animationType="slide"
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <View style={styles.close}>
                        <AntDesign name="close" size={24} color="black" onPress={onClose} />
                    </View>
                    <View style={styles.textview}>
                        <Text style={styles.text2}>Deseja realmente sair da conta?</Text>
                    </View>
                    <View style={styles.textpor}>
                        <Text style={styles.text3}>Depois que você sair da conta, será necessário fazer login novamente para acessar o aplicativo.</Text>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.botao2} onPress={handleLogout} disabled={loading}>
                            <Text style={styles.text}>{loading ? 'Saindo...' : 'Sair'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botao} onPress={onClose}>
                            <Text style={styles.text}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '95%',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    close: {
        width: '100%',
    },
    botao: {
        width: '40%',
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#1E3A8A',
        alignItems: 'center',
        elevation: 3,
    },
    botao2: {
        width: '40%',
        padding: 15,
        borderRadius: 5,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        elevation: 3,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    row: {
        flexDirection: 'row',
        gap: 15,
        marginBottom: 10,
    },
    textview: {},
    text2: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    text3: {
        fontSize: 17,
    },
    textpor: {
        padding: 25,
        paddingBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SairModal;
