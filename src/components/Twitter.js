import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";

function Twitter() {
	const Tweetinput = () => {
		const [state, setstate] = useState("");
		let wordCount = 250 - state.length;
		let buttonStatus = wordCount > 0 && wordCount <= 250;
		let buttonClassName = buttonStatus ? "active" : "disabled";
		const handleChange = (e) => {
			const value = e.target.value;
			setstate(value);
		};
		return (
			<div className="tweet-input">
				<textarea
					name="tweet"
					placeholder="Tweet about 30 Days of React..."
					cols="60"
					rows="8"
					value={state}
					onChange={handleChange}
				></textarea>
				<p className={wordCount < 0 ? "red " : "other"}>{wordCount}</p>
				<button className={buttonClassName} disabled={!buttonStatus}>
					Add Post
				</button>
			</div>
		);
	};
	const randomId = () => {
		const numbersAndLetters =
			"0123456789abcdefghijklmnopqrstuvwzyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
				""
			);
		let randId = "";
		let randIndex;
		for (let i = 0; i < 6; i++) {
			randIndex = Math.floor(Math.random() * numbersAndLetters.length);
			randId += numbersAndLetters[randIndex];
		}
		return randId;
	};
	const InitialTweet = () => {
		const tweetArray = [
			{
				id: randomId(),

				user: "Hatake Kaksahi",
				username: "@kakashi",
				content:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maiores exercitationem, iusto quam debitis quaerat laudantium architecto molestias asperiores deleniti atque itaque ullam, explicabo minima ipsum corporis consequatur, voluptate nulla!",
				postInfo: [{ comment: 0 }, { repost: 0 }, { hearts: 0 }],
			},
			{
				id: randomId(),

				user: "Hatake Kaksahi",
				username: "@kakashi",
				content:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maiores exercitationem, iusto quam debitis quaerat laudantium architecto molestias asperiores deleniti atque itaque ullam, explicabo minima ipsum corporis consequatur, voluptate nulla!",
				postInfo: [{ comment: 0 }, { repost: 0 }, { hearts: 0 }],
			},
			{
				id: randomId(),

				user: "Hatake Kaksahi",
				username: "@kakashi",
				content:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maiores exercitationem, iusto quam debitis quaerat laudantium architecto molestias asperiores deleniti atque itaque ullam, explicabo minima ipsum corporis consequatur, voluptate nulla!",
				postInfo: [{ comment: 0 }, { repost: 0 }, { hearts: 0 }],
			},
			{
				id: randomId(),

				user: "Hatake Kaksahi",
				username: "@kakashi",
				content:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maiores exercitationem, iusto quam debitis quaerat laudantium architecto molestias asperiores deleniti atque itaque ullam, explicabo minima ipsum corporis consequatur, voluptate nulla!",
				postInfo: [{ comment: 0 }, { repost: 0 }, { hearts: 0 }],
			},
		];
		const Tweet = ({ tweetarray: { user, username, content } }) => {
			const formattedDate = new Date().toUTCString();
			return (
				<div className="tweet-div">
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
							<FaEdit />
							<FaTrashAlt className="trash" />
						</div>
						<div className="icons">
							<FaRegComment className="comment" />
							<FaRegHeart className="heart" />
							<FaRetweet className="retweet" />
						</div>
						<div className="date">{formattedDate}</div>
					</div>
				</div>
			);
		};
		return (
			<ul>
				{tweetArray.map((tweetArray) => (
					<li>
						<Tweet tweetarray={tweetArray} />
					</li>
				))}
			</ul>
		);
	};
	const Tweetaction = () => {
		const [edit, setedit] = useState(false);
		useEffect(() => {
			editPost = () => {
				setedit({ edit: true });
			};
		});
	};
	// const newTweet = {
	// 	id: randomId(),
	// 	user: "Anonymous User",
	// 	username: "@anonymous",
	// 	content: ""
	// };
	// const addTweet = (tweetArray) => {
	// 	tweetArray.push(newTweet);
	// };
	return (
		<>
			<Tweetinput />
			<InitialTweet />
		</>
	);
}

export default Twitter;
