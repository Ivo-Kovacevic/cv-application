import React, { useState } from "react";
import EditData from "./components/editData.jsx";
import DisplayData from "./components/displayData.jsx";
import "./App.css";

function App() {

  const initialPerson = {
    general: {
      name: "John Doe",
      location: "Country",
      email: "Email",
      github: "guthib.com",
      behance: "behance.net",
      about: "Lorem ipsum dolor sit..."
    },
    education: [
      {
        school: "School name",
        startYear: "Start year",
        endYear: "End year"
      }
    ],
    experience: [
      {
        company: "Company name",
        role: "Role",
        startYear: "Start year",
        endYear: "End year"
      }
    ]
  };

  const [person, setPerson] = useState(initialPerson);

  function handleUpdatePerson(updatedPerson) {
    setPerson(updatedPerson);
  };
  
  return (
    <div className="main-panel">

      <EditData
        initialPerson={person}
        handleUpdatePerson={handleUpdatePerson}
      />

      <DisplayData person={person} />
      
    </div>
  );
}

export default App;