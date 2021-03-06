import "./Button.css";

function Button(props) {
  return (
    <button
      className={`Button ${props.Classes || ""}`}
      onClick={() => props.onClick && props.onClick(props.Value)}
    >
      {props.Value}
    </button>
  );
}

export default Button;
