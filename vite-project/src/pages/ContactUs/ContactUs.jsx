import "./ContactUs.scss";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import instagram from "../../assets/icons/instagram.svg";
import youtube from "../../assets/icons/youtube.svg";

const ContactUs = () => {
  const aboutInfo = ["Menu", "Features", "News & Blogs", "Help & Support"];
  const companyInfo = ["How we work", "Terms of service", "Pricing", "FAQ"];
  const contactInfo = [
    "Akshya Nagar",
    "+1 202-918-2132",
    "beanscene@mail.com",
    "www.beanscene.com",
  ];

  return (
    <footer className="footer">
      <div className="footer__intro">
        <p className="footer__logo">Bean Scene</p>
        <p className="footer__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="footer__social">
          <img src={facebook} alt="" className="social__icon" />
          <img src={instagram} alt="" className="social__icon" />
          <img src={youtube} alt="" className="social__icon" />
          <img src={twitter} alt="" className="social__icon" />
        </div>
      </div>
      <div className="footer__items">
        <p className="footer__item__text">About</p>
        {aboutInfo.map((item) => {
          return (
            <a href={item.toLocaleLowerCase()} className="item__link">
              {item}
            </a>
          );
        })}
      </div>
      <div className="footer__items">
        <p className="footer__item__text">Company</p>
        {companyInfo.map((item) => {
          return (
            <a className="item__link" href={item.toLocaleLowerCase()}>
              {item}
            </a>
          );
        })}
      </div>
      <div className="footer__items">
        <p className="footer__item__text">Contact Us</p>
        {contactInfo.map((item) => {
          return <p className="contact__text">{item}</p>;
        })}
      </div>
    </footer>
  );
};

export default ContactUs;
