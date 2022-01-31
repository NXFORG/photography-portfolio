import React from 'react';
import './style.css';
import { Grid } from '../../Components/index';
import { first, second, third, seventh, eighth, ninth } from '../../Pictures/index';

export const Photography = () => {
    const photographyPictures = [first, second, third, seventh, eighth, ninth]
    return (
        <>
            <Grid pictures={photographyPictures}/>
        </>
    )
}