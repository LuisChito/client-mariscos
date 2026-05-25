import React, { useState } from 'react'
import './Boton.css'
import Modal from '../modal/Modal'

const Boton = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <div className="boton-modal-wrapper">
      <div
        className="boton-modal-trigger"
        onClick={openModal}
      >
        + Agregar sucursales
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} />
    </div>
  )
}

export default Boton