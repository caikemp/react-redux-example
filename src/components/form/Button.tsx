import React from "react";

interface Props {
  disabled?: boolean;
  onClick(): void;
}
const Button: React.FC<Props> = ({ children, onClick, disabled }) => {
  return (
    <button
      className={`beer-button ${disabled ? "disabled" : ""}`}
      type="button"
      onClick={() => !disabled && onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
