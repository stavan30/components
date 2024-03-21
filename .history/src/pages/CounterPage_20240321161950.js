import React from 'react'
import { useState, useEffect } from 'react'

const useSomething = ()=>{
    const [count, setCount] = useState(initialCount)

    useEffect(()=>{
        console.log(count)
    },[count])

    const handleClick = ()=>{
        setCount(count+1)
    }

    return {
        count: count,
        handleClick: handleClick
    }
}

const CounterPage = ({initialCount}) => {

   
  return (
    <div>
        <div className='p-4'>Count is {count}</div>
        <button className='px-3 py-1.5 border border-black' onClick={handleClick}>Increment</button>
    </div>
  )
}

export default CounterPage