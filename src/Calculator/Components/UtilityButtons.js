import Button from "./Button";
import "./UtilityButtons.css";

function UtilityButtons(props) {
  return (
    <ul className="UtilityButtons">
      <li>
        <Button
          code="Backspace"
          Classes="Backspace"
          Value={"BS"}
          onClick={props.Backspace}
        />
      </li>
      <li>
        <Button
          code="Add"
          Classes="Operator"
          Value={"+"}
          onClick={() => props.Operator("+")}
        />
      </li>
      <li>
        <Button
          code="Subtract"
          Classes="Operator"
          Value={"-"}
          onClick={() => props.Operator("-")}
        />
      </li>
      <li>
        <Button
          code="Multiply"
          Classes="Operator"
          Value={"*"}
          onClick={() => props.Operator("*")}
        />
      </li>
      <li>
        <Button
          code="Divide"
          Classes="Operator"
          Value={"/"}
          onClick={() => props.Operator("/")}
        />
      </li>
      <li>
        <Button
          code="Enter"
          Classes="Equals"
          Value={"="}
          onClick={() => props.Equals()}
        />
      </li>
    </ul>
  );
}

export default UtilityButtons;
