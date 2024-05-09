import React, { useState } from "react";
import EditData from "./components/editData.jsx";
import DisplayData from "./components/displayData.jsx";
import "./App.css";

function App() {
  return (
    <div className="main-panel">

      <EditData />

      <DisplayData />
      
    </div>
  );
}

export default App;