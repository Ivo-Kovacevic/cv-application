import React, { useState } from "react";

function General() {
    const [person, setPerson] = useState({ firstName: "John", lastName: "Doe" });

    function handleNameChange(fieldName, value) {
        setPerson(prevPerson => ({
          ...prevPerson,
          [fieldName]: value
        }));
      }
  
    return (
      <>
        <h1>First name:</h1>
        <input
            value={person.firstName}
            onChange={e => {
                handleNameChange("firstName", e.target.value);
            }}
        />

        <h1>Last name:</h1>
        <input
            value={person.lastName}
            onChange={e => {
                handleNameChange("lastName", e.target.value);
            }}
        />

        <h1>Full name: {person.firstName} {person.lastName}</h1>
      </>
    );
}

export default General;