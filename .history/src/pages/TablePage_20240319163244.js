import React from 'react'
import Table from '../components/Table'

const TablePage = () => {
    const table = [
        { name: 'Orange', color: 'bg-orange-500', score: '4'},
        { name: 'Apple', color: 'bg-red-500', score: '3'},
        { name: 'Banana', color: 'bg-yellow-500', score: '1'},
        { name: 'Lime', color: 'bg-green-500', score: '4'},
    ]
  return (
    <div>
        <Table table={table}/>
    </div>
  )
}

export default TablePage