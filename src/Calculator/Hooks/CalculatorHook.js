import { useReducer } from "react";

const CalculatorReducer = (state, action) => {
  switch (action.type) {
    case "InputChange":
      return {
        ...state,
        [returnCurrentNumber(state.index)]: state[
          returnCurrentNumber(state.index)
        ].concat(action.value),
        currentDisplay: state[returnCurrentNumber(state.index)].concat(
          action.value
        ),
      };
    case "Backspace":
      return {
        ...state,
        [returnCurrentNumber(state.index)]: state[
          returnCurrentNumber(state.index)
        ].slice(0, -1),
        currentDisplay: state[returnCurrentNumber(state.index)].slice(0, -1),
      };
    case "Operator":
      return {
        ...state,
        index: 1,
        operator: action.value,
        currentDisplay: state.secondNumber,
        result: " ",
      };
    case "Equals":
      switch (state.operator) {
        case "+":
          return {
            ...state,
            result:
              parseFloat(state.firstNumber) + parseFloat(state.secondNumber),
            currentDisplay:
              parseFloat(state.firstNumber) + parseFloat(state.secondNumber),
          };
        case "-":
          return {
            ...state,
            result:
              parseFloat(state.firstNumber) - parseFloat(state.secondNumber),
            currentDisplay:
              parseFloat(state.firstNumber) - parseFloat(state.secondNumber),
          };
        case "*":
          return {
            ...state,
            result:
              parseFloat(state.firstNumber) * parseFloat(state.secondNumber),
            currentDisplay:
              parseFloat(state.firstNumber) * parseFloat(state.secondNumber),
          };
        case "/":
          return {
            ...state,
            result:
              parseFloat(state.firstNumber) / parseFloat(state.secondNumber),
            currentDisplay:
              parseFloat(state.firstNumber) / parseFloat(state.secondNumber),
          };
        default:
          return state;
      }
    case "OperatorResult":
      return {
        ...state,
        firstNumber: state.result,
        secondNumber: "0",
        index: 1,
        currentDisplay: 0,
        operator: action.value,
      };
    case "Reset":
      return {
        firstNumber: "0",
        secondNumber: "0",
        currentDisplay: "0",
        operator: "",
        result: " ",
        index: 0,
      };
    default:
      return state;
  }
};

const returnCurrentNumber = (index) => {
  if (index === 0) {
    return "firstNumber";
  } else {
    return "secondNumber";
  }
};

const CalculatorHook = () => {
  const [calculatorData, Dispatch] = useReducer(CalculatorReducer, {
    firstNumber: "0",
    secondNumber: "0",
    currentDisplay: "0",
    operator: "",
    result: " ",
    index: 0,
  });

  const resetCalculator = () => {
    Dispatch({
      type: "Reset",
    });
  };

  const onOperatorSelect = (operator) => {
    if (calculatorData.result !== " ") {
      Dispatch({
        type: "OperatorResult",
        value: operator,
      });
    }

    Dispatch({
      type: "Operator",
      value: operator,
    });
  };

  const onInputChange = (Value) => {
    if (calculatorData.currentDisplay === calculatorData.result) {
      resetCalculator();
    }

    if (
      (calculatorData.index === 0 && calculatorData.firstNumber.length <= 9) ||
      (calculatorData.index === 1 && calculatorData.secondNumber.length <= 9)
    ) {
      Dispatch({
        type: "InputChange",
        value: Value,
      });
    }
  };

  const onBackspaceHandler = () => {
    if (
      calculatorData.result === " " &&
      calculatorData[returnCurrentNumber(calculatorData.index)].length > 1
    ) {
      Dispatch({
        type: "Backspace",
      });
    }
  };

  const onEqualsHandler = () => {
    Dispatch({
      type: "Equals",
    });
  };

  return [
    calculatorData,
    onInputChange,
    onBackspaceHandler,
    onOperatorSelect,
    onEqualsHandler,
  ];
};

export default CalculatorHook;
