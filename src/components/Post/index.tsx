import React, { useRef, useState } from 'react';

import {
    Container,
    Header,
    AvatarWrapper,
    Name,
    Icons,
    Images,
    Img,
    Actions,
    CommentsIcon,
    ActionsLeft,
    ImgIndex,
    ActionsRight,
    Likes,
    Message,
    WhoLiked,
    Footer,
    DescriptionWrapper,
    WhoPostedName,
    Description,
    Comments,
    TimePost,
    IndexesImages
} from './styles';
import { Story } from '../Story';

import { PostDto } from "../../dtos/PostDto";
import { ViewToken } from 'react-native';
import IndexesPost, { indexesPostAction }  from '../IndexesPost';

interface PostProps {
    data: PostDto;
}

export function Post({ data }: PostProps) {

    const indexesRef = useRef<indexesPostAction>(null);

    function getCurrentImg(event) {
        const index = Math.round(event.contentOffset.x / event.layoutMeasurement.width);
        
        
        indexesRef.current.updateIndexes(index);
    }

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
            <Images 
                data={data.images}
                keyExtractor={(_,index) => `${data.authorId}-${index}`}
                renderItem={({ item }) => <Img 
                    source={{uri: item}} 
                />}
                pagingEnabled
                onScroll={event => getCurrentImg(event.nativeEvent)}
            />
            <Actions>
                <ActionsLeft>
                    <Icons name="ios-heart-outline" size={24}/>
                    <CommentsIcon name="ios-chatbubble-outline" size={24}/>
                    <Icons name="send-outline" size={24} />
                </ActionsLeft>
                <IndexesImages>
                    {
                        data.images.length > 1 ? 
                            <IndexesPost 
                                amountOfIndex={data.images.length} 
                                imgIndexVisible={0}
                                ref={indexesRef}
                            /> 
                                : 
                            <></>
                    }
                </IndexesImages>
                <ActionsRight>
                    <Icons name="bookmark-outline" size={24} />
                </ActionsRight>
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
                    <Description>{ data.description }</Description>
                </DescriptionWrapper>
                <Comments>Ver os 22 comentarios</Comments>
                <TimePost>Há 3 dias</TimePost>
            </Footer>
        </Container>
    );
}