import React from 'react';
import '../index.css';

export function About() {
    return (
        <div className="container justify-content-center text-center p-5">
            <section className="header-center">
                <h2>ABOUT US!</h2>
                <p>Our team is comprised of four undergraduate students currently studying Informatics. </p>
            </section>
            <div className="container">
                <div className="row m-2"> 
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="card card-hover text-center" style={{width: '100%', marginTop: "1rem"}}>
                            <img className="m-4" alt="Simon Kurgan making a peace sign gesture with his hands" src="img/faces/simon.JPG" style={{borderRadius: '50%'}}/> 
                            <div className="card-body">
                                <h3>Simon Kurgan</h3>
                                <p>Project Manager & Developer</p>
                                <p className="card-quote">
                                    I managed the project, created all of our Figma designs, built out the backend, developed this page and the Insights page, and contributed significantly on all pages of the website. 
                                </p>
                                <p>See my design work here:</p>
                                <a href="https://www.linkedin.com/in/simon-kurgan/" target="#">
                                    <img id="growingIcon" className="p-1" src="img/Linkedin.png" alt="linkedin company logo" style={{width: '20%'}}/>
                                </a>
                                <a href="https://www.figma.com/file/H9JCjHrL07MunCBrB7ovA0/PATHWISE-webpage?type=design&node-id=438%3A238&mode=design&t=1GwDq48mND3P7LsM-1" target="#">
                                    <img id="growingIcon" className="p-1" src="img/figma.png" alt="figma company logo" style={{width: '15%'}}></img>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="card card-hover text-center" style={{width: '100%', marginTop: "1rem"}}>
                            <img className="m-4" alt="Marvin tran in a mushroom cap" src="img/faces/marvin.JPG" style={{borderRadius: '50%'}}/> 
                            <div className="card-body">
                                <h3>Marvin Tran</h3>
                                <p>Developer</p>
                                <img id="growingIcon" className="p-1" src="img/Linkedin.png" alt="linkedin company logo" style={{width: '20%'}}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="card card-hover text-center" style={{width: '100%', marginTop: "1rem"}}>
                            <img className="m-4" alt="Businessman Eddie B" src="img/faces/eddie.JPG" style={{borderRadius: '50%'}}/> 
                            <div className="card-body">
                                <h3>Eddie B.</h3>
                                <p>Developer</p>
                                <img id="growingIcon" className="p-1" src="img/Linkedin.png" alt="linkedin company logo" style={{width: '20%'}}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="card card-hover text-center" style={{width: '100%', marginTop: "1rem"}}>
                            <img className="m-4" alt="Jessie Kim seen at disneyland" src="img/faces/jessie.JPG" style={{borderRadius: '50%'}}/> 
                            <div className="card-body">
                                <h3>Jessie Kim</h3>
                                <p>Developer</p>
                                <img id="growingIcon" className="p-1" src="img/Linkedin.png" alt="linkedin company logo" style={{width: '20%'}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}