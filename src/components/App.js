import React, { useState } from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from './HomePage.js';
import { Footer } from './Footer.js';
import { NavBar } from './NavBar.js';
import { Banner } from './Banner.js';
import { About } from './About.js';
import { Insights } from './Insights.js';
import { CrowdSource } from './CrowdSource.js';
import {Classes} from './Classes.js';
export default function App(props) {
    // form filtering for insights page
    const [ selectedMajor, setSelectedMajor ] = useState('');

    //get sorted list of unique teamNames. reduce array of objects into array of strings, 
    //convert to Set to get uniques, spread back into array, and sort 
    const uniqueTeamNames = [...new Set(props.data.reduce((all, current) => {
        return all.concat([current["What Major did you apply to?"]]);
    }, []))].sort();

    let displayedData = props.data.filter((entry) => {
        if (selectedMajor === '') return true;
        return entry["What Major did you apply to?"] === selectedMajor;
    })

    const applyFilter = (major) => {
        setSelectedMajor(major);
    }
    
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="crowdsource" element={<CrowdSource />}/>
                <Route path="/" element={<HomePage data={props.data} />} />
                <Route path="/index" element={<HomePage data={props.data} />} />
                <Route path='about' element={<About />}/>
                <Route path='classes' element={<Classes />}/> 
                <Route path='insights' element={<Insights majorOptions={uniqueTeamNames} data={displayedData} applyFilterCallback={applyFilter}/>} />
                <Route path="*" element={<Navigate to="/index" />} />
            </Routes>
            <Banner />
            <Footer />
        </BrowserRouter>
    )
}