import React from 'react';

import {
    Container
} from './styles';

export type indexTypesize = "normal" | "small" | "tiny" | "hidden"; 

interface IndexPostProps {
    size: indexTypesize;
    active: boolean;
}


export function IndexPost({ size, active }: IndexPostProps) {
    return (
        <Container size={size} active={active}>

        </Container>
    );
}


