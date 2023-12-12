import React from 'react';
import '../index.css';
import {TableList} from './TableView';

export function HomePage(props) {
    return (
        <div>
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-8"> 
                        <section className="justify-content-center">
                            <section className="d-flex align-middle p-2">
                                <img src="img/mountainlogo.png" alt="pathwise icon" className="img-fluid img-logo" />
                                <h1>PATHWISE</h1>
                            </section>
                            <p>Our platform is a groundbreaking project that provides transparent and comprehensive
                            information on competitive majors at the University of Washington (UW), empowering
                            students to make informed decisions amidst limited spots and intense competition.</p>
                        </section>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <img className='img-fluid img-home' src="img/home.png" alt="a girl flying on a lightbulb" />
                    </div>
                </div>
            </div>
            <div className="d-flex container justify-content-center">
                <div className="header-center d-flex justify-content-center align-items-center">
                    <h2>OUR MISSION <img className="mission-arrow" alt="a small black arrow pointing down" src="img/downwardArrow.png"/></h2>
                    <p className="w-75">We aim to make our service accessible and
                        intuitive, and use data collected exclusively from
                        departmental offices at the UW and student
                        submissions.</p>
                </div>
            </div>
            <div className="container p-5 d-flex justify-content-center">
                <div>
                    <p>Recent Submissions: </p>
                    <TableList data={props.data}/>
                </div>
            </div>
        </div>
    )
}