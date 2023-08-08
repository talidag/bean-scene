import "./Button.scss";

const Button = ({ text, fw, special }) => {
  return (
    <button
      className={fw ? "btn btn--medium" : special ? "btn btn--special" : "btn"}
    >
      {text}
    </button>
  );
};

export default Button;
