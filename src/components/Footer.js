import React from 'react';
import '../index.css';

export function Footer() {
    return (
        <div className='container-fluid footer-bg'>
            <div className="container">
                <footer className="footer">
                    <hr/>
                    <div className="d-flex justify-content-between">
                        <p className="barlow"> &copy; 2023 PATHWISE. All rights reserved.</p>
                        <p className="barlow">Created in INFO340</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}