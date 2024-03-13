import React from 'react'

const Button = ({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded
}) => {
  return (
    <button>{children}</button>
  )
}

Button.prototype = {
    checkVariationValue: ( {primary, secondary, success, warning, danger} )=>{
        const count = 
            Number(!!primary) +
            Number(!!secondary) +
            Number(!!success) +
            Number(!!warning) +
            Number(!!danger);

            if (count > 1) {
                return new Error("Error")
            }
    }

    }


export default Button