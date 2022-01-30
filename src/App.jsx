import React from 'react';
import { Routes, Route } from 'react-router-dom';
import * as Pages from './pages/index';
import { Header } from './Components/index';
import { Footer } from './Components/index';
import './style.css';

function App (){
    return(
        <div id='app'>
            <Header />
            <Routes>
                <Route exact path='/' element={<Pages.Home />}/>
            </Routes>
            <Footer />
        </div>
    )   
}

export default App;