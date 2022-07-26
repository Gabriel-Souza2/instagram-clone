import React, { forwardRef, useImperativeHandle } from 'react';

import Ionicons  from '@expo/vector-icons/Ionicons';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withDelay } from 'react-native-reanimated';

import { useTheme } from 'styled-components';
import { StyleSheet } from 'react-native';

export interface LikeAction {
    startAnimate: () => void;
}

interface LikeProps {
    size: number;
    color: 'white' | 'red';
    disapper?: boolean;
}
function Like({ size, color , disapper = false}: LikeProps, ref) {
    const theme = useTheme();

    const scale = useSharedValue(0);

    const likeAnimation = useAnimatedStyle(() => {
        return {
            transform: [{scale: Math.max(scale.value, 0)}]
        }
    })

    function startAnimate() {
        scale.value = withSpring(1, {}, 
        (finished) => {
            if(finished && disapper)
            scale.value = withDelay(300, withSpring(0));
        });
    }

    useImperativeHandle(ref, () => {
        return {
            startAnimate
        }
    })

    return (
        <Animated.View style={[likeAnimation]}>
            <Ionicons 
            name='heart' 
            size={size} 
            color={
                color === 'white' ? theme.colors.text : theme.colors.liked
            }/>
        </Animated.View>
    );
}

export default forwardRef(Like);

