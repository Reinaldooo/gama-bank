import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes"
//
import GlobalStyles from "./styles";

const App: React.FC = () => {
  return (
    // This fragment will be the redux provider in the future
    <>
      <BrowserRouter>
          <Routes/>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
};

export default App;
