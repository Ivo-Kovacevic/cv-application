import React, { useState } from "react";
import General from './general.jsx'
import Education from './education.jsx'
import Experience from './experience.jsx'
import "../styles/displayData.css";

function DisplayData() {  
    return (

      <div className="display-data">

        <div className="page">

            <div className="header">
                <h1>Ime i <b>Prezime</b></h1>
                <ul>
                    <li className="left-social">Location</li>                    
                    <li>mail@mail.mail</li>
                    <li className="left-social">GitHub: https://github.com/Ivo-Kovacevic</li>
                    <li>Behance: https://behance.net/ivokovacevic</li>
                </ul>
            </div>

            <hr></hr>

            <div className="section" id="about">
                <h2>About</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div className="section" id="education">
                <h2>Education</h2>
                <p>2016-2020</p>
                <h4>University</h4>
            </div>

            <div className="section" id="experience">
                <h2>Experience</h2>
                <p>2020-2022</p>
                <h4>Role, Company name</h4>
            </div>

        </div>

      </div>

    );
}

export default DisplayData;