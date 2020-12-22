import React, { useState } from 'react'
import './App.css'
import usrImg from './assets/avatar.png'
import sendIcon from './assets/send.png'
import TextComponent from './components/TextComponent'
import backArrow from './assets/left-arrow.png'

const App = () => {
	const [isTyping, setIsTyping] = useState(false)

	const onTypingMessage = e => {
		if (e.target.value !== '') {
			setIsTyping(true)
		} else {
			setIsTyping(false)
		}
	}

	return (
		<div className="App">
			<div className="container">
				<div className="messaging">
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
								<TextComponent />

								<div className="type_msg">
									{isTyping ? (
										<div className="typingTxt">
											<p>typing...</p>
										</div>
									) : (
										''
									)}
									<div className="input_msg_write">
										<input
											type="text"
											className="write_msg"
											onChange={e => onTypingMessage(e)}
											placeholder="Type a message here..."
										/>
										<button className="msg_send_btn" type="button">
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
	)
}

export default App
