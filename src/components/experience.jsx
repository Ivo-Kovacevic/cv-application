
function Experience({ initialExperience, handleUpdateExperience, capitalizeFirstLetter }) {  

  function handleInputChange(index, fieldName, value) {
    const updatedExperience = [...initialExperience];
    updatedExperience[index] = {
      ...initialExperience[index],
      [fieldName]: value
    };
    handleUpdateExperience(updatedExperience);
  }

  function handleAddExperience() {
    const newExperience = {
      company: "Company name",
      role: "Role",
      startYear: "Start year",
      endYear: "End year"
    };
    const updatedExperience = [...initialExperience, newExperience];
    handleUpdateExperience(updatedExperience);
  }

  function handleRemoveExperience(index) {
    const updatedExperience = [...initialExperience];
    updatedExperience.splice(index, 1);
    handleUpdateExperience(updatedExperience);
  }

  const experienceInputList = initialExperience.map((experience, index) => (
    <div key={index} className="input-paragraph">
      {Object.keys(experience).map((key) => (
        <div key={key}>
          <p>{capitalizeFirstLetter(key)} {key === 'company' && ` ${index + 1}`}</p>
          <input
            value={experience[key]}
            onChange={(e) => {
              handleInputChange(index, key, e.target.value);
            }}
          />
        </div>
      ))}
      <button className="remove" type="button" onClick={handleRemoveExperience}>REMOVE EXPERIENCE {index + 1}</button>
    </div>
  ));

  return (
    <>

      {experienceInputList}

      <button type="button" onClick={handleAddExperience}>ADD EXPERIENCE</button>

    </>
  );
}

export default Experience;