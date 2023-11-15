'use strict';
import DATA_ENTRIES from '../data.json';

export function TableList(props) {
    // Make array of table rows
    const tableRows = DATA_ENTRIES.map(obj => {
        return <TableRow alumniData={obj} key={obj.Timestamp} />
    })

    return (
        <div className="container p-5 d-flex justify-content-center">
            <div>
                <table className="table-styling table table-hover">
                    <thead>
                        <tr>
                            <th>Major</th>
                            <th>
                                GPA <img class="descending-sort-triangle" alt="a small black triangle implying downward sorting" src="img/triangleSort.png"/>
                            </th>
                            <th>Cycle</th>
                            <th>Advice</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function TableRow(props) {
    const GPA = props.alumniData.OverallGPA;
    const major = props.alumniData["What Major did you apply to?"];

    return (
        <tr>
            <td>{GPA}</td>
            <td>{major}</td>
            <td>TBA</td>
            <td>TBA</td>
        </tr>
    )
}