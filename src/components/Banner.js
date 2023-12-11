import React from 'react';

export function Banner() {
    return (
        <div className="container w-75 p-5 text-center">
            <div className="row-alternate">
                <h2 className="heading2-text text-center">SUPPORTED MAJORS</h2>
            </div>
            <div className="logos">
                <div className="logos-slide">
                  <img src="./img/majors/engineering.png" alt="university of washington college of engineering logo"/>
                  <img src="./img/majors/foster.png" alt="university of washington foster school of business logo"/>
                  <img src="./img/majors/informatics.png" alt="university of washington information school logo"/>
                  <img src="./img/majors/nursing.png" alt="university of washington school of nursing logo"/>
                </div>
                <div className="logos-slide">
                    <img src="./img/majors/engineering.png" alt="university of washington college of engineering logo"/>
                    <img src="./img/majors/foster.png" alt="university of washington foster school of business logo"/>
                    <img src="./img/majors/informatics.png" alt="university of washington information school logo"/>
                    <img src="./img/majors/nursing.png" alt="university of washington school of nursing logo"/>
                </div>
              </div>
        </div>
    )
}