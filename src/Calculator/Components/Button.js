import { useEffect, useCallback } from "react";
import "./Button.css";

function Button(props) {
  const { code, Value, onClick } = props;

  const setupNumbers = useCallback(
    (event) => {
      if (
        event.code === "Numpad".concat(code) ||
        event.code === "Digit".concat(code)
      ) {
        onClick(Value);
      }

      if (event.code === "Backspace" && code === "Backspace") {
        onClick();
      }
    },
    [code, Value, onClick]
  );

  useEffect(() => {
    document.addEventListener("keydown", setupNumbers);

    return () => {
      document.removeEventListener("keydown", setupNumbers);
    };
  }, [setupNumbers]);

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
