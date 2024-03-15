import React from 'react'
import { useState } from 'react'

const Dropdown = ({options}) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = ()=>{
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (option)=> {
        setIsOpen(false)
        
        console.log(option)
    }

    const renderedOptions = options.map((option) => {
        return (
        //Rather than passing in our handler directly to onClick we put it wrapped version of it - video number: 199.
        <div onClick={()=> handleOptionClick(option)} key={option.value}>
            {option.label}
        </div>
        )
    })
  return (
    <div>
        <div onClick={handleClick}>Select...</div>
        {/* && and || JS Boolean Expression */}
        {isOpen && <div>{renderedOptions}</div>}
    </div>
  )
}

export default Dropdown