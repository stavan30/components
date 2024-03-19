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
        <button>Open Modal</button>                
    </div>
  )
}

export default ModalPage