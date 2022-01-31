import React from 'react';
import './style.css';
import { Grid } from '../../Components/index';
import { first, second, third, tenth, eleventh, twelfth } from '../../Pictures/index';

export const Illustration = () => {
    const illustrationPictures = [first, second, third, tenth, eleventh, twelfth]
    return (
        <>
            <Grid pictures={illustrationPictures}/>
        </>
    )
}