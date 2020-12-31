import React from 'react'
import like from './../assets/like.png'
import dislike from './../assets/dislike.png'
function LikeDeslike({ onLike }) {
	return (
		<div className="thumpsBtn">
			<div className="likesBtn" onClick={onLike}>
				<img src={like} alt="user image" width="20px" id="likeImg" />
				<img src={dislike} alt="user image" width="20px" />
			</div>
		</div>
	)
}

export default LikeDeslike
