import React, { useState } from "react";

const initialEducation = {
  school: "Community college",
  startYear: "2016",
  endYear: "2020"
}

function Education() {  

  const [education, setEducation] = useState(initialEducation);

  function handleChange(fieldName, value) {
    setEducation(prevEducation => ({
      ...prevEducation,
      [fieldName]: value
    }));
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const list = Object.keys(education).map((key) => (
    <div key={key}>
      <p>{capitalizeFirstLetter(key)}</p>
      <input
        value={education[key]}
        onChange={(e) => {
          handleChange(key, e.target.value);
        }}
      />
    </div>
  ));

  return (
    <>

      <h2>Education</h2>

      {list}

    </>
  );
}

export default Education;