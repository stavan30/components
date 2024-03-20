import React from 'react'
import Table from '../components/Table'

const TablePage = () => {
    const data = [
        { name: 'Orange', color: 'bg-orange-500', score: '4'},
        { name: 'Apple', color: 'bg-red-500', score: '3'},
        { name: 'Banana', color: 'bg-yellow-500', score: '1'},
        { name: 'Lime', color: 'bg-green-500', score: '4'},
    ]

    const config = [
        { label: 'Fruit' },
        { label: 'Color' },
        { label: 'Score' }
    ]
  return (
    <div>
        <Table config={config} data={data}/>
    </div>
  )
}

export default TablePage