import React, { useState } from "react";
import EditData from "./components/editData.jsx";
import DisplayData from "./components/displayData.jsx";
import "./App.css";

function App() {

  const initialPerson = {
    general: {
      name: "John Doe",
      location: "Croatia",
      email: "john@doe.mail",
      github: "guthib.com",
      behance: "behance.net",
      about: "Lorem ipsum dolor sit..."
    },
    education: {
      school: "Community college",
      startYear: "2016",
      endYear: "2020"
    },
    experience: {
      company: "Goooooogl",
      role: "CEO",
      startYear: "2020",
      endYear: "2022"
    }
  };

  const [person, setPerson] = useState(initialPerson);

  function handleUpdatePerson(updatedPerson) {
    setPerson(updatedPerson);
  };
  
  return (
    <div className="main-panel">

      <EditData
        initialPerson={initialPerson}
        handleUpdatePerson={handleUpdatePerson}
      />

      <DisplayData person={person} />
      
    </div>
  );
}

export default App;