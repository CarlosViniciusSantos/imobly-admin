import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { TextInputMask } from 'react-native-masked-text';
import Button from '../../components/ButtonDetails';
import NavbarPadrao from '../../components/NavbarPadrao.js'

export default function AtualizarDadosUser() {

    return (
        <View style={styles.container}>
            <NavbarPadrao texto="Editar dados" />
            <ScrollView style={styles.container2}>
                <View style={styles.image}>
                    <TouchableOpacity >
                        <Image
                            source={require('../../../assets/images/nophoto.jpg')}
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
                        value=''
                        onChangeText=''
                    />
                    <TextInputMask
                        type={'cnpj'}
                        style={styles.input}
                        placeholder="CNPJ"
                        value=''
                        onChangeText=''
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value=''
                        onChangeText=''
                    />

                    <View style={styles.row}>
                        <TextInput
                            style={[styles.input, styles.cidadeEstado]}
                            placeholder="Cidade"
                            value=''
                            onChangeText=''
                        />
                        <TextInput
                            style={[styles.input, styles.cidadeEstado]}
                            placeholder="Estado"
                            value=''
                            onChangeText=''
                        />
                    </View>

                    <TextInputMask
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                        }}
                        style={styles.input}
                        placeholder="Telefone"
                        value=''
                        onChangeText=''
                        keyboardType='numeric'
                    />

                </View>
            </ScrollView>
            <Button>Confirmar</Button>
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
