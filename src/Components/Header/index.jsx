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
                <div>
                    <span><Link className='navLink' to='/'>Artwork</Link></span>
                    <span><Link className='navLink' to='/'>Photography</Link></span>
                    <span><Link className='navLink' to='/'>Illustration</Link></span>
                    <span><Link className='navLink' to='/'>Digital</Link></span>
                </div>
            </div>
        </nav>
    )
}