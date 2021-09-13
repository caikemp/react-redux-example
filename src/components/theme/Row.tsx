import React from "react";

interface Props {
  className?: string;
}

const Row: React.FC<Props> = ({ className, children }) => {
  return <div className={`row ${className ? className : ""}`}>{children}</div>;
};

export default Row;
