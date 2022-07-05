import React from 'react';

import {
    Container,
    Header,
    ToolBar,
    LogoWrapper,
    Logo,
    HeaderWrapper,
    ActionButton,
    Content,
    Storys
} from './styles';

import Feather from '@expo/vector-icons/Feather';
import { useTheme } from 'styled-components';
import { Story } from '../../components/Story';

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
            <Content>
                <Storys 
                    data={[1,2,3,4,5,6,7,8,9,10]}
                    keyExtractor={({ item, index }) => index}
                    renderItem={(item) => <Story />}
                />
            </Content>
        </Container>
    );
}