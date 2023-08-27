import { TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { InputContainer } from './styles';


export const PasswordInputComponent: React.FC<{
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry: boolean;
    toggleVisibility: () => void;
}> = ({ value, onChangeText, secureTextEntry, toggleVisibility }) => {
    return (
        <InputContainer>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder="Minimium 8 characters"
                secureTextEntry={secureTextEntry}
                style={{ flex: 1 }}
            />
            <Ionicons
                name={secureTextEntry ? 'eye-outline' : 'eye-off-outline'}
                size={24}
                color="#A0A0A0"
                onPress={toggleVisibility}
            />
        </InputContainer>
    );
};
