import React from "react";
//
import GlobalStyles from "./styles";
import Landing from "./views/pages/Landing";
import { ToastProvider } from "./context/toastContext";

const App: React.FC = () => {
  return (
    // This fragment will be the redux provider in the future
    <ToastProvider>
      <Landing />
      <GlobalStyles />
    </ToastProvider>
  );
};

export default App;
