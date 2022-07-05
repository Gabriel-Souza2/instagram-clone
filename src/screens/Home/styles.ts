import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
    width: 100%;
    height: 90px;

    justify-content: flex-end;
`;

export const HeaderWrapper = styled.View`
    flex-direction: row;

    justify-content: space-between;
    align-items: center;

    margin-bottom: 10px;
`;

export const LogoWrapper = styled.View`
    margin-left: 15px;
`;

export const Logo = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(20)}px;
    font-weight: bold;
`;

export const ToolBar = styled.View`
    flex-direction: row;
`;

export const ActionButton = styled(BorderlessButton)`
    margin-right: 20px;
`

export const Content = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false
})`
    flex: 1;
`;

export const Storys = styled.FlatList.attrs({
    showsHorizontalIndicator: false,
    horizontal: true
})`
    padding: 10px;
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.border_color};
`;
