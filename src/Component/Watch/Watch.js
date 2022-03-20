import React, { useEffect, useState } from "react";
import Display from "../Display/Display";

const Watch = () => {
  const [steps, setSteps] = useState(0);
  const countSteps = () => {
    const newSteps = steps + 1;
    setSteps(newSteps);
  };

  useEffect(() => {
    console.log(steps);
  }, [steps]);
  return (
    <div style={{ border: "2px solid red", padding: "3px", margin: "15px" }}>
      <h1>This is my watch!</h1>
      <p>My Current Steps: {steps}</p>
      <button onClick={countSteps}>Run</button>
      <Display name="Apple Watch" steps={steps}></Display>
    </div>
  );
};

export default Watch;
