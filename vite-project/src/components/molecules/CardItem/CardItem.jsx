import "./CardItem.scss";

const CardItem = ({ icon, title, description }) => {
  return (
    <div className="card">
      <img src={icon} alt="" className="card__img" />
      <h1 className="card__title">{title}</h1>
      <p className="card__text">{description}</p>
    </div>
  );
};

export default CardItem;
