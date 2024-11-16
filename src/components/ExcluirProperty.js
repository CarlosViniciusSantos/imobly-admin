import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Alert } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useLoginStore } from '../stores/useLoginStore.js';
import { usePropertyStore } from '../stores/usePropertyStore.js';
import render from '../utils/render.js';

const ExcluirModal = ({ visible, onClose }) => {
    const [loading, setLoading] = useState(false);
    const {accessToken } = useLoginStore();
    const {id} = useLocalSearchParams();
    const router = useRouter();

    const handleDeleteAccount = async () => {
        setLoading(true);
        try {
            const deleteResponse = await fetch(`${render}properties/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${accessToken}`, 
                    'Content-Type': 'application/json',
                },
            });

            if (deleteResponse.ok) {
                console.log('Imóvel excluído com sucesso');
                Alert.alert('Sucesso', 'Imóvel excluído com sucesso');
                onClose();
                router.replace('/home');
            } else {
                console.log('Erro ao excluir imóvel');
                Alert.alert('Erro', 'Erro ao excluir imóvel');
            }
        } catch (error) {
            console.error('Erro ao excluir imóvel:', error);
            Alert.alert('Erro', 'Erro ao excluir imóvel');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal visible={visible} transparent={true} animationType="slide">
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <View style={styles.close}>
                        <AntDesign name="close" size={24} color="black" onPress={onClose} />
                    </View>
                    <View style={styles.textview}>
                        <Text style={styles.text2}>Deseja realmente excluir o imóvel?</Text>
                    </View>
                    <View style={styles.textpor}>
                        <Text style={styles.text3}>Depois que você apaga um imóvel, não há como voltar atrás. Por favor, tenha certeza.</Text>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.botao2} onPress={handleDeleteAccount} disabled={loading}>
                            <Text style={styles.text}>{loading ? 'Excluindo...' : 'Excluir'}</Text>
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
        width: '100%'
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
        color: 'white'
    },
    row: {
        flexDirection: 'row',
        gap: 15,
        marginBottom: 10,
    },
    textview: {},
    text2: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    text3: {
        fontSize: 17
    },
    textpor: {
        padding: 25,
        paddingBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default ExcluirModal;
