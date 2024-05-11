import "../styles/displayData.css";

function DisplayData({person}) {  

    const educationList = (
        <div className="section" id="education">
            <h2>Education</h2>
            {person.education.map((education, index) => (
                <div key={index} className="paragraph">
                    <p>{education.startYear}-{education.endYear}</p>
                    <h4>{education.school}</h4>
                </div>
            ))}
        </div>
    );

    const experienceList = (
        <div className="section" id="experience">
            <h2>Experience</h2>
            {person.experience.map((experience, index) => (
                <div key={index} className="paragraph">
                    <p>{experience.startYear}-{experience.endYear}</p>
                    <h4>{experience.role}, {experience.company}</h4>
                </div>
            ))}
        </div>
    );

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

            {educationList}

            {experienceList}

        </div>

      </div>

    );
}

export default DisplayData;