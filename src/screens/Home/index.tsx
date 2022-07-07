import React, { useEffect, useState } from 'react';

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
import { Stories } from '../../components/Stories';
import { Post } from '../../components/Post';
import { api } from '../../services/api';

import { PostDto } from '../../dtos/PostDto';
import { ActivityIndicator } from 'react-native';

export function Home() {
    const [feed, setFeed] = useState<PostDto[]>([] as PostDto[])
    const [Loading, setLoading] = useState<boolean>(true);

    const theme = useTheme();

    useEffect(() => {
        async function loadData() {
            try{
                const feed = await api.get("/feed");
                if(feed) {
                    setFeed(feed.data);
                }
            }
            catch(error) {
                console.log(error)
            }
            finally {
                setLoading(false);
            }
        }

        loadData();
    }, []);


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
            {
                Loading ? 
                    <ActivityIndicator color={theme.colors.text} size="large" />
                :
                <Content 
                    ListHeaderComponent={<Stories />}
                    data={feed}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item }) => <Post data={item} />}
                />
            }
           
                
        </Container>
    );
}