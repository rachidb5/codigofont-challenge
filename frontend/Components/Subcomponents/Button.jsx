import React from 'react';

function Button(props) {
    const { type, value, onClick, className}= props;
  return (
    <button
    className={className}
    type={type}
    onClick={ onClick }
  >
    {value}
  </button>
    )
}

export default Button;