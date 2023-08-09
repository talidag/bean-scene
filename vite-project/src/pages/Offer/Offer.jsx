import "./Offer.scss";
import Button from "../../components/atoms/Button/Button";
import lidCup from "../../assets/cup_with_lid.svg";
import beanMargin from "../../assets/bean_margin.svg";

const Offer = () => {
  return (
    <div className="layer">
      <div className="offer__wrapper">
        <div className="offer">
          <h2 className="offer__title">
            Get a chance to have an Amazing morning
          </h2>
          <p className="offer__text">
            We are giving you are one time opportunity to experience a better
            life with coffee.
          </p>
          <Button text="Order Now" />
          <img src={beanMargin} alt="" className="offer__margin" />
        </div>
        <img src={lidCup} alt="" className="offer__img" />
      </div>
    </div>
  );
};

export default Offer;
