import React from "react";

const ButtonCal = ({ buttonVal, buttonId, handleButtonClick }) => {
  return (
    <button value={buttonVal} id={buttonId} onClick={handleButtonClick}>
      {buttonVal}
    </button>
  );
};

export default ButtonCal;
