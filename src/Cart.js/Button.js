import React from 'react'

const Button = (props) => {

  return (
    <div>
      <button className={`${props.classbutton}`} onclick={() => props.handleClick()}>{props.button_name}</button>j
    </div>
  );
}

export default Button