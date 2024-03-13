import React from 'react'
import className from 'classnames'

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

    const classes = className('px-3 py-1.5 border', {
        'border-blue-500 bg-blue-500 text-white': primary
    })

  return (
    <button className=''>{children}</button>
  )
}

Button.propTypes = {
    checkVariationValue: ( {primary, secondary, success, warning, danger} )=>{
        const count = Number(!!primary) 
            + Number(!!secondary) 
            + Number(!!success) 
            + Number(!!warning) 
            + Number(!!danger);

            if (count > 1) {
                return new Error("Error")
            }
    }

    }


export default Button