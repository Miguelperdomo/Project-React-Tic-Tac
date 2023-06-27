import { useState } from "react";

export const Form = ({ setGameStatus }) => {
  const [form, setForm] = useState({
    firstUserName: "",
    userFirstLetter: "",
    secondUserName: "",
    userSecondLetter: "",
  });

  const handleOnChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setForm((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  const handleOnChangeTwo = (event) => {
    const inputNameTwo = event.target.name;
    const inputValueTwo = event.target.value;
    setForm((prevState) => ({ ...prevState, [inputNameTwo]: inputValueTwo }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setGameStatus({ ...form });
  };

  // const handleShowValues = () => {
  //   const values = Object.values(form);
  //   console.log("Valores del formulario:", values);
  // };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstUserName">First player name:</label>
      <input
        id="firstUserName"
        name="firstUserName"
        type="text"
        maxLength={10}
        placeholder="Name"
        required
        value={form.firstUserName}
        onChange={handleOnChange}
      />
      <label>Place the only letter to play:</label>
      <input
        id="userFirstLetter"
        name="userFirstLetter"
        type="text"
        maxLength={1}
        required
        placeholder="Letter"
        value={form.userFirstLetter}
        onChange={handleOnChange}
      />
      <br></br>
      <br></br>
      <label htmlFor="secondUserName"> Second Player Name:</label>
      <input
        id="secondUserName"
        name="secondUserName"
        type="text"
        maxLength={10}
        required
        placeholder="Name"
        value={form.secondUserName}
        onChange={handleOnChangeTwo}
      />
      <label>Place the only letter to play:</label>
      <input
        id="userSecondLetter"
        name="userSecondLetter"
        type="text"
        maxLength={1}
        required
        placeholder="Letter"
        value={form.userSecondLetter}
        onChange={handleOnChangeTwo}
      />
      <br></br>
      <button className="buttonPlay">Play</button>
    </form>
  );
};
