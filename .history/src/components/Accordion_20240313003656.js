import React from 'react'

const Accordion = ({items}) => {
    const display = items.filter((item)=>{
       return console.log(item)
    })
  return (
    <div>
        {display}
    </div>
  )
}

export default Accordion