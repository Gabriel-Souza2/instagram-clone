import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Text } from 'react-native';
import { IndexPost, indexTypesize } from '../IndexPost';

import {
    Container
} from './styles';

export interface indexesPostAction {
    updateIndexes: (index) => void;
}

interface IndexesPostProps {
    amountOfIndex: number;
    imgIndexVisible: number;
}

function IndexesPost({ amountOfIndex, imgIndexVisible }: IndexesPostProps, ref) {

    const [startRangeIndex, setStartRangeIndex] = useState<number>(0);
    const [endRangeIndex, setEndRangeIndex] = useState<number>(4);
    const [currentIndex, setCurrentIndex] = useState<number>(imgIndexVisible);

    const qtdIndex = new Array(amountOfIndex).fill(0);

    function updateIndexes(index) {
        setCurrentIndex(index);
    }

    useImperativeHandle(ref, () => {
        return {
            updateIndexes
        }
    });

    function getSize(index: number) : indexTypesize {
        if(index >= startRangeIndex && index <=endRangeIndex) {
            return "normal"
        }

        if(index + 1 === startRangeIndex || index - 1 === endRangeIndex) {
            return "small";
        }

        if(index + 2 === startRangeIndex || index - 2 === endRangeIndex) {
            return "tiny";
        }

        return "hidden"
    }


    return (
        <Container>
            {
                qtdIndex.map((_, index) => {
                    return <IndexPost  key={index} size={getSize(index)} active={currentIndex === index}/>
                })
            }
        </Container>
    );
}

export default forwardRef(IndexesPost);