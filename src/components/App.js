import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './HomePage.js';
import { Footer } from './Footer.js'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}