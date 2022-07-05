import React from 'react';

import { Avatar } from "../Avatar"

import {
    Container,
    BorderGradient,
    Name
} from './styles';

export function Story() {
    return (
        <Container>
            <BorderGradient>
                    <Avatar 
                        uri='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' 
                        size={70}
                    />
            </BorderGradient>
            <Name>Avatar</Name>
        </Container>
    );
}