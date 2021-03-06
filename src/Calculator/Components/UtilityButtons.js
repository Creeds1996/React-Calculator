import Button from "./Button";
import "./UtilityButtons.css";

function UtilityButtons(props) {
  return (
    <ul className="UtilityButtons">
      <li>
        <Button Classes="Backspace" Value={"BS"} onClick={props.Backspace} />
      </li>
      <li>
        <Button
          Classes="Operator"
          Value={"+"}
          onClick={() => props.Operator("+")}
        />
      </li>
      <li>
        <Button
          Classes="Operator"
          Value={"-"}
          onClick={() => props.Operator("-")}
        />
      </li>
      <li>
        <Button
          Classes="Operator"
          Value={"*"}
          onClick={() => props.Operator("*")}
        />
      </li>
      <li>
        <Button
          Classes="Operator"
          Value={"/"}
          onClick={() => props.Operator("/")}
        />
      </li>
      <li>
        <Button Classes="Equals" Value={"="} onClick={() => props.Equals()} />
      </li>
    </ul>
  );
}

export default UtilityButtons;
