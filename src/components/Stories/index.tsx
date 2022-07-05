import React from 'react';
import { Story } from '../Story';

import {
    Container,
    StoryWrapper,
    Name
} from './styles';

export function Stories() {
    return (
        <Container
            data={[1,2,3,4,5,6,7,8,9,10]}
            keyExtractor={({ item, index }) => index}
            renderItem={(item) => 
                <StoryWrapper>
                    <Story 
                        uri='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                    />
                    <Name>Avatar</Name>
                </StoryWrapper>

            }
        />
    );
}