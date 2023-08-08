import "./MenuItem.scss";
import Button from "../../atoms/Button/Button";

const MenuItem = ({ icon, title, ratio, price }) => {
  return (
    <div className="item">
      <img src={icon} alt={icon} className="item__img" />
      <h3 className="item__title">{title}</h3>
      <p className="item__text">{ratio}</p>
      <h3 className="item__price">${price}0</h3>
      <Button text="Order Now" special="item__btn" />
    </div>
  );
};

export default MenuItem;
