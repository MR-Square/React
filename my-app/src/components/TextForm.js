import React,{useState} from "react";


// text is a variable. we can update value of text varible through setText function.
// 'Enter your text here.' is default value of text variable.

export default function TextForm(props) {
  const [text,setText] = useState('Enter your text here.')
  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      </div>
      <div className="mb-3">
        <label for="myBox" className="form-label">
          Input Text:
        </label>
        <textarea className="form-control" id="myBox" rows="3"></textarea>
      </div>
    </>
  );
}
