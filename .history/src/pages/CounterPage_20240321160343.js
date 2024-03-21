import React from 'react'
import { useState, useEffect } from 'react'

const CounterPage = ({initialCount}) => {

    const [count, setCount] = useState(initialCount)

    useEffect(()=>{
        console.log(count)
    },[count])

    const handleClick = ()=>{
        setCount(count+1)
    }
  return (
    <div>
        <div>Count is {count}</div>
        <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default CounterPage