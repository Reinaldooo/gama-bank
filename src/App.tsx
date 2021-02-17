import React from "react";
//
import "./styles/style.scss";
import Landing from "./views/pages/Landing";

const App: React.FC = () => {
  return (
    // This fragment will be the redux provider in the future
    <>
      <Landing />
    </>
  );
};

export default App;
