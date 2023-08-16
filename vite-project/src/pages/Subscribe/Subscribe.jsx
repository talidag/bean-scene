import "./Subscribe.scss";
import Heading from "../../components/atoms/Heading/Heading";
import Paragraph from "../../components/atoms/Paragraph/Paragraph";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="subscribe__wrapper">
        <Heading text="Subscribe to get the Latest News" type="white" />
        <Paragraph
          text="Don’t miss out on our latest news, updates, tips and special offers"
          type="white"
        />
        <div className="subscribe__input__div">
          <input
            className="subscribe__input"
            placeholder="Enter your mail"
          ></input>
          <button className="subscribe__btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
