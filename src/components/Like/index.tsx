import React, { forwardRef, useImperativeHandle } from 'react';

import Ionicons  from '@expo/vector-icons/Ionicons';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withDelay } from 'react-native-reanimated';

import { useTheme } from 'styled-components';
import { StyleSheet } from 'react-native';

export interface LikeAction {
    startAnimate: () => void;
}

function Like(_, ref) {
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
            scale.value = withDelay(500, withSpring(0));
        });
    }

    useImperativeHandle(ref, () => {
        return {
            startAnimate
        }
    })

    return (
        <Animated.View style={[style.container, likeAnimation]}>
            <Ionicons name='heart' size={120} color={theme.colors.text}/>
        </Animated.View>
    );
}

const style = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        justifyContent:'center',
        alignItems: 'center',
    }
});

export default forwardRef(Like);

