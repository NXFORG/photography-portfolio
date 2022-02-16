import React from 'react';
import './style.css';
import { Grid } from '../../Components/index';

export const Colour = () => {

    const colourPictures = [
        {'id': 19, 'src':'https://bportfoliopictures.blob.core.windows.net/colour/IMG_20211114_144927.jpg'},
        {'id': 20, 'src':'https://bportfoliopictures.blob.core.windows.net/colour/IMG_20220213_114128.jpg'},
        {'id': 21, 'src':'https://bportfoliopictures.blob.core.windows.net/colour/IMG_20220213_114206.jpg'},
        {'id': 22, 'src':'https://bportfoliopictures.blob.core.windows.net/colour/IMG_20220213_114310.jpg'},
        {'id': 23, 'src':'https://bportfoliopictures.blob.core.windows.net/colour/IMG_20220213_115914.jpg'},
    ]

    return (
        <>
            <Grid pictures={colourPictures}/>
        </>
    )
}