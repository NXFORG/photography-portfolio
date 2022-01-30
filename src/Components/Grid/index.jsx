import React from 'react';
import { Picture } from '../index';
import './style.css';

export const Grid = (pictures) => {

/*     const displayPictures = () => pictures.pictures.map((p, i) => <img className={largePicture ? 'largePicture' : 'displayPicture'} 
                                                                       key={i} 
                                                                       src={p} 
                                                                       onClick={changeLargePicture}/>) */

    const displayPictures = () => pictures.pictures.map((p, i) => <Picture key={i} src={p}/>)                                                                   

    const noPictures = () => <h3>Pictures coming soon</h3>

    return (
        <article>
            <h2 id='gridTitle'>Examples</h2>
            <section id='pictureGrid'>
                {pictures ? displayPictures() : noPictures()}
            </section>
        </article>
    )
}