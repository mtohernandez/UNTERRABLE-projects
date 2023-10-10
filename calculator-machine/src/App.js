import React from "react";
import generateFromObject from "./utils/generateFromObject";
import { addToQuery, equalsTo, removeQuery } from "./calculatorSlice";
import { useDispatch, useSelector } from "react-redux";

export default function App() {

  const { query, result, numbers, symbols, actions } = useSelector(
    (state) => state.calculator
  );
  const dispatch = useDispatch();

  const handleButtonClick = (e) => {
    dispatch(addToQuery(e.target.value));
  };

  const handleACButtonClick = (e) => {
    dispatch(removeQuery());
  };

  const handleEqualsToClick = (e) => {
    dispatch(equalsTo());
  };

  const functionsArr = [handleACButtonClick, handleEqualsToClick, handleButtonClick];

  const numbersGrid = generateFromObject(numbers, functionsArr);
  const symbolsEntry = generateFromObject(symbols, functionsArr);
  const actionsEntry = generateFromObject(actions, functionsArr);

  return (
    <div id="wrapper">
      <div id="calculator">
        <div id="display">{query}</div>
        <div id="result">{result}</div>
        <div className="numbers">{numbersGrid}</div>
        <div className="operators">{symbolsEntry}</div>
        <div className="actions">{actionsEntry}</div>
      </div>
    </div>
  );
}
