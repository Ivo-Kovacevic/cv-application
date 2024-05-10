
function General({ initialGeneral, handleUpdateGeneral, capitalizeFirstLetter}) { 

  function handleChange(fieldName, value) {
    handleUpdateGeneral({
      ...initialGeneral,
      [fieldName]: value
    });
  };

  const list = Object.keys(initialGeneral).map((key) => (
    <div key={key}>
      <p>{capitalizeFirstLetter(key)}</p>
      <input
        value={initialGeneral[key]}
        onChange={(e) => {
          handleChange(key, e.target.value);
        }}
      />
    </div>
  ));

  return (
    <>

      <h2>General</h2>

      {list}

    </>
  );
}

export default General;