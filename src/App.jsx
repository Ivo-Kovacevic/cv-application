import { useState } from 'react'
import General from './components/General.jsx'
import Education from './components/education.jsx'
import Experience from './components/experience.jsx'
import DisplayData from './components/displayData.jsx'
import './styles/App.css'

function App() {

  return (
    <>

      <div className='editData'>

        <General />
        <Education />
        <Experience />

      </div>

      <DisplayData />

    </>
  )
}

export default App