import "./App.css";
import Heading from "./components/Header";

function App() {
  return (
    <div className="App" onClick={() => setAlertMessage("")}>
      <Heading />
    </div>
  );
}

export default App;
