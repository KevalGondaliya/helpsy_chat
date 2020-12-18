import logo from './logo.svg'
import React from 'react';
import './App.css'
import usrImg from './assets/avatar.png'
import sendIcon from './assets/send.png'
import TextComponent from './../src/components/TextComponent'

const App = () => {
	return (
		<div className="App">
			<div className="headerStyle">
				<div className="UImg">
					<div className="avatarImg">
						<img src={usrImg} alt="user image" width="45px" />
					</div>
				</div>
				<h3 className="userName">Sanbot</h3>
			</div>
			<div className="container">
				<TextComponent />
			</div>
			<div className="type_msg">
				<div className="input_msg_write">
					<input type="text" className="write_msg" placeholder="Type a message here..." />
					<button className="msg_send_btn" type="button">
						<img src={sendIcon} alt="send" />
					</button>
				</div>
			</div>
		</div>
	)
}

export default App
