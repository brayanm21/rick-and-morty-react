import React from 'react'
import "./Button.css"

const Button = ({children , onClick , disabled}) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button