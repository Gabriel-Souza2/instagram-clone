import { BorderlessButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled(BorderlessButton)`
    margin-right: 10px;

    justify-content: center;
    align-items: center;
`;

export const BorderGradient = styled(LinearGradient).attrs({
    colors: ['#CA1D7E', '#E35157', '#F2703F']
})`
    padding: 3px;
    border-radius: 100px;
`;

export const Name = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    margin-top: 5px;
`;