import React from "react";
import { useTransition } from "react-spring";
//
import { useToast } from "../../../context/toastContext";
import Toast from "./Toast";

import * as S from "./styles";

const ToastContainer: React.FC = () => {
  const { toasts } = useToast();
  const toastsWithTransiction = useTransition(
    // Items, key extractor and animation
    // Should remember to use "animated" div on toasts
    toasts,
    (toast) => toast.id,
    {
      from: { right: "-120%", opacity: 0 },
      enter: { right: "0%", opacity: 1 },
      leave: { right: "-120%", opacity: 0 },
    }
  );
  return (
    <S.Container>
      {/* toastsWithTransiction will have this properties, where "props" are the styles */}
      {toastsWithTransiction.map(({ key, item, props }) => (
        <Toast key={key} toast={item} style={props} />
      ))}
    </S.Container>
  );
};

export default ToastContainer;
