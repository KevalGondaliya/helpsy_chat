import React, { useState } from 'react'
import './../App.css'
import useLongPress from './useLongPress'
import like from './../assets/like.png'
import dislike from './../assets/dislike.png'
import Modal from './../components/Modal'

const TextComponent = props => {
	const [longPress, setLongPress] = useState(false)
	const [modal, setModal] = useState(false)
	console.log('modal', modal)
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
		console.log('close')
		setModal(false)
	}
	const defaultOptions = {
		shouldPreventDefault: true,
		delay: 500,
	}
	const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions)

	return (
		<div className="messaging">
			<div className="inbox_msg">
				<div className="mesgs">
					<div className="msg_history">
						<div className="lableDayWise">
							<p>Yesterday</p>
						</div>
						<div className="incoming_msg">
							<div className="received_msg">
								<div className="received_withd_msg" {...longPressEvent}>
									<p>Hi, I'm San</p>
								</div>
								{longPress && (
									<div className="likesBtn" onClick={onLike}>
										<img src={like} alt="user image" width="20px" id="likeImg" />
										<img src={dislike} alt="user image" width="20px" />
									</div>
								)}
							</div>
						</div>
						<div className="incoming_msg">
							<div className="received_msg">
								<div className="received_withd_msg">
									<p>How can i Help you today?</p>
									<span className="time_date"> 11:01 AM</span>
								</div>
							</div>
						</div>
						<div className="outgoing_msg">
							<div className="sent_msg">
								<p>I want to learn more about common cancer symptoms</p>
								<span className="time_date_out"> 11:01 AM</span>
							</div>
						</div>
						<div className="incoming_msg">
							<div className="received_msg">
								<div className="received_withd_msg">
									<p>Which cancer do you want to know more about?</p>
									<span className="time_date"> 11:01 AM</span>
								</div>
							</div>
						</div>
						<div className="lableDayWise">
							<p>Today</p>
						</div>
						<div className="outgoing_msg">
							<div className="sent_msg">
								<p>Thyroid cancer</p>
								<span className="time_date_out"> 11:01 AM</span>
							</div>
						</div>
						{console.log('modal -in hml', modal)}
						<div className="incoming_msg">
							<div className="received_msg">
								<div className="received_withd_msg">
									<p>
										Here is an article about common thyroid cancer symptoms:
										<br />
										<a href="javascript:;" onClick={e => modalOpen(e)}>
											https://www.thyroid-cancer.com
										</a>
									</p>
									<Modal show={modal} handleClose={e => modalClose(e)}>
										<div>
											<iframe title="modal" src="https://kevalgondaliya.github.io/" />
										</div>
									</Modal>
									<span className="time_date"> 11:01 AM</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TextComponent
