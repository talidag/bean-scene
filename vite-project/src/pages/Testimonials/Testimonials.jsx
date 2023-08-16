import "./Testimonials.scss";
import Heading from "../../components/atoms/Heading/Heading";
import jonny from "../../assets/jonny.png";
import TestimonialItem from "../../components/molecules/TestimonialItem/TestimonialItem";
import Paragraph from "../../components/atoms/Paragraph/Paragraph";
import leftBlast from "../../assets/blast_left.svg";
import rightBlast from "../../assets/blast_right.svg";

const Testimonials = () => {
  const testimonialsData = [
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
      name: "Jonny Thomas",
      title: "Project Manager",
      picture: jonny,
    },
  ];

  return (
    <div className="testimonials">
      <img src={leftBlast} alt="" className="left--blast" />
      <img src={rightBlast} alt="" className="right--blast" />
      <Heading text="Our coffee perfection feedback" />
      <Paragraph text="Our customers has amazing things to say about us" />
      <div className="testimonials__cards">
        {testimonialsData.map((testimonial, index) => {
          return <TestimonialItem key={index} {...testimonial} />;
        })}
      </div>
    </div>
  );
};

export default Testimonials;
