import React, { useState } from 'react';
import { Bar, Pie} from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Colors } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Colors);

let calculatedWidth = 0;
let calculatedHeight = 0;

export function Insights(props) {
    const [ selectedMajor, setSelectedMajor ] = useState('');

    let filteredData = props.data.filter(current => {
        return 'OverallGPA' in current && 
            current.OverallGPA !== undefined && 
            current.OverallGPA !== null &&
            'preReqGPA' in current &&
            current.preReqGPA !== undefined &&
            current.preReqGPA !== null &&
            !isNaN(current.preReqGPA);
    });

    console.log(filteredData);

    filteredData = filteredData.map((entry) => {
        if (entry.hasOwnProperty('OverallGPA') && typeof entry.OverallGPA === 'string') {
            entry.OverallGPA = parseFloat(entry.OverallGPA);
        }
        if (entry.hasOwnProperty('preReqGPA') && typeof entry.preReqGPA === 'string') {
            entry.preReqGPA = parseFloat(entry.preReqGPA);
        }
        return entry;
    });

    const selectMajor = (event) => {
        setSelectedMajor(event.target.value);
    }

    const optionElems = props.majorOptions.map((major) => {
        return <option key={major} value={major}>{major}</option>
    })

    Chart.defaults.font.size = 14;
    
    const handleClick = () => {
        props.applyFilterCallback(selectedMajor);
    }

    const cumulativeGPA = filteredData.reduce((accumulator, current) => {
        return accumulator + current.OverallGPA;
    }, 0);

    let averageCumulativeGPA = ((cumulativeGPA / filteredData.length).toFixed(2));

    const cumulativePreReqGPA = filteredData.reduce((accumulator, current) => {
        if (current.preReqGPA === "Below 2.0") {
            return accumulator + 2.0;
        }
        return accumulator + Number(current.preReqGPA);
    }, 0);

    let averagePreReqGPA = ((cumulativePreReqGPA / filteredData.length).toFixed(2));

    const cumulativeGPATrend = filteredData.reduce((accumulator, current) => {
        if (current["What is your GPA trend?"] !== null) {
            return accumulator + current["What is your GPA trend?"];
        } else {
            return accumulator;
        }
    }, 0);

    let averageGPATrend = ((cumulativeGPATrend / filteredData.length).toFixed(2));

    return (
        <div className="d-flex flex-column container justify-content-center pt-5">
            <div className="row justify-content-center">
                <div className="col-auto">
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
                <AverageCard message={"Average Overall GPA:"} average={averageCumulativeGPA} yourAverage={3.87}/>
                <AverageCard message={"Average Pre-Req GPA:"} average={averagePreReqGPA} yourAverage={3.55}/>
                <AverageCard message={"Average GPA Trend:"} average={averageGPATrend} yourAverage={null}/>
            </div>
            <div className="d-flex flex-column justify-content-center text-center p-5">
                <div>
                    <BarChart data={filteredData} selectedMajor={selectedMajor} field={"OverallGPA"} title={"Overall GPA Distribution Among Applicants"}/>
                </div>
                <div>
                    <BarChart data={filteredData} selectedMajor={selectedMajor} field={"preReqGPA"} title={"Overall preReq-GPA Distribution Among Applicants"}/>
                </div>
            </div>
            <div className="row justify-content-center">
                <PieChartCard data={filteredData} selectedMajor={selectedMajor} field={"How many transfer credits do you have? (if applicable)"} title={"Transfer Credits Amongst Applicants"}/>
                <PieChartCard data={filteredData} selectedMajor={selectedMajor} field={"Class Standing"} title={"Class Standing"}/>
                <PieChartCard data={filteredData} selectedMajor={selectedMajor} field={"Have you received any academic scholarships or awards?"} title={"Students on Scholarship"}/>
            </div>
        </div>
    )
}

