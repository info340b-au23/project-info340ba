import React, { useState, useEffect } from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from './HomePage.js';
import { Footer } from './Footer.js';
import { NavBar } from './NavBar.js';
import { Banner } from './Banner.js';
import { About } from './About.js';
import { Insights } from './Insights.js';
import { CrowdSource } from './CrowdSource.js';
import { Classes } from './Classes.js';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase/config.js';

export default function App(props) {
    const [ selectedMajor, setSelectedMajor ] = useState('');
    const [ surveyData, setSurveyData ] = useState([]);

    const applyFilter = (major) => {
        setSelectedMajor(major);
    }

    useEffect(() => {
        const tasksRef = ref(db, 'surveyEntries');

        const unregisterFunction = onValue(tasksRef, (snapshot) => {
            const amitValue = snapshot.val();
            setSurveyData(amitValue);
        })

        function cleanup() {
            unregisterFunction();
        }
        
        return cleanup; 
    }, []);

    const availableMajors = [...new Set(Object.values(surveyData).reduce((all, current) => {
        const teamName = current["What Major did you apply to?"];
        if (teamName) {
            return all.concat([teamName]);
        }
        return all;
    }, []))].sort();

    let displayedData = Object.values(surveyData).filter((entry) => {
        if (selectedMajor === '') return true;
        return entry["What Major did you apply to?"] === selectedMajor;
    });

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="crowdsource" element={<CrowdSource dataBase={db}/>}/>
                <Route path="/" element={<HomePage data={surveyData} />} />
                <Route path="/index" element={<HomePage data={surveyData} />} />
                <Route path='about' element={<About />}/>
                <Route path='classes' element={<Classes />}/> 
                <Route path='insights' element={<Insights majorOptions={availableMajors} data={displayedData} selectedMajor={selectedMajor} applyFilterCallback={applyFilter}/>} />
                <Route path="*" element={<Navigate to="/index" />} />
            </Routes>
            <Banner />
            <Footer />
        </BrowserRouter>
    )
}