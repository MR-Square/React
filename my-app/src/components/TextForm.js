import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter your text here.");
  // text is a state(variable). we can update value of text varible through setText function.
  // 'Enter your text here.' is default value of text variable.
  // text = "wrong way to update the value of text variable"
  // setText("right way to update the value of text variable");

  const handleUpClick = () => {
    // console.log("upper case is clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("on changed");
    setText(event.target.value);
  };

  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          rows="3"
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Uppercase
      </button>
    </>
  );
}
