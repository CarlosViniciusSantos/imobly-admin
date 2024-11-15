import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import ExcluirModal from '../../components/ModalExcluir';
import SairModal from '../../components/ModalSair';
import { useLoginStore } from '../../stores/useLoginStore';

export default function SideBarProfile() {
    const { nome, email, foto_perfil } = useLoginStore();
    const router = useRouter();

    const handleProfile = () => {
        router.push('/profile');
    };

    const [modalVisibleExcluir, setModalVisibleExcluir] = useState(false);
    const openModalExcluir = () => {
        setModalVisibleExcluir(true);
    };
    const closeModalExcluir = () => {
        setModalVisibleExcluir(false);
    };

    const [modalVisibleSair, setModalVisibleSair] = useState(false);
    const openModalSair = () => {
        setModalVisibleSair(true);
    };
    const closeModalSair = () => {
        setModalVisibleSair(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.perfilContainer}>
                <Image
                    source={foto_perfil ? { uri: foto_perfil } : require('../../../assets/images/nophoto.jpg')}
                    style={styles.perfilImage}
                />
                <View style={styles.usuario}>
                    <Text style={styles.ola}>Olá!</Text>
                    <Text style={styles.username}>{nome || 'Empresa'}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.textContainer} onPress={handleProfile}>
                <Text style={styles.Text}>Atualizar Dados da Conta</Text>
            </TouchableOpacity>
            <View style={styles.excluir}>
                <TouchableOpacity style={styles.textContainer} onPress={openModalExcluir}>
                    <Text style={styles.Textex}>Excluir conta</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.sair}>
                <TouchableOpacity style={styles.textContainer} onPress={openModalSair}>
                    <Text style={styles.Textex}>Sair</Text>
                </TouchableOpacity>
            </View>
            <ExcluirModal visible={modalVisibleExcluir} onClose={closeModalExcluir} />
            <SairModal visible={modalVisibleSair} onClose={closeModalSair} />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    perfilContainer: {
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 20
    },
    perfilImage: {
        width: 80,
        height: 80,
        borderRadius: 40
    },
    ola: {
        fontSize: 18,
        marginTop: 10,
    },
    username: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10
    },
    textContainer: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#dcdcdc',
        backgroundColor: '#ffffff',
    },
    Text: {
        fontSize: 16,
    },
    usuario: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
    },
    excluir: {
        justifyContent: 'flex-end',
        flex: 1
    },
    Textex: {
        color: '#1E3A8A',
        fontSize: 16,
        fontWeight: 'bold'
    },
    sair: {
        justifyContent: 'flex-end',
        paddingBottom: 50
    },
});
