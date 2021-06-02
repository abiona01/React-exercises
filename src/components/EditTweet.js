import React, { useState, useEffect } from "react";

function EditTweet(props) {
	const [newtweet, setNewtweet] = useState(props.currentTweet);

	useEffect(() => {
		setNewtweet(props.currentTweet);
	}, [props]);

	const handleChange = (e) => {
		const { content, value } = e.target;
		setNewtweet({ ...newtweet, [content]: value });
	};
	const onSubmit = (e) => {
		e.preventDefault();
		props.updateTweet(newtweet.id, newtweet);
	};

	return (
		<form onSubmit={onSubmit}>
			<textarea
				name="edit"
				cols="60"
				rows="8"
				value={newtweet.content}
				required
				onChange={handleChange}
			></textarea>
			<input type="submit" value="Save" className="active" />
			<button onClick={() => props.setEditing(false)} className="active">
				Cancel
			</button>
		</form>
	);
}

export default EditTweet;
