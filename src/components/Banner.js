import React from 'react';

export function Banner() {
    return (
        <div className="container w-75 p-5 text-center">
            <div className="row-alternate">
                <h2 className="heading2-text text-center">SUPPORTED MAJORS</h2>
            </div>
            <div className="logos">
                <div className="logos-slide">
                  <img src="./img/majors/COE 1.png" alt="university of washington college of engineering logo"/>
                  <img src="./img/majors/FOSTER 1.png" alt="university of washington foster school of business logo"/>
                  <img src="./img/majors/info.png" alt="university of washington information school logo"/>
                  <img src="./img/majors/NURSE (1) 1.png" alt="university of washington school of nursing logo"/>
                </div>
                <div className="logos-slide">
                    <img src="./img/majors/COE 1.png" alt="university of washington college of engineering logo"/>
                    <img src="./img/majors/FOSTER 1.png" alt="university of washington foster school of business logo"/>
                    <img src="./img/majors/info.png" alt="university of washington information school logo"/>
                    <img src="./img/majors/NURSE (1) 1.png" alt="university of washington school of nursing logo"/>
                </div>
              </div>
        </div>
    )
}