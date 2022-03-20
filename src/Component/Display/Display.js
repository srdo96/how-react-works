import React from "react";
import Dial from "../Dial/Dial";

const Display = (props) => {
  return (
    <div style={{ border: "2px solid green", padding: "3px", margin: "15px" }}>
      <h2>Name: {props.name}</h2>
      <p>Today stemps: {props.steps}</p>
      <Dial steps={props.steps}></Dial>
      {/* <h3>My Current Steps:{}</h3> */}
    </div>
  );
};

export default Display;
