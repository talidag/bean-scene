import "./TestimonialItem.scss";
import arrowLeft from "../../../assets/arr_left.svg";
import arrowRight from "../../../assets/arr_right.svg";

const TestimonialItem = ({ text, name, title, picture }) => {
  return (
    <div className="testimonial">
      <img src={arrowLeft} alt="" className="arr--left" />
      <p className="quotation">“</p>
      <p className="testimonial__text">{text}</p>
      <h2 className="testimonial__name">{name}</h2>
      <p className="testimonial__title">{title}</p>
      <img src={picture} alt="" className="testimonial__picture" />
      <img src={arrowRight} alt="" className="arr--right" />
    </div>
  );
};

export default TestimonialItem;
