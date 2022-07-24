import React, { forwardRef, Ref, useImperativeHandle, useState } from 'react';
import Animated, { StretchInX, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useTheme } from 'styled-components';

export type indexTypeSize = "normal" | "small" | "tiny" | "hidden"; 

export interface IndexActions {
    changeSize: (size: indexTypeSize) => void;
}

interface IndexPostProps {
    size: indexTypeSize;
    active: boolean;
}

const indexSizes = {
    "normal": 6,
    "small": 4,
    "tiny": 1,
    "hidden": 0
}

function IndexPost({ size, active }: IndexPostProps, ref) {

    const [currentSize, setCurrentSize] = useState<indexTypeSize>(size);

    const theme = useTheme();

    const width = useSharedValue(indexSizes[currentSize]);
    const height = useSharedValue(indexSizes[currentSize]);
    const marginRight = useSharedValue(4);

    const animatedIndexStyle = useAnimatedStyle(() => {
        return {
            width: withTiming(width.value, {
                duration: 200,
            }),
            height: withTiming(height.value, {
                duration: 200
            }),
            
        }
    })
        
    function changeSize(size: indexTypeSize): void {
        width.value = indexSizes[size];
        height.value = indexSizes[size];
        setCurrentSize(size);
    };

    useImperativeHandle(ref, () => {
        return {
            changeSize
        }
    })

    return (
        <Animated.View  style={[animatedIndexStyle, {
            width: indexSizes[currentSize],
            height: indexSizes[currentSize],
            borderRadius: 10,
            backgroundColor: active ? theme.colors.index_active : theme.colors.text_time_post,
            marginRight: 4,
            display: width.value === 0 ? 'none' : 'flex'
        }, ]}>

        </Animated.View>
    );
}

export default forwardRef(IndexPost);


