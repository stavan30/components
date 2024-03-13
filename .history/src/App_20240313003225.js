import React from 'react'
import Accordion from './components/Accordion'


const App = () => {
    const item = [
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
    <Accordion item={item}/>
  )
}

export default App