import { Link } from "react-router-dom";
import "./CardRange.css";

const CardRange = ({ image, name }) => {
  return (
    <div className="range-card">
      <div className="image-container">
        <img src={image} />
      </div>
      <Link to={`/product/${name}`}>
        <p>{name}</p>
      </Link>
    </div>
  );
};

export default CardRange;
