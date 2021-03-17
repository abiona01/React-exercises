import React from 'react'
import ReactDOM from 'react-dom'

function isPrime(num) {
  var sqrtnum=Math.floor(Math.sqrt(num));
    var prime = num !== 1;
    for(var i=2; i<sqrtnum+1; i++) { // sqrtnum+1
        if(num % i === 0) {
            prime = false;
            break;
        }
    }
    return prime;
}
const Box = (props)=>{
  const [number, color] = props.box;
  return (
    <div className ="button" style={{backgroundColor: color}}>
      {number}
    </div>
  )
}
const Numbers = (props) => {
  const {...objArr} = props.objArr
  let jsx = Object.entries(objArr).map((numCol, i)=>{
    return(
      <Box box={numCol} key = {i} />
    )
  })
  return (
    <div className="grid-container">
      {jsx}
    </div>
  )
}
const App = () => {
  let objArr = {}
  for (let i = 0; i <= 31; i++){
    if (isPrime(i)) {
      objArr[i] = 'red';
    } 
    else if(i % 2 === 0) {
      objArr[i] = 'green';
    } else{
      objArr[i] = 'yellow'
    } 
  }
  return (
    <div className = 'container'>
      <header className="header-wrapper">
        <h1>30 Days of React</h1>
        <h5>Number Generator</h5>
      </header>
      <Numbers objArr= {objArr} />
    </div>
  )
}
const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement)


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