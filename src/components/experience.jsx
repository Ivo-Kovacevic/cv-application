
function Experience({ initialExperience, handleUpdateExperience, capitalizeFirstLetter }) {  

  function handleChange(fieldName, value) {
    handleUpdateExperience({
      ...initialExperience,
      [fieldName]: value
    });
  }

  const list = Object.keys(initialExperience).map((key) => (
    <div key={key}>
      <p>{capitalizeFirstLetter(key)}</p>
      <input
        value={initialExperience[key]}
        onChange={(e) => {
          handleChange(key, e.target.value);
        }}
      />
    </div>
  ));

  return (
    <>

      <h2>Experience</h2>

      {list}

    </>
  );
}

export default Experience;