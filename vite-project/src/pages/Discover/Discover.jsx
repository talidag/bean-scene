import "./Discover.scss";
import Button from "../../components/atoms/Button/Button";
import cup from "../../assets/cup.svg";
import leftBlast from "../../assets/blast_left.svg";

const Discover = () => {
  return (
    <div className="discover__wrapper">
      <div className="discover">
        <h1 className="discover__heading">Discover the best coffee</h1>
        <p className="discover__text">
          Bean Scene is a coffee shop that provides you with quality coffee that
          helps boost your productivity and helps build your mood. Having a cup
          of coffee is good, but having a cup of real coffee is greater. There
          is no doubt that you will enjoy this coffee more than others you have
          ever tasted.
        </p>
        <img
          src={leftBlast}
          alt="blast of coffee"
          className="discover__blast"
        />
        <Button text={"Learn More"} className="discover__btn" />
      </div>
      <img src={cup} alt="" className="discover__img" />
    </div>
  );
};

export default Discover;
