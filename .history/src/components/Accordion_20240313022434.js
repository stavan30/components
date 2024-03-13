import React from 'react'
import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from "react-icons/go";


const Accordion = ({items}) => {

    const [expandedIndex, setExpandedIndex] = useState(0)

    const renderedItems = items.map((item, index)=>{
        const isExpanded = index === expandedIndex;

        const icon = <span>{isExpanded ? 'DOWN ' : 'LEFT '}</span>

       return (
        <div key={item.id}>
            <div onClick={()=> setExpandedIndex(index)}>
                {icon}
                {item.label}
            </div>
            {/* JS Boolean Expression turthy and falsey values, && and || operators - video 183 and 184 IMP*/}
            {isExpanded && <div>{item.content}</div>}
        </div>
       )
    });
  return (
    <div>
        {renderedItems}
    </div>
  )
}

export default Accordion