import React, { forwardRef, useEffect, useImperativeHandle } from 'react';

import Ionicons  from '@expo/vector-icons/Ionicons';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withDelay, runOnJS } from 'react-native-reanimated';

import { useTheme } from 'styled-components';

interface LikeProps {
    size: number;
    color: 'white' | 'red';
    disapper?: boolean;
    finishAnimateCallback?: () => void;
}
export function Like({ 
    size, 
    color, 
    disapper = false, 
    finishAnimateCallback = () => {}
}: LikeProps) {
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
            if(finished && disapper) {
                scale.value = withDelay(300, withSpring(0, {}, (finished) => {
                    'worklet';
                    finished && runOnJS(finishAnimateCallback)();
                }));
            }
        });
    }


    useEffect(() => {
        startAnimate();
    });

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

