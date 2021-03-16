import React from 'react'
import ReactDOM from 'react-dom'

const colorNumber = () => {
  let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  let color = '';
  for (let i = 0; i < num.length; i++) {
    if(num % 2 === 0) {
      color = `#00FF00`;
      return num;
    } else if(num %  2 !== 0) {
      color = `#FFFF00`;
      return num;
    }
  }
}
const Main = () => {
  return (
    <div className="grid-container">
      <div className="button" style={{backgroundColor: `${colorNumber()}`}}>{colorNumber()}</div>
      <div className="button" style={{backgroundColor: `${colorNumber()}`}}>{colorNumber()}</div>
      <div className="button" style={{backgroundColor: `${colorNumber()}`}}>{colorNumber()}</div>
      <div className="button" style={{backgroundColor: `${colorNumber()}`}}>{colorNumber()}</div>
      <div className="button" style={{backgroundColor: `${colorNumber()}`}}>{colorNumber()}</div>
      <div className="button" style={{backgroundColor: `${colorNumber()}`}}>{colorNumber()}</div>
      <div className="button" style={{backgroundColor: `${colorNumber()}`}}>{colorNumber()}</div>
      <div className="button" style={{backgroundColor: `${colorNumber()}`}}>{colorNumber()}</div>
      <div className="button" style={{backgroundColor: `${colorNumber()}`}}>{colorNumber()}</div>
      <div className="button" style={{backgroundColor: `${colorNumber()}`}}>{colorNumber()}</div>
      <div className="button" style={{backgroundColor: `${colorNumber()}`}}>{colorNumber()}</div>
      <div className="button" style={{backgroundColor: `${colorNumber()}`}}>{colorNumber()}</div>
      <div className="button" style={{backgroundColor: `${colorNumber()}`}}>{colorNumber()}</div>
      <div className="button" style={{backgroundColor: `${colorNumber()}`}}>{colorNumber()}</div>
    </div>
  )
}
const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<Main />, rootElement)


/*DAY 6 LEVEL 2
const Main = () => {
  return (
    <div className="main-div">
      <h1>30 DAYS OF REACT</h1>
      <p>Hexadecimal Colors</p>
    </div>
  )
}
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
    <div className="grid-container">
      <div className="buttons" style = {{backgroundColor: `${hexaColor()}`}}>{hexaColor()}</div>
      <div className="buttons" style = {{backgroundColor: `${hexaColor()}`}}>{hexaColor()}</div>
      <div className="buttons" style = {{backgroundColor: `${hexaColor()}`}}>{hexaColor()}</div>
      <div className="buttons" style = {{backgroundColor: `${hexaColor()}`}}>{hexaColor()}</div>
      <div className="buttons" style = {{backgroundColor: `${hexaColor()}`}}>{hexaColor()}</div>
      <div className="buttons" style = {{backgroundColor: `${hexaColor()}`}}>{hexaColor()}</div>
      <div className="buttons" style = {{backgroundColor: `${hexaColor()}`}}>{hexaColor()}</div>
      <div className="buttons" style = {{backgroundColor: `${hexaColor()}`}}>{hexaColor()}</div>
      <div className="buttons" style = {{backgroundColor: `${hexaColor()}`}}>{hexaColor()}</div>
      <div className="buttons" style = {{backgroundColor: `${hexaColor()}`}}>{hexaColor()}</div>
      <div className="buttons" style = {{backgroundColor: `${hexaColor()}`}}>{hexaColor()}</div>
      <div className="buttons" style = {{backgroundColor: `${hexaColor()}`}}>{hexaColor()}</div>
      <div className="buttons" style = {{backgroundColor: `${hexaColor()}`}}>{hexaColor()}</div>
      <div className="buttons" style = {{backgroundColor: `${hexaColor()}`}}>{hexaColor()}</div>
      <div className="buttons" style = {{backgroundColor: `${hexaColor()}`}}>{hexaColor()}</div>
      <div className="buttons" style = {{backgroundColor: `${hexaColor()}`}}>{hexaColor()}</div>
      <div className="buttons" style = {{backgroundColor: `${hexaColor()}`}}>{hexaColor()}</div>
      <div className="buttons" style = {{backgroundColor: `${hexaColor()}`}}>{hexaColor()}</div>
      <div className="buttons" style = {{backgroundColor: `${hexaColor()}`}}>{hexaColor()}</div>
      <div className="buttons" style = {{backgroundColor: `${hexaColor()}`}}>{hexaColor()}</div>
      <div className="buttons" style = {{backgroundColor: `${hexaColor()}`}}>{hexaColor()}</div>
      <div className="buttons" style = {{backgroundColor: `${hexaColor()}`}}>{hexaColor()}</div>
      <div className="buttons" style = {{backgroundColor: `${hexaColor()}`}}>{hexaColor()}</div>
      <div className="buttons" style = {{backgroundColor: `${hexaColor()}`}}>{hexaColor()}</div>
    </div>
  )
}

const App =() => {
  return (
    <div>
      <Main />
      <HexaColor />
    </div>
  )
} */