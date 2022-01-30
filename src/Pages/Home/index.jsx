import React from 'react';
import './style.css';
import { Grid } from '../../Components/index';
import { first, second, third, fourth, fifth, sixth } from '../../Pictures/index';

export const Home = () => {
    const homePictures = [first, second, third, fourth, fifth, sixth]
    return (
        <>
            <Grid pictures={homePictures}/>
        </>
    )
}