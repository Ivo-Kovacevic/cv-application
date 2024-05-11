
function Experience({ initialExperience, handleUpdateExperience, capitalizeFirstLetter }) {  

  function handleChange(index, fieldName, value) {
    const updatedExperience = [...initialExperience];
    updatedExperience[index] = {
      ...initialExperience[index],
      [fieldName]: value
    };
    handleUpdateExperience(updatedExperience);
  }

  function handleAddExperience(e) {
    e.preventDefault();
    const newExperience = {
      company: "Company name",
      role: "Role",
      startYear: "Start year",
      endYear: "End year"
    };
    const updatedExperience = [...initialExperience, newExperience];
    handleUpdateExperience(updatedExperience);
  }

  const list = initialExperience.map((experience, index) => (
    <div key={index} className="input-paragraph">
      {Object.keys(experience).map((key) => (
        <div key={key}>
          <p>{capitalizeFirstLetter(key)} {key === 'company' && ` ${index + 1}`}</p>
          <input
            value={experience[key]}
            onChange={(e) => {
              handleChange(index, key, e.target.value); // Pass both index and key to handleChange
            }}
          />
        </div>
      ))}
      <button className="remove" type="button">REMOVE EXPERIENCE</button>
    </div>
  ));

  return (
    <>

      {list}

      <button type="button" onClick={handleAddExperience}>ADD EXPERIENCE</button>

    </>
  );
}

export default Experience;