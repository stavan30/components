import React from 'react'
import Accordion from './components/Accordion'


const App = () => {
    const items = [
        {
            id: 'd36dqd',
            label: 'What is your name ?',
            content: 'My name is Stavan'
        },
        {
            id: '4542vs',
            label: 'What is my age ?',
            content: 'My age is 25'
        },
        {
            id: '12ehq3',
            label: 'Where do you live ?',
            content: 'I live in San Jose'
        },
    ]

  return (
    <Accordion items={items}/>
  )
}

export default App