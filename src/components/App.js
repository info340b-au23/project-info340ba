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
import { getDatabase, ref, onValue } from 'firebase/database';
import { initializeApp } from 'firebase/app';

export default function App(props) {
    // form filtering for insights page
    const [ selectedMajor, setSelectedMajor ] = useState('');
    const [ surveyData, setSurveyData ] = useState([]);

    const firebaseConfig = {
        apiKey: "AIzaSyAO_CnHWMJPgnejQnMt9ZafnHB3Oww4BVY",
        authDomain: "info-340-ba9----pathwise.firebaseapp.com",
        databaseURL: "https://info-340-ba9----pathwise-default-rtdb.firebaseio.com",
        projectId: "info-340-ba9----pathwise",
        storageBucket: "info-340-ba9----pathwise.appspot.com",
        messagingSenderId: "468546007102",
        appId: "1:468546007102:web:ac8ed9ae82d756c962616f"
    };
      
    const app = initializeApp(firebaseConfig);
    
    const db = getDatabase();
    
    const surveyEntries = ref(db, 'surveyEntries');

    useEffect(() => {
        const getData = onValue(surveyEntries, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            setSurveyData(data);
        });

        return () => getData();
    }, [surveyEntries]);

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