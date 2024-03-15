import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { GoChevronDown } from "react-icons/go";


const Dropdown = ({options, value, onChange}) => {
    const [isOpen, setIsOpen] = useState(false)
    const divEl = useRef();

    useEffect(()=>{
        const handler = (event)=>{
            if(!divEl.current.contains(event.target)){
                setIsOpen(false)
            }
        }

        document.addEventListener('click', handler, true)

        return ()=>{
            document.removeEventListener('click', handler)
        }
    },[])

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
        <div className='hover:bg-sky-100 rounded cursor-pointer p-1' onClick={()=> handleOptionClick(option)} key={option.value}>
            {option.label}
        </div>
        )
    })

    let content = 'Select...'

    if(value){
        content = value.label
    }

  return (
    <div ref={divEl} className='w-48 relative'>
        <div className='flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full' onClick={handleClick}>
            {content}
            <GoChevronDown className='text-lg'/>
        </div>
        {/* && and || JS Boolean Expression */}
        {isOpen && <div className='absolute top-full border rounded p-3 shadow bg-white w-full'>{renderedOptions}</div>}
    </div>
  )
}

export default Dropdown