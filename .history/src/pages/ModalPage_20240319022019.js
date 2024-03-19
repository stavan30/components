import React from 'react'
import Modal from '../components/Modal'
import { useState } from 'react'

const ModalPage = () => {
    const [showModal, setShowModal] = useState(false)

    const handleClick = ()=>{
        setShowModal(true)
    }

    const handleClose = ()=>{
        setShowModal(false)
    }

  return (
    <div>
        <button className='px-3 py-1.5 border border-black' onClick={handleClick}>Open Modal</button>   
        { showModal && <Modal onClose={handleClose}/>}             
    </div>
  )
}

export default ModalPage