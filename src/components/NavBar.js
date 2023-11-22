import React from 'react';
import { NavLink } from 'react-router-dom'
import '../index.css';

export function NavBar(props) {
    return (
        <div className="container">
            <nav className="navbar-border navbar navbar-expand-lg navbar-light bg-white">
                <button className="custom-navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="font-weight-bold nav-link" to="index">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="font-weight-bold nav-link" to="insights">Insights</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="font-weight-bold nav-link" to="classes">Classes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="font-weight-bold nav-link" to="crowdsource">Crowd Source</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="font-weight-bold nav-link" to="about">About</NavLink>
                        </li>
                    </ul>
                    <a href="https://discord.com/" target="#">
                        <img id="growingIcon" className="nav-icon p-1" src="img/github.svg" alt="github company logo"/>
                    </a>
                    <a href="https://discord.com/" target="#">
                        <img id="growingIcon" className="nav-icon p-1" src="img/discord.svg" alt="discord company logo"/>
                    </a>
                </div>
            </nav>
        </div>
    )
}   