import React, { useState } from 'react'
import './../App.css'
import useLongPress from './useLongPress'
import like from './../assets/like.png'
import dislike from './../assets/dislike.png'
import Modal from './../components/Modal'
import moment from 'moment'

const IncommingMessage = ({ messages, loggedInUserId }) => {
	const [longPress, setLongPress] = useState(false)
	const [modal, setModal] = useState(false)

	const onLongPress = () => {
		setLongPress(true)
	}
	const onClick = () => {
		console.log('click is triggered')
	}

	const onLike = () => {
		setLongPress(false)
	}

	const modalOpen = () => {
		console.log('open')
		setModal(true)
	}

	const modalClose = () => {
		console.log('close', modal)
		setModal(false)
	}
	const defaultOptions = {
		shouldPreventDefault: true,
		delay: 500,
	}
	const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions)
	return (
		<div>
			{messages &&
				messages.map(message => {
					return (
						<div className="incoming_msg">
							<div className="received_msg">
								<div className="received_withd_msg" {...longPressEvent}>
									<p>
										{message.message}
										<br />
										<a href="javascript:;" onClick={e => modalOpen(e)}>
											{message.link !== '' ? message.link : null}
										</a>
									</p>
									{message.desclaimer !== '' && <p>DISCLAIMER: {message.desclaimer}</p>}
									{modal ? <Modal show={modal} handleClose={modalClose}></Modal> : null}
								</div>
								<span className="time_date">{moment(message.createdAt).format('hh:mm a')}</span>
								{longPress && (
									<div className="likesBtn" onClick={onLike}>
										<img src={like} alt="user image" width="20px" id="likeImg" />
										<img src={dislike} alt="user image" width="20px" />
									</div>
								)}
							</div>
						</div>
					)
				})}
		</div>
	)
}

export default IncommingMessage
