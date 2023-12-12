import React, { useState } from 'react';
import _ from 'lodash';
import '../index.css';

export function TableList(props) { 
    // Filter file
    const filteredData = Object.values(props.data).filter(obj => {
        const admitted = obj["Have you been admitted to your major program?"];
        return admitted === "Yes";
    });

    // State variables  
    const [sortByCriteria, setSortByCriteria] = useState(null);
    const [isAscending, setIsAscending] = useState(null);

    // Callback function
    let handleClick = event => {
        // If current targets name is not the current sortByCriteria
        if (event.currentTarget.name !== sortByCriteria) {
            setSortByCriteria(event.currentTarget.name);
            setIsAscending(true);
        } else {
            if (isAscending === true) { // If already ascending, then reverse
                setIsAscending(false);
            } else if (isAscending === false) { // If not ascending, cease all sorting
                setSortByCriteria(null);
                setIsAscending(null);
            }
        }
    }

    // Sorts the data based on state variables
    const sortedData = _.sortBy(filteredData, sortByCriteria);
    if (sortByCriteria !== null && isAscending === false) {
        _.reverse(sortedData);
    }

    // Make array of table rows
    const tableRows = sortedData.map(obj => {
        return <TableRow alumniData={obj} key={obj.Timestamp} />
    });

    return (
        <table className="table-styling table table-hover" id='infotable'>
            <thead>
                <tr>
                    <th>
                        Major 
                        <SortButton name="What Major did you apply to?" onClick={handleClick} active={sortByCriteria === "What Major did you apply to?"} ascending={sortByCriteria === "What Major did you apply to?" && isAscending}/>
                    </th>
                    <th>
                        GPA 
                        <SortButton name="OverallGPA" onClick={handleClick} active={sortByCriteria === "OverallGPA"} ascending={sortByCriteria === "OverallGPA" && isAscending}/>
                    </th>
                    <th>Class Standing
                        <SortButton name="Class Standing" onClick={handleClick} active={sortByCriteria === "Class Standing"} ascending={sortByCriteria === "Class Standing" && isAscending}/>
                    </th>
                    <th><p className=''>Tags</p></th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    )
}

function TableRow(props) {
    const GPA = props.alumniData.OverallGPA;
    const major = props.alumniData["What Major did you apply to?"];
    const standing = props.alumniData["Class Standing"];

    return (
        <tr>
            <td>{major}</td>
            <td>{GPA}</td>
            <td>{standing}</td>
            <TagList alumniData={props.alumniData} />
        </tr>
    )
}

function SortButton(props) {
    let iconClasses = ""
    if (props.active) { iconClasses += ` active` };
    if (props.ascending) { iconClasses += ` flip` };
    if (props.name === "Tags") { iconClasses += ' white' };
    
    return (
        <button className={"btn btn-sm btn-sort"} name={props.name} onClick={props.onClick}>
            <span className={"material-icons" + iconClasses} aria-label={`sort by ${props.name}`}>sort</span>
        </button> 
    );
};

function TagList(props) {
    const tagsList = [];

    // Checks if has tags
    if (props.alumniData["Have you completed Running Start?"] === "Yes") {
        tagsList.push("Running Start");
    };
    if (props.alumniData["Have you received any academic scholarships or awards?"] === "Yes (Partial)" || props.alumniData["Have you received any academic scholarships or awards?"] === "Yes (Full)") {
        tagsList.push("Scholarship(s)");
    };
    if (props.alumniData["Are you a transfer student?"] === 'Yes') {
        tagsList.push("Transfer");
    };
    if (props.alumniData["Have you completed a related internship?"] === "Yes") {
        tagsList.push("Internship(s)")
    }
    if (props.alumniData["Have you completed related research"]["work experience?"] === "Yes" || props.alumniData["Have you completed related research"] === "Yes") {
        tagsList.push("Research");
    }

    const tags = tagsList.map(element => {
        return (
            <p key={element} className='d-inline border rounded-3 p-1 m-1 bg-opacity-25 bg-tag'>{element}</p>
        )
    })

    return (
        <td>
            <div className='flex-container'>
                <div className='d-flex flex-wrap'>
                    {tags}
                </div>
            </div>
        </td>
    );
};