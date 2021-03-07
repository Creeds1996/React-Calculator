import Button from "./Button";
import "./Buttons.css";

function Buttons(props) {
  return (
    <ul className="Buttons">
      {Array(11)
        .fill(" ")
        .map((_, index) => {
          return (
            <li
              className={`Button-Container${9 - index === -1 ? " Zero" : ""}`}
            >
              <Button
                code={
                  9 - index > 0 ? 9 - index : 9 - index === -1 ? 0 : "Decimal"
                }
                Value={9 - index > 0 ? 9 - index : 9 - index === -1 ? "0" : "."}
                {...props}
              />
            </li>
          );
        })}
    </ul>
  );
}

export default Buttons;
