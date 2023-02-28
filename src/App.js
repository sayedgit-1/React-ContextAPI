import React, { createContext } from "react";
import ComA from "./components/ComA";

const data = createContext();
const data2 = createContext();

const App = () => {
  const name = "Arif";
  const location = "Gauhati";
  return (
    <div>
      <h1>React : Context API</h1>
      <div>
        <data.Provider value={name}>
          <data2.Provider value={location}>
            <ComA />
          </data2.Provider>
        </data.Provider>
      </div>
    </div>
  );
};

export default App;
export { data, data2 };
