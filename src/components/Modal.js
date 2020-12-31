import React, { useState } from 'react'
import './../App.css'
import usrImg from './../assets/avatar.png'
import like from './../assets/like.png'
import dislike from './../assets/dislike.png'

const Modal = ({ handleClose, show, children, link }) => {
	const [showLess, setShowLess] = useState(true)
	const length = 20
	const linkData = 'https://www.btf-thyroid.org/'
	const onLike = () => {
		console.log('liked')
	}
	return (
		<div
			className="modal fade"
			className={show ? 'modal fade show' : 'modal fade'}
			style={{ display: show ? 'block' : 'none', backgroundColor: '#0000001c' }}
			id="exampleModalLong"
			tabindex="-1"
			role="dialog"
			aria-labelledby="exampleModalLongTitle"
			aria-hidden="true"
		>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<button
							type="button"
							class="close"
							data-dismiss="modal"
							aria-label="Close"
							onClick={handleClose}
						>
							<span aria-hidden="true">&times;</span>
						</button>
						<span className="modalHeaderLink">{linkData.slice(0, length)}...</span>
					</div>
					<div>
						<iframe
							title="modal"
							src="https://www.btf-thyroid.org/what-is-thyroid-disorder"
							className="iframStyle"
						/>
					</div>
					<div className="modal-footer">
						<div className="UImgF">
							<div className="avatarImgF">
								<img src={usrImg} alt="user image" width="45px" />
							</div>
						</div>
						<div className="footerText">
							<p>Do you find the helpfull article?</p>
						</div>
						<div className="likesBtnF" onClick={onLike}>
							<img src={like} alt="user image" width="20px" id="likeImgf" />
							<img src={dislike} alt="user image" width="20px" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal
