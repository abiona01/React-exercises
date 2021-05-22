import React from "react";

function Twitter() {
	const Tweetinput = () => {
		return (
			<div className="tweet-input">
				<textarea name="tweet" id="" cols="30" rows="10"></textarea>
				<button>Add Post</button>
			</div>
		);
	};
	return (
		<div className="tweet-box">
			<Tweetinput />
		</div>
	);
}

export default Twitter;
