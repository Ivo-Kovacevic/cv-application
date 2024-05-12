
function Education({ initialEducation, handleUpdateEducation, capitalizeFirstLetter }) {

  function handleInputChange(index, fieldName, value) {
    const updatedEducation = [...initialEducation];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [fieldName]: value
    };
    handleUpdateEducation(updatedEducation);
  }

  function handleAddEducation() {
    const newEducation = {
      school: "School name",
      startYear: "Start year",
      endYear: "End year"
    };
    const updatedEducation = [...initialEducation, newEducation];
    handleUpdateEducation(updatedEducation);
  }

  function handleRemoveEducation(index) {
    const updatedEducation = [...initialEducation];
    updatedEducation.splice(index, 1);
    handleUpdateEducation(updatedEducation);
  }

  const educationInputList = initialEducation.map((education, index) => (
    <div key={index} className="input-paragraph">
      {Object.keys(education).map((key) => (
        <div key={key}>
          <p>{capitalizeFirstLetter(key)} {key === 'school' && ` ${index + 1}`}</p>
          <input
            value={education[key]}
            onChange={(e) => {
              handleInputChange(index, key, e.target.value);
            }}
          />
        </div>
      ))}
      <button className="remove" type="button" onClick={handleRemoveEducation}>REMOVE EDUCATION {index + 1}</button>
    </div>
  ));

  return (
    <>

      {educationInputList}
      
      <button className="add" type="button" onClick={handleAddEducation}>ADD EDUCATION</button>
    </>
  );
}

export default Education;