import React from 'react'
import ReactDOM from 'react-dom'

const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}
const HexaColor = () => {
  return (
    <div className="button-wrapper">
      <div className = "button" style = {{backgroundColor: `${hexaColor()}`}}>{hexaColor()}</div>
      <div className = "button" style = {{backgroundColor: `${hexaColor()}`}}>{hexaColor()}</div>
      <div className = "button" style = {{backgroundColor: `${hexaColor()}`}}>{hexaColor()}</div>
      <div className = "button" style = {{backgroundColor: `${hexaColor()}`}}>{hexaColor()}</div>
      <div className = "button" style = {{backgroundColor: `${hexaColor()}`}}>{hexaColor()}</div>
      <div className = "button" style = {{backgroundColor: `${hexaColor()}`}}>{hexaColor()}</div>
    </div>
    )
    
}

const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<HexaColor />, rootElement)
