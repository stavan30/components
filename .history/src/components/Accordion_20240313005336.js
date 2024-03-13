import React from 'react'

const Accordion = ({items}) => {
    const renderedItems = items.maps((item)=>{
       return (
        <div key={item.id}>
            <div>{item.label}</div>
            <div>{item.content}</div>
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