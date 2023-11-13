import React from 'react';
import { NavLink } from 'react-router-dom'

export function NavBar() {
    return (
        <div className="container">
            <nav className="navbar-border navbar navbar-expand-lg navbar-light bg-white">
                <button className="custom-navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <NavLink className="font-weight-bold nav-link" to="index">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="font-weight-bold nav-link" to="crowdsource">Crowd Source</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="font-weight-bold nav-link" to="guides">Guides</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="font-weight-bold nav-link" to="about">About</NavLink>
                    </li>
                </ul>
                <div className="p-1">
                    <img className="nav-icon" src="img/github.svg" alt="github company logo"/>
                </div>
                <div className="p-1">
                    <a>
                        <img className="nav-icon" src="img/discord.svg" alt="discord company logo"/>
                    </a>
                </div>
                </div>
            </nav>
        </div>
    )
}   