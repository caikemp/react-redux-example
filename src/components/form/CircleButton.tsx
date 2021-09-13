import React from "react";

interface Props {
  disabled?: boolean;
  onClick(): void;
}
const CircleButton: React.FC<Props> = ({ children, onClick, disabled }) => {
  return (
    <button
      className={`beer-circle-button ${disabled ? "disabled" : ""}`}
      type="button"
      onClick={() => !disabled && onClick()}
    >
      {children}
    </button>
  );
};

export default CircleButton;
