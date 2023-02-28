import React from "react";
import { data, data2 } from "../App";

const Comp = () => {
  return (
    <div>
      <data.Consumer>
        {(name) => {
          return (
            <data2.Consumer>
              {(location) => {
                return (
                  <h1>
                    My name is {name} and I live in {location}
                  </h1>
                );
              }}
            </data2.Consumer>
          );
        }}
      </data.Consumer>
    </div>
  );
};

export default Comp;
