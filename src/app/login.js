import { View, StyleSheet, Text, TextInput, Image } from 'react-native';
import { useRouter } from 'expo-router';
import Button from '../components/Button';

export default function Login() {
    const router = useRouter();

    const handleLogin = () => {
        router.replace('/home');
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../../assets/images/imobly-azul.png')} style={styles.logo} />
                <Text style={styles.title}>Imobly</Text>
            </View>

            <View style={styles.loginBox}>
                <View style={styles.loginTitleContainer}>
                    <Text style={styles.loginTitle}>Login</Text>
                </View>

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value=''
                    onChangeText=''
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    value=''
                    onChangeText=''
                    secureTextEntry
                />
            </View>

            <Button onPress={handleLogin}>Entrar</Button>

            <Text style={styles.signupText}>
                Não tem conta?{' '}
                <Text
                    style={styles.signupLink}
                    onPress={() => router.push('/cadastro')}
                >
                    Crie uma
                </Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 80,
        display: 'flex',
        flexDirection: 'row'
    },
    logo: {
        width: 60,
        height: 60,
        margin: 3
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1E3A8A',
    },
    loginBox: {
        width: '100%',
        paddingVertical: 60,
        paddingHorizontal: 30,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        position: 'relative',
        marginTop: 90,
        marginBottom: 70
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
        width: '100%',
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        marginBottom: 20,
        fontSize: 16,
    },
    signupText: {
        marginTop: 10,
        fontSize: 14,
        color: '#000',
    },
    signupLink: {
        fontWeight: 'bold',
        color: '#000',
    },
});

