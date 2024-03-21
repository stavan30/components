import React from 'react'
import useCounter from '../hooks/use-counter'


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