import React from 'react'
import { useState } from 'react'

const Dropdown = ({options, value, onChange}) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = ()=>{
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (option)=> {
        setIsOpen(false)
        
        onChange(option)
    }

    const renderedOptions = options.map((option) => {
        return (
        //Rather than passing in our handler directly to onClick we put it wrapped version of it - video number: 199.
        <div onClick={()=> handleOptionClick(option)} key={option.value}>
            {option.label}
        </div>
        )
    })

    let content = 'Select...'

    if(selection){
        content = selection.label
    }

  return (
    <div>
        <div onClick={handleClick}>{content}</div>
        {/* && and || JS Boolean Expression */}
        {isOpen && <div>{renderedOptions}</div>}
    </div>
  )
}

export default Dropdown