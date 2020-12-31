import React, { useState } from 'react'
import './../App.css'
import useLongPress from './useLongPress'
import like from './../assets/like.png'
import dislike from './../assets/dislike.png'
import Modal from './../components/Modal'
import IncommingMessage from './../components/IncomingMessage'
import moment from 'moment'
const OutgoingMessage = ({ messages, loggedInUserId }) => {
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
	console.log('message', messages)
	return (
		<div>
			{messages &&
				messages.map(message => {
					return (
						message.userId === loggedInUserId && (
							<div className="outgoing_msg">
								<div className="sent_msg">
									<p>{message.message}</p>
								</div>
								<span className="time_date_out">{moment(message.createdAt).format('hh:mm a')}</span>
							</div>
						)
					)
				})}
		</div>
	)
}

export default OutgoingMessage
