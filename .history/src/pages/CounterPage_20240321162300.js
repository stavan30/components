import React from 'react'
import { useState, useEffect } from 'react'

const useCounter = (initialCount)=>{
    const [count, setCount] = useState(initialCount)

    useEffect(()=>{
        console.log(count)
    },[count])

    const increment = ()=>{
        setCount(count+1)
    }

    return {
        count: count,
        increment: increment
    }
}

const CounterPage = ({initialCount}) => {

    const {count, increment} = useCounter(initialCount)
    
  return (
    <div>
        <div className='p-4'>Count is {count}</div>
        <button className='px-3 py-1.5 border border-black' onClick={increment}>Increment</button>
    </div>
  )
}

export default CounterPage