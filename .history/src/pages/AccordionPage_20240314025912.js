import React from 'react'
import Accordion from '../components/Accordion'


const App = () => {
    const items = [
        {
            id: 'd36dqd',
            label: 'Q1. What is your name ?',
            content: 'Ans - My name is Stavan'
        },
        {
            id: '4542vs',
            label: 'Q2. What is my age ?',
            content: 'Ans - My age is 25'
        },
        {
            id: '12ehq3',
            label: 'Q3. Where do you live ?',
            content: 'Ans - I live in San Jose'
        },
    ]

  return (
    <Accordion items={items}/>
  )
}

export default App