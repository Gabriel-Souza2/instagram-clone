import React from 'react';

import { Avatar } from "../Avatar"

import {
    Container,
    BorderGradient,
} from './styles';

interface StoryProps {
    uri: string;
    small?: boolean
}

export function Story({ uri, small=false }: StoryProps) {
    return (
        <Container>
            <BorderGradient small={small}>
                    <Avatar 
                        uri={uri}
                        size={small ? 30 : 70}
                    />
            </BorderGradient>
        </Container>
    );
}