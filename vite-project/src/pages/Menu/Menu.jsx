import MenuItem from "../../components/molecules/MenuItem/MenuItem";
import "./Menu.scss";
import cappuccino from "../../assets/cappuccino.jpg";
import macchiato from "../../assets/macchiato.jpg";
import chai from "../../assets/chai.jpg";
import expresso from "../../assets/expresso.jpg";
import Heading from "../../components/atoms/Heading/Heading";

const Menu = () => {
  const menuData = [
    {
      icon: cappuccino,
      title: "Cappuccino",
      ratio: "Coffee 50% | Milk 50%",
      price: 8.5,
    },
    {
      icon: chai,
      title: "Chai Latte",
      ratio: "Coffee 80% | Milk 20%",
      price: 6.5,
    },
    {
      icon: macchiato,
      title: "Macchiato",
      ratio: "Coffee 60% | Milk 40%",
      price: 9.5,
    },
    {
      icon: expresso,
      title: "Expresso",
      ratio: "Coffee 90% | Milk 10%",
      price: 5.5,
    },
  ];

  return (
    <div className="menu">
      <Heading text="Enjoy a new blend of coffee style" />
      <p className="menu__text">
        Explore all flavours of coffee with us. There is always a new cup worth
        experiencing
      </p>
      <div className="menu__items">
        {menuData.map((item, index) => {
          const { icon, title, ratio, price } = item;
          return (
            <MenuItem
              key={index}
              icon={icon}
              title={title}
              ratio={ratio}
              price={price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
