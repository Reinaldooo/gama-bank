import React, { createContext, useContext, useState, useCallback } from "react";
import shortid from "shortid";
//
import ToastContainer from "../views/components/ToastContainer";

export interface ToastMessage {
  id: string;
  // "info" is the default type
  type?: "success" | "error";
  title: string;
  message?: string;
}

interface ToastContextData {
  addToast(message: Omit<ToastMessage, "id">): void;
  removeToast(id: string): void;
  toasts: ToastMessage[];
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const addToast = useCallback(
    ({ title, type, message }: Omit<ToastMessage, "id">) => {
      const id = shortid();
      const toast = {
        id,
        title,
        message,
        type,
      };
      setToasts((oldState) => [...oldState, toast]);
    },
    []
  );
  // This one should be memoized since it is an dependency on "Toast" useEffect
  const removeToast = useCallback((id: string) => {
    setToasts((oldState) => oldState.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast, toasts }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  return useContext(ToastContext);
}

export { useToast, ToastProvider };
