import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <img
        src="https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        alt=""
      />
      <div>
        <h4>Hot market. Low listing fee. More money for you.</h4>
        <h6>
          Save thousands when you list with a local Redfin Agent. We’ll make
          your home shine online to attract buyers and sell for more.
        </h6>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default Main;
