
function Education({ initialEducation, handleUpdateEducation, capitalizeFirstLetter }) {

    function handleChange(index, fieldName, value) {
      const updatedEducation = [...initialEducation];
      updatedEducation[index] = {
        ...updatedEducation[index],
        [fieldName]: value
      };
      handleUpdateEducation(updatedEducation);
    }

    function handleAddEducation(e) {
      e.preventDefault();
      const newEducation = {
        school: "School name",
        startYear: "Start year",
        endYear: "End year"
      };
      const updatedEducation = [...initialEducation, newEducation];
      handleUpdateEducation(updatedEducation);
    }

  const list = initialEducation.map((education, index) => (
    <div key={index} className="input-paragraph">
      {Object.keys(education).map((key) => (
        <div key={key}>
          <p>{capitalizeFirstLetter(key)} {key === 'school' && ` ${index + 1}`}</p>
          <input
            value={education[key]}
            onChange={(e) => {
              handleChange(index, key, e.target.value);
            }}
          />
        </div>
      ))}
      <button className="remove" type="button">REMOVE EDUCATION</button>
    </div>
  ));

  return (
    <>
      {list}
      <button className="add" type="button" onClick={handleAddEducation}>ADD EDUCATION</button>
    </>
  );
}

export default Education;
