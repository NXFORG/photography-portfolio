import React, {useState} from "react";
import './style.css';

export const Picture = (source) => {
    const [ largePicture, setLargePicture ] = useState(false);
    const changeLargePicture = () => setLargePicture((prevPicture) => !prevPicture);

    return (
        <img className={largePicture ? 'largePicture' : 'displayPicture'}  
             src={source.src} 
             onClick={changeLargePicture}/>
    )
}