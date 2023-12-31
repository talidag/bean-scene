import "./AboutUs.scss";
import beans from "../../assets/icons/beans_icon.svg";
import badge from "../../assets/icons/badge_icon.svg";
import cup from "../../assets/icons/cup_icon.svg";
import price from "../../assets/icons/price_icon.svg";
import CardItem from "../../components/molecules/CardItem/CardItem";
import Button from "../../components/atoms/Button/Button";
import Heading from "../../components/atoms/Heading/Heading";
import Paragraph from "../../components/atoms/Paragraph/Paragraph";

const AboutUs = () => {
  const aboutData = [
    {
      icon: beans,
      title: "Supreme Beans",
      description: "Beans that provides great taste",
    },
    {
      icon: badge,
      title: "High Quality",
      description: "We provide the highest quality",
    },
    {
      icon: cup,
      title: "Extraordinary",
      description: "Coffee like you have never tasted",
    },
    {
      icon: price,
      title: "Affordable Price",
      description: "Our Coffee prices are easy to afford",
    },
  ];

  return (
    <div className="about">
      <Heading text="Why are we different?" />
      <Paragraph text="We don’t just make your coffee, we make your day!" />

      <div className="about__cards">
        {aboutData.map((item, index) => {
          const { title, description, icon } = item;
          return (
            <CardItem
              key={index}
              title={title}
              description={description}
              icon={icon}
            />
          );
        })}
      </div>
      <div className="about__footer">
        <p className="about__text">
          Great ideas start with great coffee, Lets help you achieve that
        </p>
        <p className="about__title--small">Get started today.</p>
        <Button text="Join Us" />
      </div>
    </div>
  );
};

export default AboutUs;
