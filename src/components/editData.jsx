import React, { useState } from "react";
import General from './general.jsx'
import Education from './education.jsx'
import Experience from './experience.jsx'
import "../styles/editData.css";

function EditData() {
    return (

        <div className="edit-data">
            
            <form>

                <h1>CV application</h1>

                <General />
                <Education />
                <Experience />

                <br></br>
                <br></br>

                <button type="submit" className="submit">SUBMIT</button>

            </form>

        </div>

    );
  }
  
  export default EditData;
  