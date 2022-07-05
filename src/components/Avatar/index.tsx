import React from 'react';

import {
    Container,
    Img
} from './styles';

interface AvatarProps {
    uri: string,
    size: number
}
export function Avatar({uri, size}: AvatarProps) {
    return (
        <Container >
            <Img source={{uri: uri}} size={size} />
        </Container>
    );
}