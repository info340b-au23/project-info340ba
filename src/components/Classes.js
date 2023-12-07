import { React, useState } from 'react';
import { ClassCard } from './ClassCard';
import classList from '../classes.json';
export function Classes() {
    const [searchText, setSearchText] = useState("");
    
    return (
        <div>
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-8">
                        <section className="justify-content-center">
                            <section className="flex-container align-middle">
                                <h2>WHICH CLASSES SHOULD I TAKE?</h2>
                            </section>
                            <p>At the University of Washington, it is important to carefully select your classes to optimize
                                your experience and educational progress. </p>
                        </section>
                    </div>
                    <div className="col-md-4 text-right">
                        <img className="img-fluid" src="img/pathwisebook.JPG" alt="a black book with a bookmark hanging out">
                        </img>
                    </div>
                </div>
            </div>
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3>Search For a Major:</h3>
                        <input type="text" onChange={(e) => setSearchText(e.target.value)}
                            value={searchText} id="searchInput" className="form-control mb-3" placeholder="Enter a major name">
                        </input>
                        <div id="majorCards">
                        </div>
                    </div>
                </div>
            </div>
            <div className="container p-5">
                {searchText && classList.filter(({ majorName }) =>
                    majorName.toLowerCase().includes(searchText.toLowerCase()),
                )
                    .map(({ majorName, entries }) =>
                        <ClassCard majorName={majorName} entries={entries} />
                    )} 
            </div>
            <div className="container">
                <footer className="footer px-4">
                    <div>
                        <hr />
                        <div className="row">
                            <div className="white-footer col-lg-6">
                                <h3 className="barlow">PATHWISE</h3>
                                <p>
                                    Our platform provides information on competitive majors at UW, aiding students in making
                                    informed decisions.
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h3 className="barlow">RESOURCES</h3>
                                <ul className="white-footer list-unstyled">
                                    <li className="white-footer-li"><a className="white-footer-li" href="#">Documentation</a></li>
                                    <li className="white-footer-li"><a className="white-footer-li" href="#">Blog</a></li>
                                    <li className="white-footer-li"><a className="white-footer-li" href="#">Status</a></li>
                                    <li className="white-footer-li"><a className="white-footer-li" href="#">Terms of Service</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h3 className="barlow">CONTACT</h3>
                                <ul className="white-footer list-unstyled">
                                    <li className="white-footer-li"><a className="white-footer-li" href="#">Twitter</a></li>
                                    <li className="white-footer-li"><a className="white-footer-li" href="#">Careers</a></li>
                                    <li className="white-footer-li"><a className="white-footer-li" href="#">Support</a></li>
                                    <li className="white-footer-li"><a className="white-footer-li" href="#">Discord</a></li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-12">
                                <div className="panel panel-default">
                                    <div className="panel-body">
                                        <p style={{ marginBottom: "1rem" }} className="barlow">&copy; 2023 PATHWISE. All rights
                                            reserved.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>)
}