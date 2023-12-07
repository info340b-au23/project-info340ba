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

    //get sorted list of unique teamNames. reduce array of objects into array of strings, 
    //convert to Set to get uniques, spread back into array, and sort 
    const uniqueTeamNames = [...new Set(surveyData.reduce((all, current) => {
        return all.concat([current["What Major did you apply to?"]]);
    }, []))].sort();

    let displayedData = surveyData.filter((entry) => {
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