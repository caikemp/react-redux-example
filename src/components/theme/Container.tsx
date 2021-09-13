import React from "react";

interface Props {
  className?: string;
}

const Container: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={`container-fluid ${className ? className : ""}`}>
      {children}
    </div>
  );
};

export default Container;
