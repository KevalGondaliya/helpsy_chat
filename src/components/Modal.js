import React from 'react'
import './../App.css'
const Modal = ({ handleClose, show, children }) => {
	console.log('children', children)
	const classes = {
		showModal: {
			display: 'block',
			width: 100,
		},
		hideModal: {
			display: 'none',
		},
	}
	const showHideClassName = show ? classes.showModal : classes.hideModal
	console.log('showHideClassName, ', showHideClassName.display)
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
