import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { Provider } from "react-redux";
//
import GlobalStyles from "./styles";
import { ToastProvider } from "./context/toastContext";
import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastProvider>
          <Routes />
          <GlobalStyles />
        </ToastProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
