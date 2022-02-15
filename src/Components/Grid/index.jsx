import React from 'react';
import { Picture } from '../index';
import './style.css';

export const Grid = (pictures) => {
    const displayPictures = (column) => {
        let picturesArray = [];
        for(let i = 0; i < pictures.pictures.length; i++){
            if(i % 4 === column){
                    picturesArray.push(<Picture key={pictures.pictures[i].id} src={pictures.pictures[i].src}/>);
                }
            }
        return picturesArray;
    }                                                                   

    const noPictures = () => <h3 id='noPicturesHeader'>Pictures coming soon...</h3>

    return (
        <article>
            <h2 id='gridTitle'>Examples</h2>
            <section>{pictures.pictures[0].src ? 
                <section id='pictureGrid'> 
                    <div className='gridColumn'>{displayPictures(0)}</div>
                    <div className='gridColumn'>{displayPictures(1)}</div>
                    <div className='gridColumn'>{displayPictures(2)}</div>
                    <div className='gridColumn'>{displayPictures(3)}</div>
                </section> : noPictures()
            }
            </section>
        </article>
    )
}