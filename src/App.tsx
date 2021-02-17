import React from "react";
//
import GlobalStyles from "./styles";
import Landing from "./views/pages/Landing";

const App: React.FC = () => {
  return (
    // This fragment will be the redux provider in the future
    <>
      <Landing />
      <GlobalStyles />
    </>
  );
};

export default App;
