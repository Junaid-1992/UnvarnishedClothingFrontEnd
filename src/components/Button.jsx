import React from "react";

const Button = ({ variant, text, extraClass, handleClick }) => {
  return (
    <>
      {variant === "btn-primary" ? (
        <button
          onClick={handleClick}
          className={`btn btn-primary ${extraClass}`}
        >
          {text}
        </button>
      ) : variant === "btn-secondary" ? (
        <button
          onClick={handleClick}
          className={`btn btn-secondary ${extraClass}`}
        >
          {text}
        </button>
      ) : null}
    </>
  );
};

export default Button;
