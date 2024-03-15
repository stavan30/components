import React from 'react'
import { useState } from 'react'

const Dropdown = ({options}) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = ()=>{
        setIsOpen(!isOpen)
    }

    const handleOptionClick = ()=> {
        setIsOpen(false)
    }

    const renderedOptions = options.map((option) => {
        return (
        <div onClick={handleOptionClick} key={option.value}>
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