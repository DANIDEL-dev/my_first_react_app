import React, { useState } from "react";
import ReactPlayer from "react-player";
export default function ModeToggler() {
  let darkModeOn = true;
  const darkMode = <h1>Dark Mode On</h1>;
  const lightMode = <h1>Light Mode On</h1>;
  const oya = <h3>Your media don load ohh (: </h3>;

  const [alertMessage, setAlertMessage] = useState(null);

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
    <div>
      <div>
        {alertMessage && (
          <div className="alert" onClick={() => setAlertMessage(null)}>
            {alertMessage}
          </div>
        )}
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
