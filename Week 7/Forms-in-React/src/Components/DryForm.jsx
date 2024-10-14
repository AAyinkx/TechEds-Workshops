import { useState } from "react";

export default function DryForm() {
  const [formValues, setFormValues] = useState({
    username: "",
    colour: "",
    animal: "",
  });

  function handleFormValuesChange(event) {
    //keywords: spread operator, event object, bracket and dot object notation
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formValues);
  }

  return (
    <div id="dry">
      <h2>Dry Form (Don&apos;t Repeat Yourself)</h2>
      {/* event listener --> onSubmit */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Write your full name"
          required
          value={formValues.username}
          onChange={handleFormValuesChange}
        />

        <label htmlFor="colour">Colour</label>
        <input
          type="text"
          id="colour"
          name="colour"
          placeholder="Write your favourite colour"
          required
          value={formValues.colour}
          onChange={handleFormValuesChange}
        />
        <label htmlFor="animal">Animal</label>
        <input
          type="text"
          id="animal"
          name="animal"
          placeholder="Write your favourite animal"
          required
          value={formValues.animal}
          onChange={handleFormValuesChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
      <p>Current username: {formValues.username}</p>
      <p>Favourite colour: {formValues.colour}</p>
      <p>Favourite animal: {formValues.animal}</p>
    </div>
  );
}
