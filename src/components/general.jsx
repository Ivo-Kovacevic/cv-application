import React, { useState } from "react";

const initialPerson = {
  name: "John Doe",
  email: "john@doe.mail",
  phone: "1234567",
  github: "guthib.com",
  behance: "behance.net",
  about: "Lorem ipsum dolor sit..."
}

function General() { 
  
  const [person, setPerson] = useState(initialPerson);

  function handleChange(fieldName, value) {
    setPerson(prevPerson => ({
      ...prevPerson,
      [fieldName]: value
    }));
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const list = Object.keys(person).map((key) => (
    <div key={key}>
      <p>{capitalizeFirstLetter(key)}</p>
      <input
        value={person[key]}
        onChange={(e) => {
          handleChange(key, e.target.value);
        }}
      />
    </div>
  ));

  return (
    <>

      <h2>General</h2>

      {list}

    </>
  );
}

export default General;