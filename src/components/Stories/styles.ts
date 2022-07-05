import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.FlatList.attrs({
    showsHorizontalIndicator: false,
    horizontal: true
})`
    padding: 10px;
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.border_color};
`;

export const StoryWrapper = styled.View`
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`;

export const Name = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    margin-top: 5px;
`;