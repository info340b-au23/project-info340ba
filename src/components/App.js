import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './HomePage.js';
import { Footer } from './Footer.js';
import { NavBar } from './NavBar.js';
import { Banner } from './Banner.js';
import { About } from './About.js';

export default function App(props) {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route index element={<HomePage data={props.data}/>}/>
                <Route path='about' element={<About />}/>
            </Routes>
            <Banner />
            <Footer />
        </BrowserRouter>
    )
}