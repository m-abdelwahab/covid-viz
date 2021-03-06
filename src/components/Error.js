import React from "react";
import Card from "./Card";

const Error = ({ message }) => {
  return (
    <Card info="danger">
      <h4>{message}</h4>
      <h2>
        <span role="img" aria-label="error">
          😔
        </span>
      </h2>
    </Card>
  );
};

export default Error;
