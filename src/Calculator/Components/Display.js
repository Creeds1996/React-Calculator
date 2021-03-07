import "./Display.css";

function Display(props) {
  return (
    <div className="Display">
      <p className="Equation">
        {props.firstNumber}
        {" " + props.Operator + " "}
        {props.Index !== 0 && props.secondNumber}
      </p>
      <p>
        {props.Value.toString().length !== 1
          ? props.Value.toString().substring(1)
          : 0}
      </p>
    </div>
  );
}

export default Display;
