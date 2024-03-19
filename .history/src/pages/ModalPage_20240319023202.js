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

    const actionbar = <div>
        <button className='px-3 py-1.5 border border-green-500 bg-green-300' onClick={handleClose}>I accept</button>
    </div>
  return (
    <div>
        <button className='px-3 py-1.5 border border-black' onClick={handleClick}>Open Modal</button>   
        { showModal && 
        
        <Modal onClose={handleClose} actionbar={actionbar}>
            <p>Here is an important agreement for you to read.</p>    
        </Modal>}             
    </div>
  )
}

export default ModalPage