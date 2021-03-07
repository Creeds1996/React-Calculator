import Buttons from "../Components/Buttons";
import Display from "../Components/Display";
import CalculatorHook from "../Hooks/CalculatorHook";
import UtilityButtons from "../Components/UtilityButtons";
import "./Calculator.css";

function Calculator(props) {
  const [
    calculatorData,
    onInputChange,
    onBackspaceHandler,
    onOperatorSelect,
    onEqualsHandler,
  ] = CalculatorHook();

  return (
    <div className="Calculator">
      <Display
        firstNumber={parseFloat(calculatorData.firstNumber)}
        Operator={calculatorData.operator}
        secondNumber={parseFloat(calculatorData.secondNumber)}
        Value={calculatorData.currentDisplay}
        Index={calculatorData.index}
      />
      <div className="Buttons-Container">
        <Buttons onClick={onInputChange} />
        <UtilityButtons
          Operator={onOperatorSelect}
          Backspace={onBackspaceHandler}
          Equals={onEqualsHandler}
        />
      </div>
    </div>
  );
}

export default Calculator;
