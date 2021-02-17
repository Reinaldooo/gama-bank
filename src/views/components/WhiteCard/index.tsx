import React from "react";
//
import "./styles.scss";

interface WhiteCardProps {
  title: string;
}

const WhiteCard: React.FC<WhiteCardProps> = ({ title, children }) => {
  return (
    <div className="white-card" style={{ width: "100%" }}>
      <h4>{title}</h4>
      {children}
    </div>
  );
};

export default WhiteCard;
