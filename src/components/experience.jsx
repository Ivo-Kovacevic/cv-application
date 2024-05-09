import React, { useState } from "react";

const initialExperience = {
  company: "Goooooogl",
  role: "CEO",
  startYear: "2020",
  endYear: "2022"
}

function Experience() {  

  const [experience, setExperience] = useState(initialExperience);

  function handleChange(fieldName, value) {
    setExperience(prevExperience => ({
      ...prevExperience,
      [fieldName]: value
    }));
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const list = Object.keys(experience).map((key) => (
    <div key={key}>
      <p>{capitalizeFirstLetter(key)}</p>
      <input
        value={experience[key]}
        onChange={(e) => {
          handleChange(key, e.target.value);
        }}
      />
    </div>
  ));

  return (
    <>

      <h2>Experience</h2>

      {list}

    </>
  );
}

export default Experience;