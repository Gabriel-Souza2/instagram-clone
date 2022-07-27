import React from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';


import {
    Container,
    Header,
    TitleWrapper,
    ArrowButton,
    Title,
    CommentsList
} from './styles';

export function Comments() {
    return (
        <Container>
            <Header>
                <TitleWrapper>
                    <ArrowButton>
                        <Ionicons name="md-arrow-back-outline" size={24} color="black" />
                    </ArrowButton>
                    <Title>Comentários</Title>
                </TitleWrapper>
                <Ionicons name="send-outline" size={24} color="black" />
            </Header>
            <CommentsList>

            </CommentsList>

        </Container>
    );
}