import React from "react";

const TestimonialItem = ({ text, name, title, picture }) => {
  return (
    <div className="testimonials_card">
      <p>{text}</p>
      <h2>{name}</h2>
      <p>{title}</p>
      <img src={picture} alt="" />
    </div>
  );
};

export default TestimonialItem;
