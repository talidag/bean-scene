import "./Button.scss";

const Button = ({ text, fw }) => {
  return <button className={`btn ${fw && "btn--medium"}`}>{text}</button>;
};

export default Button;
