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
} from './styles';

import Feather from '@expo/vector-icons/Feather';
import { useTheme } from 'styled-components';
import { Story } from '../../components/Story';
import { Stories } from '../../components/Stories';
import { Post } from '../../components/Post';

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
                                size={26}
                                color={theme.colors.text}
                            />
                        </ActionButton>
                        <ActionButton>
                            <Feather 
                                name="heart" 
                                size={26} 
                                color={theme.colors.text}
                            />
                        </ActionButton>
                        <ActionButton>
                            <Feather 
                                name="message-circle" 
                                size={26} 
                                color={theme.colors.text} 
                            />
                        </ActionButton>
                    </ToolBar>
                </HeaderWrapper>
            </Header>
            <Content 
                ListHeaderComponent={<Stories />}
                data={[1,2,3,4,5]}
                keyExtractor={(item, index) => `${index}`}
                renderItem={() => <Post aspectRatio={0.834} />}
            />
                
        </Container>
    );
}