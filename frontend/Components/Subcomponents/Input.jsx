import React from 'react';

function Input(props) {
    const { type, name, placeholder, value, onChange}= props;
  return (
          <input
            type={type}
            name={name}
            className="form-control mb-2"
            placeholder={placeholder}
            value={ value }
            onChange= { onChange }
          />
    )
}

export default Input;