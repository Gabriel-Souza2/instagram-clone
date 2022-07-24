import styled from 'styled-components/native';
import { indexTypeSize } from '.';

const indexSizes = {
    "normal": 6,
    "small": 4,
    "tiny": 1,
    "hidden": 0
}

interface IndexSize {
    size: indexTypeSize;
    active: boolean;
}

export const Container = styled.View<IndexSize>`
    display: ${({ size }) => size  === "hidden" ? 'none' : 'flex'};
    width: ${({ size }) => indexSizes[size]}px;
    height: ${({ size }) => indexSizes[size]}px;
    border-radius: ${({ size }) => indexSizes[size] / 2}px;
    background-color: ${({ theme, active }) => active ? theme.colors.index_active : theme.colors.text_time_post};
    margin-right: 4px;
`;
