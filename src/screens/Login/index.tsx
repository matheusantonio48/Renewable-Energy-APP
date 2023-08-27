import React, { useState } from 'react';
import * as Styled from './styles';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../redux/actions';
import { PasswordInputComponent } from '../../components/PasswordComponent';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

type Props = {
    navigation: NavigationProp<ParamListBase>;
  }

  const Login: React.FC<Props> = ({ navigation }) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        dispatch(loginAction(email, password));
    };

    return (
        <Styled.Container>
            <Styled.Title>Login</Styled.Title>

            <Styled.InputLabel>E-mail</Styled.InputLabel>
            <Styled.TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                keyboardType="email-address"
            />

            <Styled.InputLabel>Password</Styled.InputLabel>
            <PasswordInputComponent
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                toggleVisibility={() => setShowPassword(!showPassword)}
            />

            <Styled.Button onPress={handleLogin}>
                <Styled.ButtonText>Login</Styled.ButtonText>
            </Styled.Button>

            <Styled.SignUpWrapper>
                <Styled.SignUpText>Don’t have an account?</Styled.SignUpText>
                <Styled.SignUpTouchable onPress={() => navigation.navigate('SignUp')}>
                    <Styled.SignUpText style={{ textDecorationLine: 'underline' }}> Sign up</Styled.SignUpText>
                </Styled.SignUpTouchable>
                <Styled.SignUpText> here.</Styled.SignUpText>
            </Styled.SignUpWrapper>
        </Styled.Container>
    );
};

export default Login;