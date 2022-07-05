import React from 'react';

import {
    Container,
    Header,
    ToolBar,
    LogoWrapper,
    Logo,
    HeaderWrapper,
    ActionButton
} from './styles';

import Feather from '@expo/vector-icons/Feather';
import { useTheme } from 'styled-components';

export function Home() {
    const theme = useTheme();

    return (
        <Container>
            <Header>
                <HeaderWrapper>
                    <LogoWrapper>
                        <Logo>Instagram</Logo>
                    </LogoWrapper>
                    <ToolBar>
                        <ActionButton>
                            <Feather 
                                name="plus-square" 
                                size={24}
                                color={theme.colors.text}
                            />
                        </ActionButton>
                        <ActionButton>
                            <Feather 
                                name="heart" 
                                size={24} 
                                color={theme.colors.text}
                            />
                        </ActionButton>
                        <ActionButton>
                            <Feather 
                                name="message-circle" 
                                size={24} 
                                color={theme.colors.text} 
                            />
                        </ActionButton>
                    </ToolBar>
                </HeaderWrapper>
            </Header>
        </Container>
    );
}