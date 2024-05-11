import { useState } from "react";
import General from './general.jsx'
import Education from './education.jsx'
import Experience from './experience.jsx'
import "../styles/editData.css";

function EditData({ initialPerson, handleUpdatePerson }) {

    const [person, setPerson] = useState(initialPerson);

    function handleUpdateGeneral(updatedGeneral) {
        const updatedPerson = {
            ...person,
            general: {...updatedGeneral }
        };
        setPerson(updatedPerson);
        handleUpdatePerson(updatedPerson);
    };

    function handleUpdateEducation(updatedEducation) {
        const updatedPerson = {
            ...person,
            education: updatedEducation
        };
        setPerson(updatedPerson);
        handleUpdatePerson(updatedPerson);
    };

    function handleUpdateExperience(updatedExperience) {
        const updatedPerson = {
            ...person,
            experience: updatedExperience
        };
        setPerson(updatedPerson);
        handleUpdatePerson(updatedPerson);
    };


    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    return (

        <div className="edit-data">
            
            <form>

                <h1>CV application</h1>

                <General
                    initialGeneral={person.general}
                    handleUpdateGeneral={handleUpdateGeneral}
                    capitalizeFirstLetter={capitalizeFirstLetter}
                />

                <h2>Education</h2>
                <Education
                    initialEducation={person.education}
                    handleUpdateEducation={handleUpdateEducation}
                    capitalizeFirstLetter={capitalizeFirstLetter}
                />

                <h2>Experience</h2>
                <Experience
                    initialExperience={person.experience}
                    handleUpdateExperience={handleUpdateExperience}
                    capitalizeFirstLetter={capitalizeFirstLetter}
                />
                
            </form>

        </div>

    );
  }
  
  export default EditData;
  