import React from 'react'

const Modal = ({ handleClose, show, children }) => {
	console.log('show', show)
	const classes = {
		showModal: {
			display: 'block',
		},
		hideModal: {
			display: 'none',
		},
	}
	const showHideClassName = show ? classes.showModal : classes.hideModal

	return (
		<div className={showHideClassName}>
			<div className="modal-container">
				{children}
				<a href="javascript:;" className="modal-close" onClick={handleClose}>
					close
				</a>
			</div>
		</div>
	)
}

export default Modal
