import React from 'react'
import Accordion from './components/Accordion'


const App = () => {
    const items = [
        {
            label: 'What is your name ?',
            content: 'My name is Stavan'
        },
        {
            label: 'What is my age ?',
            content: 'My age is 25'
        },
        {
            label: 'Where do you live ?',
            content: 'I live in San Jose'
        },
    ]

  return (
    <Accordion items={items}/>
  )
}

export default App