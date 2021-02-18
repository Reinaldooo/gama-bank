import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
//
import GlobalStyles from "./styles";
import { ToastProvider } from "./context/toastContext";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ToastProvider>
        <Routes />
        <GlobalStyles />
      </ToastProvider>
    </BrowserRouter>
  );
};

export default App;
