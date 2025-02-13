import { useEffect, useState } from 'react';
import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import Header from '../../components/Header';
import CardProperty from '../../components/CardProperty';
import { useLoginStore } from '../../stores/useLoginStore';
import { usePropertyStore } from '../../stores/usePropertyStore';
import { fetchAuth } from '../../utils/fetchAuth';

export default function Home() {
    const router = useRouter();
    const { id } = useLoginStore();
    const { properties, setProperties } = usePropertyStore();
    const [loading, setLoading] = useState(true);

    const handleAddImovel = () => {
        router.push('/cadastrarProperty');
    };

    const getProperties = async () => {
        try {
            const response = await fetchAuth(`${render}properties/list`);
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setProperties(data);
            } else {
                console.log('Erro ao carregar imóveis');
            }
        } catch (error) {
            console.error('Erro ao carregar imóveis:', error);
        } finally {
            setLoading(false);
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            getProperties();
        }, [])
    );

    const filteredProperties = properties.error !== "No properties found"? properties.filter(property => property.id_empresa === id): [];

    return (
        <ScrollView style={styles.container}>
            <Header />
            <View style={styles.content}>
                <Text style={styles.title}>Meus Imóveis</Text>
                {loading ? (
                    <Text>Loading...</Text>
                ) : (
                    filteredProperties.map((property) => (
                        <CardProperty
                            key={property.id}
                            id={property.id}
                            descricao={property.descricao}
                            foto={property.foto}
                            nome={property.nome}
                        />
                    ))
                )}
                <TouchableOpacity style={styles.addButton} onPress={handleAddImovel}>
                    <Text style={styles.addButtonText}>Adicionar Novo Imóvel</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    imovel: {
        padding: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        marginBottom: 10,
    },
    addButton: {
        backgroundColor: '#1E3A8A',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 20,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});