function AverageCard(props) {
    let buttonClasses = "d-inline border border-success-subtle rounded-3 p-1";
    if (props.average >= 3.75) {
        buttonClasses += " bg-goodGrades";
    } else if (props.average >= 3.5) {
        buttonClasses += " bg-passingGrades";
    } else {
        buttonClasses += " bg-failingGrades";
    }

    let graph;

    if (props.message === "Average GPA Trend:") {
        calculatedWidth = 285;
        calculatedHeight = calculatedWidth / 2;
        graph =
            <svg width={calculatedWidth} height={calculatedHeight}>
                <line x1="0" y1={calculatedHeight - lineEquation(0, undefined, props.average)} x2={calculatedWidth} y2={calculatedHeight - lineEquation(calculatedWidth, undefined, props.average)} stroke="black" strokeWidth="2"/>
            </svg>
    }

    let content;

    if (props.yourAverage !== null) {
        content = 
            <div className="card-body">
                <h5 className="card-title">{"Your " + props.message}</h5>
                <p href="#" className={buttonClasses}>{props.yourAverage}</p>
            </div>
    }

    return (
        <div className="card text-center col-auto m-1 text-center" style={{width: "22rem"}}>
            <div className="card-body">
                <h5 className="card-title">{props.message}</h5>
                <p href="#" className={buttonClasses}>{props.average}</p>
            </div>
            {content}
            {graph}
        </div>
    )
}

function lineEquation(xValue, yValue, zValue) {
    if (yValue === undefined) {
        return (((xValue - calculatedHeight) * (zValue - 5))/(10)) + (calculatedWidth/4);
    } else {
        return null;
    }
}

function BarChart(props) {
    const frequenciesByField = {};
    props.data.forEach(item => {
        if (item[props.field] !== null) {
            if (frequenciesByField[item[props.field]]) {
                frequenciesByField[item[props.field]] += 1;
            } else {
                frequenciesByField[item[props.field]] = 1;
            }
        }
    });

    const frequenciesMappedByKey = Object.keys(frequenciesByField).map(key => {
        return { Field: key, Frequency: frequenciesByField[key] };
    });

    const sortedEntries = Object.entries(frequenciesMappedByKey).filter(entry => entry[1].Field !== 'null' && entry[1].Field !== '' && entry[1].Field !== "Below 2.0").sort((a, b) => parseFloat(a[1].Field) - parseFloat(b[1].Field));

    const sortedObject = sortedEntries.map((entry) => {
        return { Field: entry[1].Field, Frequency: entry[1].Frequency}
    })

    let labels = [];
    let frequencies = [];
    sortedObject.forEach(entry => {
        labels.push(entry.Field);
        frequencies.push(entry.Frequency);
    })

    const graphData = {
        labels,
        datasets: [
            {
            label: props.selectedMajor,
            data: frequencies,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
                position: 'top',
            },
            title: {
            display: true,
            text: props.title,
            },
        },
    };

    return (
        <Bar options={options} height={"200%"} data={graphData} />
    )
}

function PieChartCard(props) {
    const frequenciesByField = {};
    props.data.forEach(item => {
        if (item[props.field] !== null && item[props.field] !== "") {
            if (frequenciesByField[item[props.field]]) {
                frequenciesByField[item[props.field]] += 1;
            } else {
                frequenciesByField[item[props.field]] = 1;
            }
        }
    });

    const frequenciesMappedByKey = Object.keys(frequenciesByField).map(key => {
        return { Field: key, Frequency: frequenciesByField[key] };
    });

    let labels = [];
    let frequencies = [];
    // let randColors = []; -> for random colors (if needed!)
    frequenciesMappedByKey.forEach(entry => {
        labels.push(entry.Field);
        frequencies.push(entry.Frequency);
        // randColors.push(`rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`);
    })

    const graphData = {
        labels,
        datasets: [
            {
            label: 'Number of Students' + props.selectedMajor,
            data: frequencies, // removing randColors here makes the default palette appear
            },
        ],
    }

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
            position: 'top',
            },
            title: {
            display: true,
            text: props.title,
            },
        },
    };
    
    return (
        <div className="card text-center col-auto m-1 text-center" style={{width: "22rem", height: "22rem"}}>
            <div className="card-body">
                <Pie options={options} data={graphData} />
            </div>
        </div>
    )
}