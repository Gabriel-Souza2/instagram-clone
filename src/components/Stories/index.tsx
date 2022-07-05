import React from 'react';
import { Story } from '../Story';

import {
    Container
} from './styles';

export function Stories() {
    return (
        <Container
            data={[1,2,3,4,5,6,7,8,9,10]}
            keyExtractor={({ item, index }) => index}
            renderItem={(item) => <Story />}
        />
    );
}