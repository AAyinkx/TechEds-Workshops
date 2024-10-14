import { useState } from "react";
export default function WetForm() {
  //we can store the input data into state
  const [username, setUsername] = useState("");
  const [colour, setColour] = useState("");
  const [animal, setAnimal] = useState("");

  //we need to link each state variable with its corresponding input
  //we are going to use onChange to track the changes in the input and save them in state
  //onChange needs an event handler and an event listener

  function handleUsernameChange(event) {
    setUsername(event.target.value);
    console.log(event.target.value);
  }

  function handleColourChange(event) {
    setColour(event.target.value);
    console.log(event.target.value);
  }

  function handleAnimalChange(event) {
    setAnimal(event.target.value);
    console.log(event.target.value);
  }

  //event handler
  function handleSubmit(event) {
    event.preventDefault();
    //you will send the data to the server in here
  }
  return (
    <div id="wet">
      <h2>Wet Form (Write Everything Twice)</h2>
      {/* event listener --> onSubmit */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Write your full name"
          required
          value={username}
          onChange={handleUsernameChange}
        />
        {/* event listener --> onChange */}

        <label htmlFor="colour">Colour</label>
        <input
          type="text"
          id="colour"
          name=" colour"
          placeholder="Write your favourite colour"
          required
          value={colour}
          onChange={handleColourChange}
        />
        <label htmlFor="animal">Animal</label>
        <input
          type="text"
          id="animal"
          name="animal"
          placeholder="Write your favourite animal"
          required
          value={animal}
          onChange={handleAnimalChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
      <p>Current username: {username}</p>
      <p>Favourite colour: {colour}</p>
      <p>Favourite animal: {animal}</p>
    </div>
  );
}
