import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Photography } from './Pages/Photography';
import { Illustration } from './Pages/Illustration';
import { Digital } from './Pages/Digital';
import { Header } from './Components/index';
import { Footer } from './Components/index';
import './style.css';

function App (){
    return(
        <div id='app'>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route exact path='/photography' element={<Photography />}/>
                <Route exact path='/illustration' element={<Illustration />}/>
                <Route exact path='/digital' element={<Digital />}/>
            </Routes>
            <Footer />
        </div>
    )   
}

export default App;