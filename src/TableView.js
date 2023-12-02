'use strict';
import DATA_ENTRIES from './data.json';

export function TableList(props) {
    const tableItemArray = DATA_ENTRIES.map((dataObj) => {
        const element = <TableItem messageData={dataObj} key={dataObj.Timestamp}/>
        return element;
    })
    return(
        <div>
            {tableItemArray}
        </div>
    )
}

function TableItem(props) {
    const gpa = props.OverAllGPA;
    const major = props["What Major did you apply to?"];

    return (
        <tr>
            <td>{gpa}</td>
            <td>{major}</td>
            <td>Cycle</td>
            <td>Advice</td>
        </tr>
    )
}