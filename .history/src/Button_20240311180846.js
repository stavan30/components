import React from 'react'
import PropTypes from 'prop-types';

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
    <button className='px-3 py-1.5 border border-blue-600 bg-blue-500 text-white'>{children}</button>
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