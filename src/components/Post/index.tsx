import React from 'react';

import {
    Container,
    Header,
    AvatarWrapper,
    Name,
    Icons,
    Img,
    Actions,
    CommentsIcon,
    ActionsLeft,
    Likes,
    Message,
    WhoLiked,
    Footer,
    DescriptionWrapper,
    WhoPostedName,
    Description,
    Comments,
    TimePost
} from './styles';
import { Story } from '../Story';

interface PostProps {
    aspectRatio: number;
}

export function Post({ aspectRatio }: PostProps) {
    return (
        <Container>
            <Header>
                <AvatarWrapper>
                    <Story 
                        uri='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                        small={true}
                    />
                    <Name>Avatar</Name>
                </AvatarWrapper>
                <Icons name="md-ellipsis-vertical" size={24}/>
            </Header>
            <Img 
                source={{uri: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/2.jpeg"}} 
                aspectRatio={aspectRatio}
            />
            <Actions>
                <ActionsLeft>
                    <Icons name="ios-heart-outline" size={24}/>
                    <CommentsIcon name="ios-chatbubble-outline" size={24}/>
                    <Icons name="send-outline" size={24} />
                </ActionsLeft>
                <Icons name="bookmark-outline" size={24} />
            </Actions>
            <Footer>
                <Likes>
                    <Message>
                        Curtido por 
                    </Message>
                    <WhoLiked>
                        Avatar e outras pessoas
                    </WhoLiked>
                </Likes>
                <DescriptionWrapper>
                    <WhoPostedName>Avatar</WhoPostedName>
                    <Description>Working hard at Rocketseat!</Description>
                </DescriptionWrapper>
                <Comments>Ver os 22 comentarios</Comments>
                <TimePost>Há 3 dias</TimePost>
            </Footer>
        </Container>
    );
}