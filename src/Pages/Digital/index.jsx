import React from 'react';
import './style.css';
import { Grid } from '../../Components/index';
import { fourth, fifth, sixth, seventh, eighth, ninth } from '../../Pictures/index';

export const Digital = () => {
    const digitalPictures = [fourth, fifth, sixth, seventh, eighth, ninth]
    return (
        <>
            <Grid pictures={digitalPictures}/>
        </>
    )
}