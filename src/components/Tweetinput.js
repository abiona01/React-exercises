import React, { useState } from "react";

const Tweetinput = ({ addTweet }) => {
	const [state, setstate] = useState("");
	let wordCount = 250 - state.length;
	let buttonStatus = wordCount > 0 && wordCount <= 250;
	let buttonClassName = buttonStatus ? "active" : "disabled";
	const handleChange = (e) => {
		const value = e.target.value;
		setstate(value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		addTweet(state);
		setstate("");
	};
	return (
		<form onSubmit={handleSubmit}>
			<div className="tweet-input">
				<textarea
					name="tweet"
					placeholder="Tweet about 30 Days of React..."
					cols="60"
					rows="8"
					value={state}
					required
					onChange={handleChange}
				></textarea>
				<p className={wordCount < 0 ? "red " : "other"}>{wordCount}</p>
				<input
					type="submit"
					value="Add Post"
					className={buttonClassName}
					disabled={!buttonStatus}
				/>
			</div>
		</form>
	);
};

export default Tweetinput;
