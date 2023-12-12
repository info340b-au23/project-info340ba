import React from 'react';
import '../index.css';

export function Footer() {
    return (
        <div className='container-fluid footer-bg'>
            <div className="container">
                <footer className="footer">
                    <div>
                        <hr />
                        <div className="row">
                        <div className="col-lg-6">
                            <h3 className="barlow">PATHWISE</h3>
                            <p className='barlow'>
                                Our platform provides information on competitive majors at UW, aiding students in making informed decisions.
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
                                        <p className="barlow"> &copy; 2023 PATHWISE. All rights reserved.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}