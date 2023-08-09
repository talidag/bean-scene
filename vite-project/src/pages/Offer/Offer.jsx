import "./Offer.scss";
import Button from "../../components/atoms/Button/Button";
import lidCup from "../../assets/cup_with_lid.svg";
import beanMargin from "../../assets/bean_margin.svg";
import Heading from "../../components/atoms/Heading/Heading";

const Offer = () => {
  return (
    <div className="layer">
      <div className="offer__wrapper">
        <div className="offer">
          <Heading
            text="Get a chance to have an Amazing morning"
            type="white"
          />
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
