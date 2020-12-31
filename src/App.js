import React, { useEffect, useState, useRef } from 'react'
import './App.css'
import usrImg from './assets/avatar.png'
import sendIcon from './assets/send.png'
import TextComponent from './components/TextComponent'
import backArrow from './assets/left-arrow.png'
import moment from 'moment'
import TextareaAutosize from 'react-autosize-textarea'

const App = () => {
	let loggedInUserId = 1
	let senderId = 2
	const [isTyping, setIsTyping] = useState(false)
	const [isAdded, setIsAdded] = useState(false)
	const inputRef = useRef(null)
	const myRef = useRef(null)
	const executeScroll = () => myRef.current.scrollIntoView(0, 100)

	// console.log('myRef', myRef.current)
	const [messages, updateMessages] = useState([
		{
			message: "Hi, I'm san",
			createdAt: '2020-12-22T08:47:53.797Z',
			id: 2,
			userId: 2,
			link: '',
			desclaimer: '',
		},
		{
			message: 'How can I help you today?',
			createdAt: '2020-12-22T08:47:53.797Z',
			id: 2,
			userId: 2,
			link: '',
			desclaimer: '',
		},
		{
			message: 'I wants to learn more about common cancer symptoms',
			createdAt: '2020-12-22T08:47:53.797Z',
			id: 1,
			userId: 1,
			link: '',
			desclaimer: '',
		},
		{
			message: 'Which cancer do you want to know more about?',
			createdAt: '2020-12-22T08:47:53.797Z',
			id: 2,
			userId: 2,
			link: '',
			desclaimer: '',
		},
		{
			message: 'Thyroid cancer',
			createdAt: '2020-12-22T08:47:53.797Z',
			id: 1,
			userId: 1,
			link: '',
			desclaimer: '',
		},
		{
			message: 'Here is an article about common thyroid cancer symptoms',
			createdAt: '2020-12-22T08:47:53.797Z',
			id: 2,
			userId: 2,
			link: 'https://www.btf-thyroid.org/what-is-thyroid-disorder',
			desclaimer:
				'The educational link(s) provided are not a substitute for professional medical advice, treatnebt, it diagnosis. These are for educational purposes only.',
		},
		// {
		// 	message: 'Did you find the article helpful?',
		// 	createdAt: '2020-12-22T08:48:53.797Z',
		// 	id: 2,
		// 	userId: 2,
		// 	link: '',
		// 	desclaimer: '',
		// },
	])
	// useEffect(() => {
	// 	receiverMsg()
	// }, [isAdded])
	const onTypingMessage = e => {
		if (e.target.value !== '') {
			setIsTyping(true)
		} else {
			setIsTyping(false)
		}
	}
	const addMessage = e => {
		executeScroll()
		if (inputRef.current.value !== '') {
			updateMessages([
				...messages,
				{
					message: inputRef.current.value,
					createdAt: moment().toISOString(),
					id: messages.length + 1,
					userId: loggedInUserId,
					link: messages.link,
					desclaimer: messages.desclaimer,
				},
			])
			setIsAdded(true)
			inputRef.current.value = null
		}
	}

	const receiverMsg = () => {
		executeScroll()
		// setTimeout(function () {
		setIsAdded(false)

		updateMessages([
			...messages,
			{
				message: 'Default message',
				createdAt: moment().toISOString(),
				id: messages.length + 1,
				userId: 2,
				link: '',
				desclaimer: '',
			},
		])
		setIsTyping(false)
		// }, 3000)
	}

	return (
		<div className="App">
			<div className="container">
				<div className="messaging" ref={myRef}>
					<div className="inbox_msg">
						<div className="mesgs">
							<div className="msg_history">
								<div className="headerStyle">
									<div className="backBtn">
										<img src={backArrow} alt="user image" width="20px" id="likeImg" />
									</div>
									<div className="UImg">
										<div className="avatarImg">
											<img src={usrImg} alt="user image" width="45px" />
										</div>
									</div>
									<h3 className="userName">Sanbot</h3>
								</div>
								<TextComponent
									messages={messages}
									loggedInUserId={loggedInUserId}
									isTyping={isTyping}
									isAdded={isAdded}
									senderId={senderId}
									receiverMsg={receiverMsg}
								/>

								<div className="type_msg">
									{isTyping && isAdded ? (
										<div className="typingTxt">
											<p>typing...</p>
										</div>
									) : (
										''
									)}

									<div className="input_msg_write">
										<div className="msgInput">
											<TextareaAutosize
												ref={inputRef}
												className="write_msg"
												placeholder="Type a message here..."
												onChange={e => onTypingMessage(e)}
											/>
											{/* <textarea
												ref={inputRef}
												className="write_msg"
												onChange={e => onTypingMessage(e)}
												placeholder="Type a message here..."
											/> */}
											<button className="msg_send_btn" onClick={addMessage} type="button">
												<img src={sendIcon} alt="send" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
