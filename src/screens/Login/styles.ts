import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: white;
  padding: 20px;
`;

export const Title = styled.Text`
  font-family: Sora;
  font-size: 18px;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: -0.02em;
  text-align: center;
  margin-bottom: 20px;
`;

export const InputLabel = styled.Text`
  font-family: Sintony;
  margin-bottom: 6px;
  color: #A0A0A0;
  font-size: 11px;
`;

export const TextInput = styled.TextInput`
  padding: 8px 12px;
  margin-bottom: 12px;
  height: 48px;
  border-radius: 4px;
  background-color: #F4F4F4;
`;

export const Button = styled.TouchableOpacity`
  width: 335px;
  height: 58px;
  background-color: #770FDF;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  margin-top: 20px;
  left: 8px;
  gap: 10px;
`;

export const ButtonText = styled.Text`
  font-family: Sora;
  color: white;
  font-size: 16px;
`;

export const SignUpWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SignUpText = styled.Text`
  font-family: Sora;
  font-size: 11px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: -0.02em;
  color: #A0A0A0;
  text-align: center;
`;

export const SignUpTouchable = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;