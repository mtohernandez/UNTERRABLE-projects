import React from "react";
import ButtonCal from "../components/ButtonCal";

const buttonElement = function (handleButton, index, value, key) {
  return (
    <ButtonCal
      key={index}
      buttonVal={value}
      buttonId={key}
      handleButtonClick={handleButton}
    />
  );
};

export default (object, [handleACButtonClick, handleEqualsToClick, handleButtonClick]) => {
  return Object.entries(object).map(([key, value], index) => {
    switch (value) {
      case "AC":
        return buttonElement(handleACButtonClick, index, value, key);
      case "=":
        return buttonElement(handleEqualsToClick, index, value, key);
      default:
        return buttonElement(handleButtonClick, index, value, key);
    }
  });
} 