import "../styles/displayData.css";

function DisplayData({person}) {  
    return (

      <div className="display-data">

        <div className="page">

            <div className="header">
                <h1>{person.general.name}</h1>
                <ul>
                    <li className="left-social">{person.general.location}</li>                    
                    <li>{person.general.email}</li>
                    <li className="left-social">GitHub: {person.general.github}</li>
                    <li>Behance: {person.general.behance}</li>
                </ul>
            </div>

            <hr></hr>

            <div className="section" id="about">
                <h2>About</h2>
                <p>{person.general.about}</p>
            </div>

            <div className="section" id="education">
                <h2>Education</h2>
                <p>{person.education.startYear}-{person.education.endYear}</p>
                <h4>{person.education.school}</h4>
            </div>

            <div className="section" id="experience">
                <h2>Experience</h2>
                <p>{person.experience.startYear}-{person.experience.endYear}</p>
                <h4>{person.experience.role}, {person.experience.company}</h4>
            </div>

        </div>

      </div>

    );
}

export default DisplayData;