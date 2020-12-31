import React, { useEffect, useState, useRef } from 'react'
import './../App.css'
import useLongPress from './useLongPress'

import Modal from './../components/Modal'
import likeDislike from './../components/LikeDeslike'
import LikeDeslikeDes from './../components/likeDislikeDes'
import { color } from './../config/constant'
import moment from 'moment'

const TextComponent = ({ messages, loggedInUserId, senderId, isAdded, receiverMsg }) => {
	useEffect(() => {
		setTimeout(function () {
			if (isAdded) {
				receiverMsg()
			}
		}, 3000)
	}, [isAdded])

	const [longPress, setLongPress] = useState(false)
	const [modal, setModal] = useState(false)
	// const scrollRef = useRef(null)

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
		<div className="messaging">
			<div className="inbox_msg">
				<div className="mesgs">
					<div className="msg_history">
						<div className="lableDayWise">
							<p>Yesterday</p>
						</div>

						{messages &&
							messages.map(message => {
								return message.userId === loggedInUserId ? (
									<div className="outgoing_msg">
										<div className="sent_msg">
											<p>
												{message.message}
												{message.link !== '' && (
													// eslint-disable-next-line jsx-a11y/anchor-is-valid
													<a
														href="javascript:;"
														onClick={e => modalOpen(e)}
														style={{ textDecoration: 'underline', color: color.linkColor }}
													>
														{message.link}
														<br />
													</a>
												)}
												{/* {message.desclaimer !== '' && (
													<span className="link_desclaimer">DISCLAIMER: {message.desclaimer}</span>
												)} */}
											</p>
											{/* {message.desclaimer !== '' && <p>DISCLAIMER: {message.desclaimer}</p>} */}
										</div>
										{modal ? (
											<Modal show={modal} handleClose={modalClose} link={message.link}></Modal>
										) : null}
										<span className="time_date_out">
											{moment(message.createdAt).format('hh:mm a')}
										</span>
									</div>
								) : (
									<div className="incoming_msg">
										{/* <div className="received_msg">
											<div className="received_withd_msg" {...longPressEvent}>
												<p>{message.message}</p>
											</div>
											{modal ? <Modal show={modal} handleClose={modalClose}></Modal> : null}
											{longPress && <LikeDeslike onLike={onLike} />}
											<span className="time_date">
												{moment(message.createdAt).format('hh:mm a')}
											</span>
										</div> */}

										<div className="received_msg">
											<div className="received_withd_msg">
												<p>
													{message.message}

													<br />
													{message.link !== '' && (
														<a
															href="javascript:;"
															onClick={e => modalOpen(e)}
															style={{ textDecoration: 'underline', color: color.linkColor }}
														>
															{message.link}
															<br />
														</a>
													)}
													{message.desclaimer !== '' && (
														<span className="link_desclaimer">
															DISCLAIMER: {message.desclaimer}
														</span>
													)}
												</p>
											</div>
											{modal ? (
												<Modal show={modal} handleClose={modalClose} link={message.link}></Modal>
											) : null}
											{/* {longPress && <LikeDeslike onLike={onLike} />} */}
											<span className="time_date">
												{moment(message.createdAt).format('hh:mm a')}
											</span>
										</div>

										{/* <div className="received_msg">
											<div className="received_withd_msg">
												<p>
													Here is an article about common thyroid cancer symptoms:
													<br />
													<a href="javascript:;" onClick={e => modalOpen(e)}>
														https://www.thyroid-cancer.com
													</a>
													<br />
													<span style={{ fontStyle: 'italic', color: color.gray, fontSize: 14 }}>
														DISCLAIMER: Lorem Ipsum is simply dummy text of the printing and
														typesetting industry.
													</span>
												</p>
												{modal ? <Modal show={modal} handleClose={modalClose}></Modal> : null}
												<span className="time_date"> 11:01 AM</span>
											</div>
										</div> */}
									</div>
								)
							})}
					</div>
					<LikeDeslikeDes />
				</div>
			</div>
		</div>
	)
}

export default TextComponent
