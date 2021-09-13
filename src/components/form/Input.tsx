import React from "react";

interface Props {
  value?: string;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
  className?: string;
  maxLength?: number;
  readOnly?: boolean;
}

const Input = ({
  className,
  maxLength,
  value,
  onChange,
  readOnly,
}: Props): JSX.Element => {
  return (
    <input
      type="text"
      className={className}
      maxLength={maxLength}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
    />
  );
};

export default Input;
