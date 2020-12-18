import logo from './logo.svg'
import './App.css'
import usrImg from './assets/avatar.png'
import sendIcon from './assets/send.png'

function App() {
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
				<div className="messaging">
					<div className="inbox_msg">
						<div className="mesgs">
							<div className="msg_history">
								<div className="lableDayWise">
									<p>Yesterday</p>
								</div>
								<div className="incoming_msg">
									<div className="received_msg">
										<div className="received_withd_msg">
											<p>Hi, I'm San</p>
										</div>
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
								<div className="outgoing_msg">
									<div className="sent_msg">
										<p>I want to learn more about common cancer symptoms</p>
										<span className="time_date_out"> 11:01 AM</span>
									</div>
								</div>
								<div className="outgoing_msg">
									<div className="sent_msg">
										<p>I want to learn more about common cancer symptoms</p>
										<span className="time_date_out"> 11:01 AM</span>
									</div>
								</div>
								<div className="outgoing_msg">
									<div className="sent_msg">
										<p>I want to learn more about common cancer symptoms</p>
										<span className="time_date_out"> 11:01 AM</span>
									</div>
								</div>
								<div className="outgoing_msg">
									<div className="sent_msg">
										<p>I want to learn more about common cancer symptoms</p>
										<span className="time_date_out"> 11:01 AM</span>
									</div>
								</div>
								<div className="outgoing_msg">
									<div className="sent_msg">
										<p>I want to learn more about common cancer symptoms</p>
										<span className="time_date_out"> 11:01 AM</span>
									</div>
								</div>
								<div className="outgoing_msg">
									<div className="sent_msg">
										<p>I want to learn more about common cancer symptoms</p>
										<span className="time_date_out"> 11:01 AM</span>
									</div>
								</div>
								<div className="outgoing_msg">
									<div className="sent_msg">
										<p>I want to learn more about common cancer symptoms</p>
										<span className="time_date_out"> 11:01 AM</span>
									</div>
								</div>
								<div className="outgoing_msg">
									<div className="sent_msg">
										<p>I want to learn more about common cancer symptoms</p>
										<span className="time_date_out"> 11:01 AM</span>
									</div>
								</div>
								<div className="outgoing_msg">
									<div className="sent_msg">
										<p>I want to learn more about common cancer symptoms</p>
										<span className="time_date_out"> 11:01 AM</span>
									</div>
								</div>
								<div className="outgoing_msg">
									<div className="sent_msg">
										<p>I want to learn more about common cancer symptoms</p>
										<span className="time_date_out"> 11:01 AM</span>
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
								<div className="incoming_msg">
									<div className="received_msg">
										<div className="received_withd_msg">
											<p>
												Here is an article about common thyroid cancer symptoms:
												<br />
												<a href="https://www.thyroid-cancer.com">https://www.thyroid-cancer.com</a>
											</p>
											<span className="time_date"> 11:01 AM</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="type_msg">
				<div className="input_msg_write">
					<input type="text" className="write_msg" placeholder="Type a message here..." />
					<button className="msg_send_btn" type="button">
						<img src={sendIcon} alt="send"  />
					</button>
				</div>
			</div>
		</div>
	)
}

export default App
