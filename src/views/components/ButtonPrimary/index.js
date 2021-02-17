import "./styles.scss";
import rightArrow from "../../../assets/right-arrow.png";

export default function ButtonPrimary({ title, nWidth }) {
  return (
    <button
      type="button"
      className="button-primary"
      style={nWidth && { width: nWidth, marginTop: "2.5rem" }}
    >
      {title}
      <img src={rightArrow} alt="" />
    </button>
  );
}
