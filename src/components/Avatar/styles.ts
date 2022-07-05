import styled from 'styled-components/native';

interface ImageProps {
    size: number
}

export const Container = styled.View`
    border-radius: 100px;
    background-color: black;
    padding: 3px;

    justify-content: center;
    align-items: center;
`;

export const Img = styled.Image<ImageProps>`
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    border-radius: 100px;
`;
