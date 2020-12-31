import React, { useEffect, useState, useRef } from 'react'
import './../App.css'
import useLongPress from './useLongPress'
import likeDislike from './../components/LikeDeslike'

import Modal from './../components/Modal'
import LikeDeslike from './../components/LikeDeslike'
import { color } from './../config/constant'
import moment from 'moment'

const LikeDeslikeDec = ({ messages, loggedInUserId, senderId, isAdded, receiverMsg }) => {
	const [longPress, setLongPress] = useState(false)

	const onLike = () => {
		setLongPress(false)
	}
	return (
		<div>
			<div className="incoming_msg">
				<div className="received_msg">
					<div className="received_withd_msg">
						<p>
							Do you find the helpfull article?
							<LikeDeslike onLike={onLike} />
						</p>
					</div>
					<span className="time_date">{moment().format('hh:mm a')}</span>
				</div>
			</div>
		</div>
	)
}

export default LikeDeslikeDec
