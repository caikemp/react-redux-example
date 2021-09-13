import React from "react";

interface Props {
  className?: string;
}

const Col: React.FC<Props> = ({ className, children }) => {
  return <div className={`${className ? className : ""}`}>{children}</div>;
};

export default Col;
