import React, { useState } from "react";
import Tweetinput from "./Tweetinput";
import uuid from "react-uuid";
import { FaUser } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import EditTweet from "./EditTweet";

function Twitter() {
	const InitialTweet = () => {
		const [tweets, setTweets] = useState([
			{
				id: uuid(),
				user: "Hatake Kaksahi",
				username: "@kakashi",
				content:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maiores exercitationem, iusto quam debitis quaerat laudantium architecto molestias asperiores deleniti atque itaque ullam, explicabo minima ipsum corporis consequatur, voluptate nulla!",
			},
			{
				id: uuid(),
				user: "Hatake Kaksahi",
				username: "@kakashi",
				content:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maiores exercitationem, iusto quam debitis quaerat laudantium architecto molestias asperiores deleniti atque itaque ullam, explicabo minima ipsum corporis consequatur, voluptate nulla!",
			},
			{
				id: uuid(),
				user: "Hatake Kaksahi",
				username: "@kakashi",
				content:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maiores exercitationem, iusto quam debitis quaerat laudantium architecto molestias asperiores deleniti atque itaque ullam, explicabo minima ipsum corporis consequatur, voluptate nulla!",
			},
			{
				id: uuid(),
				user: "Hatake Kaksahi",
				username: "@kakashi",
				content:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maiores exercitationem, iusto quam debitis quaerat laudantium architecto molestias asperiores deleniti atque itaque ullam, explicabo minima ipsum corporis consequatur, voluptate nulla!",
			},
		]);
		const initialTweet = {
			id: uuid(),
			user: "Hatake Kaksahi",
			username: "@kakashi",
			content: "",
		};
		const [editing, setEditing] = useState(false);
		const [currentTweet, setCurrentTweet] = useState(initialTweet);
		const Tweet = ({ tweet: { user, username, id, content } }) => {
			const formattedDate = new Date().toUTCString();
			return (
				<div className="tweet-div">
					{editing ? (
						<EditTweet
							editing={editing}
							setEditing={setEditing}
							currentTweet={currentTweet}
							updateTweet={updateTweet}
						/>
					) : (
						<>
							<div className="top-user">
								<div className="user-icon">
									<FaUser />
								</div>
								<div className="name">{user}</div>
								{username}
							</div>
							<span>{content}</span>
							<div className="bottom-user">
								<div className="first-icons">
									<FaEdit
										className="edit"
										onClick={editTweets.bind(this, id)}
									/>
									<FaTrashAlt
										className="trash"
										onClick={deleteTweets.bind(this, id)}
									/>
								</div>
								<div className="icons">
									<FaRegComment className="comment" />
									<FaRegHeart className="heart" />
									<FaRetweet className="retweet" />
								</div>
								<div className="date">{formattedDate}</div>
							</div>
						</>
					)}
				</div>
			);
		};
		const addTweet = (state) => {
			setTweets([
				...tweets,
				{
					id: uuid(),
					user: "Anonymous User",
					username: "@anonymous",
					content: state,
				},
			]);
			console.log(tweets);
		};
		const editTweets = (tweet) => {
			setEditing(true);
			setCurrentTweet({ id: tweet.id, content: tweet.content });
		};
		const deleteTweets = (id) => {
			setEditing(false);
			setTweets(tweets.filter((tweet) => tweet.id !== id));
		};
		const updateTweet = (id, updatedTweet) => {
			setEditing(false);

			setTweets(
				tweets.map((tweet) => (tweet.id === id ? updatedTweet : tweet))
			);
		};

		return (
			<>
				<Tweetinput addTweet={addTweet} />
				<ul>
					{tweets.map((tweet) => (
						<li key={tweet.id}>
							<Tweet tweet={tweet} />
						</li>
					))}
				</ul>
			</>
		);
	};

	return (
		<>
			<InitialTweet />
		</>
	);
}

export default Twitter;
