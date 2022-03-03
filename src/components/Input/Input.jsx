import React, { memo } from "react";
import "./Input.css";

const Input = memo(({ id, name, type = "text", value, onChange }) => {
  return (
    <div className="container-input">
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
});

export default Input;
