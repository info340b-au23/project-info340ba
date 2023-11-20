import React, { useState } from 'react';

export function Insights(props) {
    const [ selectedMajor, setSelectedMajor ] = useState('');

    const selectMajor = (event) => {
        setSelectedMajor(event.target.value);
    }

    const optionElems = props.majorOptions.map((major) => {
        return <option key={major} value={major}>{major}</option>
    })
    
    const handleClick = () => {
        props.applyFilterCallback(selectedMajor);
    }

    const cumulativeGPA = props.data.reduce((accumulator, current) => {
        return accumulator + current.OverallGPA;
    }, 0);

    let averageCumulativeGPA = ((cumulativeGPA / props.data.length).toFixed(2));

    const cumulativePreReqGPA = props.data.reduce((accumulator, current) => {
        if (current.preReqGPA === "Below 2.0") {
            return accumulator + 2.0;
        }
        return accumulator + Number(current.preReqGPA);
    }, 0);

    let averagePreReqGPA = ((cumulativePreReqGPA / props.data.length).toFixed(2));

    const cumulativeGPATrend = props.data.reduce((accumulator, current) => {
        return accumulator + current["What is your GPA trend?"];
    }, 0);

    let averageGPATrend = ((cumulativeGPATrend / props.data.length).toFixed(2));

    return (
        <div className="d-flex flex-column container justify-content-center pt-5">
            <div className="row justify-content-center">
                <div className="col-3">
                    <select id="majorSelect" onChange={selectMajor} className="form-select" value={selectedMajor}>
                        <option value="">Show all majors</option>
                        {optionElems}
                    </select>
                </div>
                <div className="col-auto">
                    <button onClick={handleClick} id="submitButton" type="submit" className="btn bg-info bg-opacity-50">Apply Filter</button>
                </div>
            </div>
            <div className="row justify-content-center pt-5">
                <AverageCard message={"Average GPA:"} average={averageCumulativeGPA}/>
                <AverageCard message={"Average Pre-Req GPA:"} average={averagePreReqGPA}/>
                <AverageCard message={"Average GPA Trend:"} average={averageGPATrend}/>
            </div>
            <div className="row justify-content-center">
                {/* TODO: ADD DATA VISUALIZATION */}
            </div>
        </div>
    )
}

function AverageCard(props) {
    let buttonClasses = "bg-opacity-50 d-inline border border-success-subtle rounded-3 p-1";
    if (props.average >= 3.75) {
        buttonClasses += " bg-info";
    } else if (props.average >= 3.5) {
        buttonClasses += " bg-success";
    } else {
        buttonClasses += " bg-warning";
    }

    return (
        <div className="card text-center col-auto m-1">
            <div className="card-body">
                <h5 className="card-title">{props.message}</h5>
                <p href="#" className={buttonClasses}>{props.average}</p>
            </div>
        </div>
    )
}