import React from 'react';

export function HomePage() {
    return (
        // Mission Statement
        <div className="d-flex container justify-content-center">
            <div className="header-center d-flex justify-content-center align-items-center">
                <h2>OUR MISSION <img className="mission-arrow" alt="a small black arrow pointing down" src="img/downwardArrow.png"/></h2>
                <p className="w-75">We aim to make our service accessible and
                    intuitive, and use data collected exclusively from
                    departmental offices at the UW and student
                    submissions.</p>
            </div>
        </div>
    )
}