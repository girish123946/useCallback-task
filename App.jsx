import React, { useState, useCallback } from "react";
import ChildComponent from "./components/ChildComponent";
import "./App.css";

function App() {

  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("");

  const handleChildClick = useCallback(() => {
    alert("Child Button Clicked!");
  }, []);

  return (
    <div className="app-container">

      <h1 className="title">useCallback Hook Demo</h1>

      {/* Hidden Parent Logic */}
      <button
        style={{ display: "none" }}
        onClick={() => setCounter(counter + 1)}
      >
        Increase
      </button>

      <input
        style={{ display: "none" }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* Only Child Component Visible */}
      <ChildComponent onClick={handleChildClick} />

    </div>
  );
}

export default App;


