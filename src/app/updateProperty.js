import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import NavbarPadrao from '../components/NavbarPadrao';
import Feather from '@expo/vector-icons/Feather';
import ButtonDetails from '../components/ButtonDetails';

export default function CadastrarImovel() {

    return (
        <View style={styles.container}>
            <NavbarPadrao texto="Atualizar Imóvel" />
            <View style={styles.container2}>
                <ScrollView style={styles.formContainer}>
                    <Text style={styles.sectionTitle}>Onde se Localiza o Imóvel?</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="CEP"
                        value=''
                        onChangeText=''
                    />

                    <View style={styles.row}>
                        <TextInput
                            style={[styles.input, styles.smallInput]}
                            placeholder="Cidade"
                            value=''
                            onChangeText=''
                        />
                        <TextInput
                            style={[styles.input, styles.smallInput]}
                            placeholder="Estado"
                            value=''
                            onChangeText=''
                        />
                    </View>

                    <View style={styles.row}>
                        <TextInput
                            style={[styles.input, styles.largeInput]}
                            placeholder="Logradouro"
                            value=''
                            onChangeText=''
                        />
                        <TextInput
                            style={[styles.input, styles.smallInput]}
                            placeholder="Número"
                            value=''
                            onChangeText=''
                        />
                    </View>

                    <TextInput
                        style={styles.input}
                        placeholder="Complemento"
                        value=''
                        onChangeText=''
                    />

                    <Text style={styles.sectionTitle}>Fotos do Imovel</Text>

                    <View style={styles.row2}>
                        <Feather name="image" size={40} color="black" />
                        <Feather name="image" size={40} color="black" />
                        <Feather name="image" size={40} color="black" />
                        <Feather name="image" size={40} color="black" />
                        <Feather name="image" size={40} color="black" />
                        <Feather name="image" size={40} color="black" />
                        <Feather name="image" size={40} color="black" />
                    </View>

                    <Text style={styles.sectionTitle}>Digite Informações do Imóvel</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Tipo de imóvel"
                        value=''
                        onChangeText=''
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Transação"
                        value=''
                        onChangeText=''
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Valor"
                        value=''
                        onChangeText=''
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Metragem"
                        value=''
                        onChangeText=''
                        keyboardType="numeric"
                    />

                    <View style={styles.row}>
                        <TextInput
                            style={[styles.input, styles.smallInput]}
                            placeholder="Cômodos"
                            value=''
                            onChangeText=''
                        />
                        <TextInput
                            style={[styles.input, styles.smallInput]}
                            placeholder="Vagas de Garagem"
                            value=''
                            onChangeText=''
                        />
                    </View>

                    <TextInput
                        style={[styles.input, styles.description]}
                        placeholder="Descrição do Imóvel"
                        value=''
                        onChangeText=''
                        multiline
                    />

                    <View style={styles.buttonContainer}>
                        <ButtonDetails>Atualizar</ButtonDetails>
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
