
function Education({ initialEducation, handleUpdateEducation, capitalizeFirstLetter }) {  

  function handleChange(fieldName, value) {
    handleUpdateEducation({
      ...initialEducation,
      [fieldName]: value
    });
  }

  const list = Object.keys(initialEducation).map((key) => (
    <div key={key}>
      <p>{capitalizeFirstLetter(key)}</p>
      <input
        value={initialEducation[key]}
        onChange={(e) => {
          handleChange(key, e.target.value);
        }}
      />
    </div>
  ));

  return (
    <>

      <h2>Education</h2>

      {list}

    </>
  );
}

export default Education;