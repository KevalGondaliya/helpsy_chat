import logo from './logo.svg'
import './App.css'
import usrImg from './assets/avatar.png'

function App() {
	return (
		<div className="App">
			<div className="container">
				<div className="UImg">
					<div className="avatarImg">
						<img src={usrImg} alt="user image" width="45px" />
					</div>
				</div>

				<h3 className="userName">Sanbot</h3>
				<div className="messaging">
					<div className="inbox_msg">
						<div className="mesgs">
							<div className="lableDayWise">
								<p>Yesterday</p>
							</div>
							<div className="msg_history">
								<div className="incoming_msg">
									<div className="received_msg">
										<div className="received_withd_msg">
											<p>Test which is a new approach to have all solutions</p>
											<span className="time_date"> 11:01 AM | June 9</span>
										</div>
									</div>
								</div>
								<div className="outgoing_msg">
									<div className="sent_msg">
										<p>Test which is a new approach to have all solutions</p>
										<span className="time_date"> 11:01 AM | June 9</span>{' '}
									</div>
								</div>
								<div className="incoming_msg">
									<div className="received_msg">
										<div className="received_withd_msg">
											<p>Test, which is a new approach to have</p>
											<span className="time_date"> 11:01 AM | Yesterday</span>
										</div>
									</div>
								</div>
								<div className="outgoing_msg">
									<div className="sent_msg">
										<p>Apollo University, Delhi, India Test</p>
										<span className="time_date"> 11:01 AM | Today</span>{' '}
									</div>
								</div>
								<div className="incoming_msg">
									<div className="received_msg">
										<div className="received_withd_msg">
											<p>
												We work directly with our designers and suppliers, <br />
												<a href="https://kevalgondaliya.github.io/">https://www.upwork.com/</a>
											</p>
											<span className="time_date"> 11:01 AM | Today</span>
										</div>
									</div>
								</div>
							</div>
							<div className="type_msg">
								<div className="input_msg_write">
									<input type="text" className="write_msg" placeholder="Type a message" />
									<button className="msg_send_btn" type="button">
										<i className="fa fa-paper-plane-o" aria-hidden="true"></i>
									</button>
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
