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
    // form filtering for insights page
    const [ selectedMajor, setSelectedMajor ] = useState('');
    const [ surveyData, setSurveyData ] = useState([]);

    useEffect(() => {
        const tasksRef = ref(db, 'surveyEntries');

        //returns a function that will "unregister" (turn off) the listener
        const unregisterFunction = onValue(tasksRef, (snapshot) => {
            const amitValue = snapshot.val();
            console.log(amitValue);
            setSurveyData(amitValue);
            // blah blah blah
        })

        //cleanup function for when component is removed
        function cleanup() {
            unregisterFunction(); //call the unregister function
        }
        
        return cleanup; //effect hook callback returns the cleanup function
    }, []);

    console.log(surveyData);

    // Get a sorted list of unique teamNames
    const uniqueTeamNames = [...new Set(Object.values(surveyData).reduce((all, current) => {
        const teamName = current["teamName"];
        if (teamName) {
            return all.concat([teamName]);
        }
        return all;
    }, []))].sort();

    // Filter data based on selectedMajor
    let displayedData = Object.values(surveyData).filter((entry) => {
        if (selectedMajor === '') return true;
        return entry["teamName"] === selectedMajor;
    });

    const applyFilter = (major) => {
        setSelectedMajor(major);
    }
    
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="crowdsource" element={<CrowdSource dataBase={db}/>}/>
                <Route path="/" element={<HomePage data={surveyData} />} />
                <Route path="/index" element={<HomePage data={surveyData} />} />
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