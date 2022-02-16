import React from 'react';
import './style.css';
import { Grid } from '../../Components/index';

export const Photography = () => {

    const photographyPictures = [
        {'id': 1, 'src':'https://bportfoliopictures.blob.core.windows.net/blackandwhite/IMG_20211114_155353.jpg'},
        {'id': 2, 'src':'https://bportfoliopictures.blob.core.windows.net/blackandwhite/IMG_20211114_183344.jpg'},
        {'id': 3, 'src':'https://bportfoliopictures.blob.core.windows.net/blackandwhite/IMG_20211114_155605.jpg'},
        {'id': 4, 'src':'https://bportfoliopictures.blob.core.windows.net/blackandwhite/IMG_20211114_155942.jpg'},
        {'id': 5, 'src':'https://bportfoliopictures.blob.core.windows.net/blackandwhite/IMG_20211114_155822.jpg'},
        {'id': 6, 'src':'https://bportfoliopictures.blob.core.windows.net/blackandwhite/IMG_20211114_155928.jpg'},
        {'id': 7, 'src':'https://bportfoliopictures.blob.core.windows.net/blackandwhite/IMG_20220201_094031.jpg'},
        {'id': 8, 'src':'https://bportfoliopictures.blob.core.windows.net/blackandwhite/IMG_20220213_113223.jpg'},
        {'id': 9, 'src':'https://bportfoliopictures.blob.core.windows.net/blackandwhite/IMG_20220213_113353.jpg'},
        {'id': 10, 'src':'https://bportfoliopictures.blob.core.windows.net/blackandwhite/IMG_20220213_113428.jpg'},
        {'id': 11, 'src':'https://bportfoliopictures.blob.core.windows.net/blackandwhite/IMG_20220213_113522.jpg'},
        {'id': 12, 'src':'https://bportfoliopictures.blob.core.windows.net/blackandwhite/IMG_20220213_113608.jpg'},
        {'id': 13, 'src':'https://bportfoliopictures.blob.core.windows.net/blackandwhite/IMG_20220213_113719.jpg'},
        {'id': 14, 'src':'https://bportfoliopictures.blob.core.windows.net/blackandwhite/IMG_20220213_113749.jpg'},
        {'id': 15, 'src':'https://bportfoliopictures.blob.core.windows.net/blackandwhite/IMG_20220213_114449.jpg'},
        {'id': 16, 'src':'https://bportfoliopictures.blob.core.windows.net/blackandwhite/IMG_20220213_114856.jpg'},
        {'id': 17, 'src':'https://bportfoliopictures.blob.core.windows.net/blackandwhite/IMG_20220213_114531.jpg', 'pos':4},
        {'id': 18, 'src':'https://bportfoliopictures.blob.core.windows.net/blackandwhite/IMG_20220213_114827.jpg'},
    ]

    return (
        <>
            <Grid pictures={photographyPictures}/>
        </>
    )
}