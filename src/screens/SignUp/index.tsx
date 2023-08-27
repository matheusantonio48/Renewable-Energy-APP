import React, { useState } from 'react';
import * as Styled from './styles';
import { useDispatch } from 'react-redux';
import { signUpAction } from '../../redux/actions';
import { PasswordInputComponent } from '../../components/PasswordComponent';
import CheckBox from '@react-native-community/checkbox';

const SignUp = () => {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [agreed, setAgreed] = useState(false);

    const handleSignUp = () => {
        if (agreed) {
            dispatch(signUpAction(firstName, lastName, email, password));
        } else {
            // alert('Please agree to the terms and conditions.');
        }
    };

    return (
        <Styled.Container>
            <Styled.Title>Sign Up</Styled.Title>

            <Styled.InputLabel>First Name</Styled.InputLabel>
            <Styled.TextInput value={firstName} onChangeText={setFirstName} placeholder="Enter your first name" />

            <Styled.InputLabel>Last Name</Styled.InputLabel>
            <Styled.TextInput value={lastName} onChangeText={setLastName} placeholder="Enter your last name" />

            <Styled.InputLabel>E-mail</Styled.InputLabel>
            <Styled.TextInput value={email} onChangeText={setEmail} placeholder="Enter your email" keyboardType="email-address" />

            <Styled.InputLabel>Password</Styled.InputLabel>
            <PasswordInputComponent value={password} onChangeText={setPassword} secureTextEntry={!showPassword} toggleVisibility={() => setShowPassword(!showPassword)} />

            <Styled.CheckBoxWrapper>
                <CheckBox
                    value={agreed}
                    onValueChange={setAgreed}
                    tintColors={{ true: '#770FDF', false: '#A0A0A0' }}
                    style={{ marginRight: 8 }}
                />
                <Styled.CheckBoxLabel>I am over 18 years of age and I have read and agree to the Terms of Service and Privacy policy.</Styled.CheckBoxLabel>
            </Styled.CheckBoxWrapper>

            <Styled.Button onPress={handleSignUp}>
                <Styled.ButtonText>Create Account</Styled.ButtonText>
            </Styled.Button>

            <Styled.SignUpWrapper>
                <Styled.SignUpText>Already have an account?</Styled.SignUpText>
                <Styled.SignUpTouchable onPress={() => {/* Navigate to Login Screen */ }}>
                    <Styled.SignUpText style={{ textDecorationLine: 'underline' }}> Log in Here</Styled.SignUpText>
                </Styled.SignUpTouchable>
            </Styled.SignUpWrapper>
        </Styled.Container>
    );
};

export default SignUp;

