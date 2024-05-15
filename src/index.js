import React from "react";
import ReactDOM from "react-dom/client";
import { UserContext, ThemeContext } from "./05_useContext的使用/context";
// import App from "./01_不使用hook/App";
// import App from "./02_计数器实现对比/App";
// import App from "./03_useState的使用/App";
// import App from "./04_useEffect的使用/App";
// import App from "./05_useContext的使用/App";
import App from "./06_useReducer的使用(了解)/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContext.Provider value={{name: "why",level: 99}}>
    <ThemeContext.Provider value={{color: "red", size: 30}}>
      <App />
    </ThemeContext.Provider>
  </UserContext.Provider>
);
