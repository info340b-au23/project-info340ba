import React from 'react';
import { NavLink } from 'react-router-dom'
import '../index.css';


export function NavBar(props) {
    return (
        <div className="container-fluid nav-backg">
            <div className='container'>
                <nav className='navbar-border navbar navbar-expand-lg navbar-dark'>
                    <div className='container-fluid'>
                        <NavLink className='navbar-brand' to="index">
                            PATHWISE
                        </NavLink>
                        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarToggleMenu' aria-controls='navbarToggleMenu' aria-expanded='false' aria-label='Toggle navigation'>
                            <span className='navbar-toggler-icon'></span>
                        </button>

                        <div className='collapse navbar-collapse' id='navbarToggleMenu'>
                            <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
                                <li className='navbar-item'>
                                    <NavLink className='nav-link' to='insights'>Insights</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="classes">Classes</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="crowdsource">Crowd Source</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="about">About</NavLink>
                                </li>
                            </ul>
                            <a href="https://github.com/info340b-au23/project-info340ba" target="#">
                                <img id="growingIcon" className="nav-icon p-1" src="img/github.svg" alt="github company logo"/>
                            </a>
                            <a href="https://discord.com/" target="#">
                                <img id="growingIcon" className="nav-icon p-1" src="img/discord.svg" alt="discord company logo"/>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}   