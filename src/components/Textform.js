import React, { useState } from "react";

export default function Textform(props) {
  const handleupclick = () => {
    console.log("uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("text converted to uppercasecase", "success");
  };
  const handleloclick = () => {
    console.log("lowercase was clicked" + text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("text converted to lowercase", "success");
  };
  const handleclearclick = () => {
    console.log("lowercase was clicked" + text);
    let newtext = "";
    setText(newtext);
    props.showAlert("text cleared", "success");
  };
  const handleonChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ Color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className=" container my-3">
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            value={text}
            onChange={handleonChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn-primary mx-1" onClick={handleupclick}>
          convert to uppercase
        </button>
        <button className="btn-primary mx-2" onClick={handleloclick}>
          convert to lowercase
        </button>
        <button className="btn-primary" onClick={handleclearclick}>
          clear text
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
