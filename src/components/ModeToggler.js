import React, { useState } from "react";
import ReactPlayer from "react-player";
export default function ModeToggler() {
  let darkModeOn = false;
  const darkMode = <h1>Dark Mode On</h1>;
  const lightMode = <h1>Light Mode On</h1>;
  const oya = (
    <h3>
      I did this by using React state and the onReady prop. in React
      video...Once the video loads, this prompt comes up and once you click
      anywhere on this page, it would clear this message as it would return back
      to the default state.
    </h3>
  );

  const [alertMessage, setAlertMessage] = useState("");

  const showAlert = (message) => {
    setAlertMessage(message);
  };
  function handler() {
    darkModeOn = !darkModeOn;
    if (darkModeOn === true) {
      return darkMode;
    } else if (darkModeOn === false) {
      return lightMode;
    }
  }

  return (
    <div className="alert" onClick={() => setAlertMessage("")}>
      {alertMessage}
      <button onClick={handler}> Click </button>
      <ReactPlayer
        controls
        muted={true}
        pip={true}
        playing={true}
        volume={0.9}
        onReady={() => showAlert(oya)}
        url="https://www.youtube.com/watch?v=O6P86uwfdR0&list=RDCMUCFbNIlppjAuEX4znoulh0Cw&start_radio=1&t=172s&ab_channel=WebDevSimplified"
      />
    </div>
  );
}
