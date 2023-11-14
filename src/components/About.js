import React from 'react';
import '../index.css';

export function About() {
    return (
        <div className="container justify-content-center text-center p-5">
            <section className="header-center">
                <h2>ABOUT US!</h2>
                <p>Our team is comprised of four undergraduate students currently studying Informatics. </p>
            </section>
            <div className="container p-5">
                <div className="row drawings d-flex text-center">
                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <img src="img/simon.JPG" className="drawings" alt="simons drawing of themself" />
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <img src="img/marvin.JPG" className="drawings" alt="marvins drawing of themself" />
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <img src="img/eddie.JPG" className="drawings" alt="eddie's drawing of themself" />
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <img src="img/jesse.JPG" className="drawings" alt="jesse's drawing of themself" />
                    </div>
                </div>
            </div>
        </div>
    )
}