import React from 'react'
import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from "react-icons/go";


const Accordion = ({items}) => {

    const [expandedIndex, setExpandedIndex] = useState(0)

    const renderedItems = items.map((item, index)=>{
        const isExpanded = index === expandedIndex;

        const icon = <span>{isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}</span>

       return (
        <div key={item.id}>
            <div className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer' onClick={()=> setExpandedIndex(index)}>
                {item.label}
                {icon}
            </div>
            {/* JS Boolean Expression turthy and falsey values, && and || operators - video 183 and 184 IMP*/}
            {isExpanded && <div className='border-b p-5'>{item.content}</div>}
        </div>
       )
    });
  return (
    <div className='border-x border-t rounded'>
        {renderedItems}
    </div>
  )
}

export default Accordion