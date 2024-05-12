
function General({ initialGeneral, handleUpdateGeneral, capitalizeFirstLetter}) { 

  function handleInputChange(fieldName, value) {
    handleUpdateGeneral({
      ...initialGeneral,
      [fieldName]: value
    });
  };

  const generalInputList = Object.keys(initialGeneral).map((key) => (
    <div key={key}>
      <p>{capitalizeFirstLetter(key)}</p>
      <input
        value={initialGeneral[key]}
        onChange={(e) => {
          handleInputChange(key, e.target.value);
        }}
      />
    </div>
  ));

  return (
    <>

      <h2>General</h2>

      {generalInputList}

    </>
  );
}

export default General;