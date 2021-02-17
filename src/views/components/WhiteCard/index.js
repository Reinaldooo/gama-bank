import "./styles.scss";

export default function WhiteCard({ title, children }) {
  return (
    <div className="white-card" style={{ width: "100%" }}>
      <h4>{title}</h4>
      {children}
    </div>
  );
}
