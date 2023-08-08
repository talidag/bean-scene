import "./AboutUs.scss";
import beans from "../../assets/icons/beans_icon.svg";
import badge from "../../assets/icons/badge_icon.svg";
import cup from "../../assets/icons/cup_icon.svg";
import price from "../../assets/icons/price_icon.svg";
import CardItem from "../../components/molecules/CardItem/CardItem";

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
      <h1 className="about__title">Why are we different?</h1>
      <p className="about__text">
        We don’t just make your coffee, we make your day!
      </p>
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
  );
};

export default AboutUs;
