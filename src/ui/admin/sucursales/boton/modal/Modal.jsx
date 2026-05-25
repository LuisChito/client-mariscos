import React from 'react'
import './Modal.css'
import FormularioModal from './FormularioModal'

const Modal = ({ isOpen, onClose }) => {
	if (!isOpen) return null

	return (
		<div className="modal-fondo-noc" onClick={onClose}>
			<div
				className="modal-caja-noc"
				onClick={(event) => event.stopPropagation()}
			>
				<div className="modal-superior">
					<div className="modal-contenido">
						Agregar la nueva sucursal
					</div>
                    <div
						className="modal-cerrar"
						role="button"
						onClick={onClose}
					>
						X
					</div>
				</div>
				<FormularioModal onClose={onClose} />
			</div>
		</div>
	)
}

export default Modal