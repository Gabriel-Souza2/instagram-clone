import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import IndexPost, { indexTypeSize, IndexActions } from '../IndexPost';

import {
    Container
} from './styles';

export interface indexesPostAction {
    updateIndexes: (index) => void;
}

interface IndexesPostProps {
    amountOfIndex: number;
}

function IndexesPost({ amountOfIndex }: IndexesPostProps, ref) {

    const [startRangeIndex, setStartRangeIndex] = useState<number>(0);
    const [endRangeIndex, setEndRangeIndex] = useState<number>(4);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const indexesRef = useRef([]);

    const qtdIndex = new Array(amountOfIndex).fill(0);

    function updateIndexes(index) {
        if(index > currentIndex && index > endRangeIndex) {
            setStartRangeIndex(startRangeIndex + 1);
            setEndRangeIndex(index);
        }

        if(index < currentIndex && index < startRangeIndex) {
            setStartRangeIndex(index);
            setEndRangeIndex(endRangeIndex - 1)
        }

        updateSizeIndexes();
        setCurrentIndex(index);
    }

    function updateSizeIndexes() {
        indexesRef.current.forEach((ref, index) => {
            ref.changeSize(getSize(index));
        });
    }

    useImperativeHandle(ref, () => {
        return {
            updateIndexes
        }
    });

    function getSize(index: number) : indexTypeSize {
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
                    let size = getSize(index);
                    
                    return <IndexPost  
                            key={index} 
                            size={getSize(index)} 
                            active={currentIndex === index}
                            ref={el => indexesRef.current[index] = el}
                        />
                })
            }
        </Container>
    );
}

export default forwardRef(IndexesPost);