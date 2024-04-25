import React, { useState } from "react";
import ReactPlayer from "react-player";
export default function ModeToggler() {
  let darkModeOn = true;
  const darkMode = <h1>Dark Mode On</h1>;
  const lightMode = <h1>Light Mode On</h1>;
  const oya = (
    <h3>
      I did this by using React state and the onReady prop. in React
      video...Once the video loads, this prompt comes up and once you click
      anywhere on this div, it would clear as it would return back to the
      default state.
    </h3>
  );

  const [alertMessage, setAlertMessage] = useState("");

  const showAlert = (message) => {
    setAlertMessage(message);
  };
  function handler() {
    if (darkModeOn === true) {
      return darkMode;
    } else if (darkModeOn === false) {
      return lightMode;
    }
  }

  return (
    <div>
      <div className="alert" onClick={() => setAlertMessage("")}>
        {alertMessage}
      </div>
      {darkModeOn ? darkMode : lightMode}
      <button onClick={handler}> Click Me to change display mode.</button>
      <ReactPlayer
        controls
        muted={true}
        pip={true}
        onReady={() => showAlert(oya)}
        url="https://www.youtube.com/watch?v=O6P86uwfdR0&list=RDCMUCFbNIlppjAuEX4znoulh0Cw&start_radio=1&t=172s&ab_channel=WebDevSimplified"
      />
    </div>
  );
}
