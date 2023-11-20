import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

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

    const frequency = {};
    props.data.forEach(item => {
        if (item.OverallGPA !== null) {
            if (frequency[item.OverallGPA]) {
                frequency[item.OverallGPA] += 1;
            } else {
                frequency[item.OverallGPA] = 1;
            }
        }
    });

    const chartData = Object.keys(frequency).map(key => {
        return { GPA: key, Frequency: frequency[key] };
    });

    const sortedEntries = Object.entries(chartData).filter(entry => entry[1].GPA !== 'null').sort((a, b) => parseFloat(a[1].GPA) - parseFloat(b[1].GPA));

    const sortedObject = sortedEntries.map((entry) => {
        return { GPA: entry[1].GPA, Frequency: entry[1].Frequency}
    })

    let labels = [];
    sortedObject.map((entry) => {
        labels.push(entry.GPA);
    })

    let frequencies = [];
    sortedObject.map((entry) => {
        frequencies.push(entry.Frequency);
    })

    console.log(labels);

    const graphData = {
        labels,
        datasets: [
            {
            label: selectedMajor,
            data: frequencies,
            backgroundColor: 'rgba(13, 202, 240, 50)',
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
            position: 'top',
            },
            title: {
            display: true,
            text: selectedMajor,
            },
        },
    };

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
            <div className="d-flex row">
                <Bar options={options} data={graphData} width={20} height={10}/>
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

    let calculatedWidth = 0;
    let calculatedHeight = 0;

    if (props.message === "Average GPA Trend:") {
        calculatedWidth = 175;
        calculatedHeight = 87.5;
    }

    return (
        <div className="card text-center col-auto m-1">
            <div className="card-body">
                <h5 className="card-title">{props.message}</h5>
                <p href="#" className={buttonClasses}>{props.average}</p>
            </div>
            <svg width={calculatedWidth} height={calculatedHeight}>
                <line x1="0" y1={87.5 - lineEquation(0, undefined, props.average)} x2="175" y2={87.5 - lineEquation(175, undefined, props.average)} stroke="black" strokeWidth="2"/>
            </svg>
        </div>
    )
}

function lineEquation(xValue, yValue, zValue) {
    if (yValue === undefined) {
        return (((xValue - 87.5) * (zValue - 5))/(10)) + (175/4);
    } else {
        return null;
    }
}