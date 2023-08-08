import "./CardItem.scss";

const CardItem = ({ icon, title, description }) => {
  return (
    <div>
      <img src={icon} alt="" />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default CardItem;
