import "./Card.scss"
import usePrevNavigate from "../../hooks/usePrevNavigate";

function Card() {
  const navigate = usePrevNavigate()
  return (
    <div className="card"
      onClick={() => navigate("/image")}
    >
        <div className="card__photo">
            <img src="R.jpg" />
        </div>
        <div className="card__title">
            Lego
        </div>
    </div>
  );
}

export default Card;
