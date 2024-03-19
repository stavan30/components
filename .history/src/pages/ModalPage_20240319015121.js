import React from 'react'
import Modal from '../components/Modal'
import { useState } from 'react'

const ModalPage = () => {
    const [showModal, setShowModal] = useState(false)

    const handleClick = ()=>{
        setShowModal(true)
    }

  return (
    <div>
        <button className='px-3 py-1.5 border border-black' onClick={handleClick}>Open Modal</button>   
        { showModal && <Modal/>}             
    </div>
  )
}

export default ModalPage