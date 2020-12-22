import React, { useState } from 'react'
import './../App.css'
import useLongPress from './useLongPress'
import like from './../assets/like.png'
import dislike from './../assets/dislike.png'
import Modal from './../components/Modal'
import IncomingMessage from './../components/IncomingMessage'

const OutgoingMessage = () => {
	const [longPress, setLongPress] = useState(false)
	const [modal, setModal] = useState(false)
	const [isTyping, setIsTyping] = useState(false)

	const onLongPress = () => {
		setLongPress(true)
	}

	const onClick = () => {
		console.log('click is triggered')
	}

	const onTypingMessage = () => {
		setIsTyping(true)
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
			<div className="outgoing_msg">
				<div className="sent_msg">
					<p>I want to learn more about common cancer symptoms</p>
				</div>
				<span className="time_date_out"> 11:01 AM</span>
			</div>
			<IncomingMessage />
			<div className="outgoing_msg">
				<div className="sent_msg">
					<p>Thyroid cancer</p>
				</div>
				<span className="time_date_out"> 11:01 AM</span>
			</div>
		</div>
	)
}

export default OutgoingMessage
