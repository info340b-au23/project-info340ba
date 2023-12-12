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
                                <h1>WHICH CLASSES SHOULD I TAKE?</h1>
                            </section>
                            <p>At the University of Washington, it is important to carefully select your classes to optimize
                                your experience and educational progress. </p>
                        </section>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <img className="img-fluid img-class" src="img/success.png" alt="a guy holding a trophy">
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
        </div>)
}