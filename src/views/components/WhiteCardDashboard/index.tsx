import React from "react";
import {WhiteCardDashboard} from "./styles";

interface WhiteCardDashProps {
    _maxWidth?: string;
    _Height?: string;
}


const WhiteCardDash: React.FC<WhiteCardDashProps> = ({children, _maxWidth, _Height}) => {
  return (
    <WhiteCardDashboard _maxWidth={_maxWidth} _Height={_Height}>
      {children}
    </WhiteCardDashboard>
  );
};

export default WhiteCardDash;
