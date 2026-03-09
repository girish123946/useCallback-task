import React from "react";

const ChildComponent = React.memo(({ onClick }) => {

  console.log("Child Component Rendered");

  return (
    <div className="child-card">

      <h2>Child Component</h2>

      <button className="btn" onClick={onClick}>
        Child Button
      </button>

    </div>
  );

});

export default ChildComponent;