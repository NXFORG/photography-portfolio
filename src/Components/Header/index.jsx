import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Header = () => {
    return (
        <nav>
            <div id='navBg'>
                <div id='navTitle'>Benjamin 
                    <br></br>
                    <span id='navPortfolio'>Portfolio  </span> 
                    Anstead
                </div>
                <div id='linkContainer'>
                    <span><Link className='navLink' id='firstLink' to='/'>Artwork</Link></span>
                    <span><Link className='navLink' to='/photography'>Black and White Photography</Link></span>
                    <span><Link className='navLink' to='/colour'>Colour Photography</Link></span>
                    <span><Link className='navLink' to='/illustration'>Illustration</Link></span>
                </div>
            </div>
        </nav>
    )
}