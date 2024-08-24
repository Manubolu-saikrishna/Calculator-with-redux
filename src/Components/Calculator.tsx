import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { inputDigit, inputOperator, calculate, clear } from '../store/calculatorSlice';
import './calculator.scss';  // Import the SCSS file

const Calculator: React.FC = () => {
  const dispatch = useDispatch();
  const display = useSelector((state: RootState) => state.calculator.display);

  const handleDigit = (digit: string) => {
    dispatch(inputDigit(digit));
  };

  const handleOperator = (operator: string) => {
    dispatch(inputOperator(operator));
  };

  const handleCalculate = () => {
    dispatch(calculate());
  };

  const handleClear = () => {
    dispatch(clear());
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button className="button clear" onClick={handleClear}>C</button>
        <button className="button digit" onClick={() => handleDigit('7')}>7</button>
        <button className="button digit" onClick={() => handleDigit('8')}>8</button>
        <button className="button digit" onClick={() => handleDigit('9')}>9</button>
        <button className="button operator" onClick={() => handleOperator('/')}>/</button>
        <button className="button digit" onClick={() => handleDigit('4')}>4</button>
        <button className="button digit" onClick={() => handleDigit('5')}>5</button>
        <button className="button digit" onClick={() => handleDigit('6')}>6</button>
        <button className="button operator" onClick={() => handleOperator('*')}>*</button>
        <button className="button digit" onClick={() => handleDigit('1')}>1</button>
        <button className="button digit" onClick={() => handleDigit('2')}>2</button>
        <button className="button digit" onClick={() => handleDigit('3')}>3</button>
        <button className="button operator" onClick={() => handleOperator('-')}>-</button>
        <button className="button digit zero" onClick={() => handleDigit('0')}>0</button>
        <button className="button digit" onClick={() => handleDigit('.')}>.</button>
        <button className="button equals" onClick={handleCalculate}>=</button>
        <button className="button operator" onClick={() => handleOperator('+')}>+</button>
      </div>
    </div>
  );
};

export default Calculator;
