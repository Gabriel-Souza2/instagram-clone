import React, { useRef, useState } from 'react';

import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { runOnJS } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    Header,
    AvatarWrapper,
    Name,
    Icons,
    Images,
    Img,
    Actions,
    LikeButton,
    CommentsButton,
    CommentsIcon,
    ActionsLeft,
    ImagesWrapper,
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
    IndexesImages,
    LikePostWrapper
} from './styles';
import { Story } from '../Story';

import { PostDto } from "../../dtos/PostDto";
import IndexesPost, { indexesPostAction }  from '../IndexesPost';
import { Like } from '../Like';


interface PostProps {
    data: PostDto;
}

export function Post({ data }: PostProps) {

    const navigation = useNavigation();

    const [likedButton, setLikedButton] = useState<boolean>(false);
    const [likedPost, setLikedPost] = useState<boolean>(false);

    const indexesRef = useRef<indexesPostAction>(null);

    const doubleTap = Gesture.Tap().numberOfTaps(2).onEnd((_event, success) => {
        'Worklet';
        if(success) {
            runOnJS(handleLike)();
        }
    })

    function handleLike() {
        setLikedButton(false);

        setLikedButton(true);
        setLikedPost(true);
    }

    function finishAnimateLikedPost() {
        setLikedPost(false);
    }

    function getCurrentImg(event) {
        const index = Math.round(event.contentOffset.x / event.layoutMeasurement.width);
        
        indexesRef.current.updateIndexes(index);
    }

    function handleLikeButton() {
        setLikedButton(!likedButton);
    }


    function handleComments() {
        navigation.navigate('Comments');
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
            <ImagesWrapper>
                <GestureDetector gesture={doubleTap}> 
                    <Images 
                        data={data.images}
                        keyExtractor={(_,index) => `${data.authorId}-${index}`}
                        renderItem={({ item }) => <Img 
                            source={{uri: item}} 
                        />}
                        pagingEnabled
                        onScroll={event => getCurrentImg(event.nativeEvent)}
                    />
                </GestureDetector>
                <LikePostWrapper>
                    {
                       likedPost ? 
                            <Like 
                                size={100} 
                                color="white" 
                                disapper={true}
                                finishAnimateCallback={finishAnimateLikedPost}
                            /> 
                        : 
                            <></>
                    }
                </LikePostWrapper>
            </ImagesWrapper>

            <Actions>
                <ActionsLeft>
                    <LikeButton onPress={handleLikeButton}>
                    
                        {
                        likedButton ?
                                <Like  size={24} color='red' />
                                :
                                <Icons name="ios-heart-outline" size={24}/>
                            
                        }
                    </LikeButton>

                    
                    <CommentsButton onPress={handleComments}>
                        <CommentsIcon name="ios-chatbubble-outline" size={24}/>
                    </CommentsButton>
                    <Icons name="send-outline" size={24} />
                </ActionsLeft>
                <IndexesImages>
                    {
                        data.images.length > 1 ? 
                            <IndexesPost 
                                amountOfIndex={data.images.length} 
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