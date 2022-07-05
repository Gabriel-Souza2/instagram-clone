import { BorderlessButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';

interface BorderGradientProps {
    small: boolean;
}


export const Container = styled(BorderlessButton)`
    justify-content: center;
    align-items: center;
`;

export const BorderGradient = styled(LinearGradient).attrs({
    colors: ['#CA1D7E', '#E35157', '#F2703F']
})<BorderGradientProps>`
    padding: ${({ small }) => small ? 1 : 2}px;
    border-radius: 100px;
`;

