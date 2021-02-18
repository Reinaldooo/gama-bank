import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
//
import GlobalStyles from "./styles";
import { ToastProvider } from "./context/toastContext";

const App: React.FC = () => {
  return (
    // This fragment will be the redux provider in the future
    <BrowserRouter>
      <ToastProvider>
        <Routes />
        <GlobalStyles />
      </ToastProvider>
    </BrowserRouter>
  );
};

export default App;
