import React from 'react';
import '../index.css';

export function HomePage() {
    return (
        <div>
            <div class="container p-5">
                <div class="row">
                    <div class="col-md-8"> 
                    <section class="justify-content-center">
                        <section class="d-flex align-middle">
                            <h1>PATHWISE</h1>
                            <img src="img/path.JPG" alt="pathwise icon" class="img-fluid" />
                        </section>
                        <p>Our platform is a groundbreaking project that provides transparent and comprehensive
                            information on competitive majors at the University of Washington (UW), empowering
                            students to make informed decisions amidst limited spots and intense competition.</p>
                    </section>
                </div>
                    <div class="col-md-4 d-flex justify-content-end">
                        <img class="img-fluid" src="img/pathwisebook.JPG" alt="a black book with a bookmark hanging out" />
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
        </div>
    )
}