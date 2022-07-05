import styled from 'styled-components/native';

export const Container = styled.FlatList.attrs({
    showsHorizontalIndicator: false,
    horizontal: true
})`
    padding: 10px;
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.border_color};
`;