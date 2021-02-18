import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from "react-icons/fi";
import React, { useEffect } from "react";
//
import { ToastMessage, useToast } from "../../../../context/toastContext";
import * as S from "./styles";

interface ToastProps {
  toast: ToastMessage;
  style: Object;
}

const iconTypes = {
  error: <FiAlertCircle size={20} />,
  success: <FiCheckCircle size={20} />,
  info: <FiInfo size={20} />,
};

const Toast: React.FC<ToastProps> = ({ toast, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(toast.id);
    }, 3000);
    // Start a timeout but cancel it if the component unmounts first. (user closing it)
    return () => clearTimeout(timer);
  }, [toast.id, removeToast]);

  return (
    <S.Container type={toast.type} style={style}>
      {iconTypes[toast.type || "info"]}
      <div>
        <strong>{toast.title}</strong>
        {toast.message && <p>{toast.message}</p>}
      </div>
      <button type="button" onClick={() => removeToast(toast.id)}>
        <FiXCircle size={20} />
      </button>
    </S.Container>
  );
};

export default Toast;
