import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import CustomButton from '../../components/CustomButton';

const Login = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handlePress = () => {
        navigation.navigate('TabRoute');
        //setIsLoading(true);
        setError('');

        // Validate inputs
        if (!email.trim()) {
            // setError('Email cannot be blank');
            Alert.alert('Error', 'Email cannot be blank');
            return;
        }

        if (!password.trim()) {
            Alert.alert('Error', 'Password cannot be blank');
            return;
        }

        // If validation passes
        Alert.alert('Success', 'You are logged in!');
        console.log('Email:', email,password);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput style={styles.input} placeholder="Password"
                value={password}
                secureTextEntry
                onChangeText={setPassword} />

            <CustomButton
                title="Login"
                onPress={handlePress}
                isLoading={isLoading}
                disabled={false}
                style={{ backgroundColor: '#FF5722' }}
                textStyle={{ fontSize: 18 }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    error: {
        color: 'red',
        marginBottom: 10,
        textAlign: 'center',
    },
});

export default Login;
