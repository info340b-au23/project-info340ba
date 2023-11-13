import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './HomePage.js';
import { Footer } from './Footer.js';
import { NavBar } from './NavBar.js';
import { Banner } from './Banner.js';

export default function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="index" element={<HomePage />}/>
                <Route path="/" element={<HomePage />}/>
                <Route path='about' element={<HomePage />}/>
            </Routes>
            <Banner />
            <Footer />
        </BrowserRouter>
    )
}