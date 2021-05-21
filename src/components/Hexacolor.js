import React, { useRef, useState } from "react";
import { FaClipboard } from "react-icons/fa";
const hexaColor = () => {
	let str = "0123456789abcdef";
	let color = "";
	for (let i = 0; i < 6; i++) {
		let index = Math.floor(Math.random() * str.length);
		color += str[index];
	}
	return "#" + color;
};

const generateColors = (n) => {
	const colors = [];
	for (let i = 0; i < n; i++) {
		colors.push(hexaColor());
	}
	return colors;
};

const Color = ({ color, style }) => {
	const [copied, setCopied] = useState(false);
	const ref = useRef(null);
	const copyResult = () => {
		const content = ref.current.textContent;
		navigator.clipboard.writeText(content);
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 1500);
	};
	const status = copied ? "copied" : "copy";
	return (
		<div style={style} className="color">
			<small
				ref={ref}
				style={{ fontWeight: "500", fontSize: "32px !important" }}
			>
				{" "}
				{color}
			</small>
			<div className={`clip-div ${status}`}>
				<FaClipboard className="clip " onClick={copyResult} />
			</div>
		</div>
	);
};

const Colors = ({ colors }) => {
	const colorList = colors.map((color) => {
		return (
			<Color style={{ background: color }} color={color} className="color" />
		);
	});

	return <div className="colors-wrapper">{colorList}</div>;
};

const ColorGeneratorApp = () => {
	const initialColors = generateColors(27);
	const [color, setColor] = useState(initialColors);
	const [value, setValue] = useState("");
	const onChange = (e) => {
		if (Number(e.target.value)) {
			setValue(e.target.value);
		}
	};
	const onClick = () => {
		const n = Number(value);
		if (value === "" || undefined) {
			setColor(generateColors(27));
		} else {
			setColor(generateColors(n));
		}
	};
	return (
		<div className="color-app">
			<div className="gene">
				<input type="text" onChange={onChange} value={value} />
				<button onClick={onClick}> Generate </button>
			</div>

			<Colors colors={color} />
		</div>
	);
};

export default ColorGeneratorApp;
