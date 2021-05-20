import React, { useState, useRef } from "react";

function Hexacolor() {
	const randomHexa = () => {
		let randomNumbers = "0123456789abcdef";
		let color = "";
		for (let i = 0; i < 6; i++) {
			let index = Math.floor(Math.random() * randomNumbers.length);
			color += randomNumbers[index];
		}
		return "#" + color;
	};
	const generateColors = () => {
		const colors = [];
		for (let i = 0; i < 30; i++) {
			colors.push(randomHexa());
		}
		return colors;
	};
	// const Color = ({ color, style }) => {
	//   const [copied, setCopied] = useState(false)
	//   const ref = useRef(null)
	//   const copyResult = () => {
	//     const content = ref.current.textContent
	//     navigator.clipboard.writeText(content)
	//     setCopied(true)
	//     setTimeout(() => {
	//       setCopied(false)
	//     }, 3000)
	//   }
	//   const status = copied ? 'copied' : 'copy'

	//   return (
	//     <div style={style} className='single-color'>
	//       <small
	//         ref={ref}
	//         style={{ fontWeight: '500', fontSize: '32px !important' }}
	//       >
	//         {' '}
	//         {color}
	//       </small>
	//       <div className={`wrapper__copy ${status}`}>
	//         <i
	//           style={{
	//             cursor: 'pointer',
	//             fontSize: 28,
	//             color: 'white',
	//           }}
	//           class='far fa-clipboard'
	//           onClick={copyResult}
	//         ></i>
	//       </div>
	//     </div>
	//   )
	// }
	return <div></div>;
}

export default Hexacolor;
