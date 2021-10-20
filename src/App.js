import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.Color = "white";
      showAlert("Dark mode is enabled", "success");
      document.title = "Textutils-dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "primary");
      document.title = "Textutils-light mode";
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar
          title="Textutils"
          Abouttext="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
        {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
            <Textform
              showAlert={showAlert}
              heading="Enter the text to analyze "
              mode={mode}
              />
          {/* </Route>
        </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
