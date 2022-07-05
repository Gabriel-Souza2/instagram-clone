import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

import {
    Container,
    BorderGradient,
    AvatarWrapper,
    Avatar,
    Name
} from './styles';

export function Story() {
    return (
        <Container>
            <BorderGradient>
                <AvatarWrapper>
                    <Avatar source={{uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'}}/>
                </AvatarWrapper>
            </BorderGradient>
            <Name>
                Avatar
            </Name>
        </Container>
    );
}