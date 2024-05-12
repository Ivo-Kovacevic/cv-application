import General from './general.jsx'
import Education from './education.jsx'
import Experience from './experience.jsx'
import "../styles/editData.css";

function EditData({ initialPerson, handleUpdatePerson }) {

    function handleUpdateGeneral(updatedGeneral) {
        const updatedPerson = {
            ...initialPerson,
            general: { ...updatedGeneral }
        };        
        handleUpdatePerson(updatedPerson);
    };

    function handleUpdateEducation(updatedEducation) {
        const updatedPerson = {
            ...initialPerson,
            education: updatedEducation
        };
        handleUpdatePerson(updatedPerson);
    };

    function handleUpdateExperience(updatedExperience) {
        const updatedPerson = {
            ...initialPerson,
            experience: updatedExperience
        };
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
                    initialGeneral={initialPerson.general}
                    handleUpdateGeneral={handleUpdateGeneral}
                    capitalizeFirstLetter={capitalizeFirstLetter}
                />

                <h2>Education</h2>
                <Education
                    initialEducation={initialPerson.education}
                    handleUpdateEducation={handleUpdateEducation}
                    capitalizeFirstLetter={capitalizeFirstLetter}
                />

                <h2>Experience</h2>
                <Experience
                    initialExperience={initialPerson.experience}
                    handleUpdateExperience={handleUpdateExperience}
                    capitalizeFirstLetter={capitalizeFirstLetter}
                />
                
            </form>

        </div>

    );
  }
  
export default EditData;  