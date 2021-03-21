import React from 'react'
import ReactDOM from 'react-dom'

function BarGroup(props) {
  let barPadding = 10
  let barColour = '#CCCC00'
  let widthScale = d => d * 10

  let width = widthScale((props.d.population) / 101202263.14474)
  let yMid = props.barHeight * 0.5
  
  return <g className="bar-group">
    <text className="name-label" x="-5" y={yMid} alignmentBaseline="middle" >{props.d.country}</text>
    <rect  y={barPadding * 0.5} width={width} height={props.barHeight - barPadding} fill={barColour} />
    <text className="value-label" x={800} y={yMid} alignmentBaseline="middle" >{props.d.population}</text>
  </g>
}

class BarChart extends React.Component {
  state = {
    data:[
      { country: 'World', population: 7693165599 },
      { country: 'China', population: 1377422166 },
      { country: 'India', population: 1295210000 },
      { country: 'United States of America', population: 323947000 },
      { country: 'Indonesia', population: 258705000 },
      { country: 'Brazil', population: 206135893 },
      { country: 'Pakistan', population: 194125062 },
      { country: 'Nigeria', population: 186988000 },
      { country: 'Bangladesh', population: 161006790 },
      { country: 'Russian Federation', population: 146599183 },
      { country: 'Japan', population: 126960000 },
    ]
  }

  render() {
    let barHeight = 30
        
    let barGroups = this.state.data.map((d, i) => <g key={i} transform={`translate(0, ${i * barHeight})`}>
                                                    <BarGroup d={d} barHeight={barHeight} />
                                                  </g>)                         
    
    return <div>
      <svg width="100%" height="500" >
      <g className="container">
        <text className="main-title" x="400" y="30">30 Days Of React</text>
        <text className="title" x="450" y="65">World Population</text>
        <text className="sub-title" x="460" y="80">Ten most populated countries</text>
        <g className="chart" transform="translate(200,100)">
          {barGroups}
        </g>
      </g>
      </svg>
    </div>

  }
}
const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<BarChart />, rootElement)

/*
DAY 6 LEVEL 1Bar
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
*/

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
/*DAY 7 LEVEL 3


*/

/*function BarGroup(props) {

  let barGroups = this.props.data.map((d, i) => <g key={i} transform={`translate(0, ${i * barHeight})`}>
                                                    <BarGroup d={d} barHeight={barHeight} />
                                                  </g>)
  let barPadding = 2
  let barColour = '#CCCC00'
  let widthScale = d => d * 10

  let width = widthScale((props.d.population) / 101202263.14474)
  let yMid = props.barHeight * 0.5
  let barHeight = 30
  
            
  return <g className="bar-group">
    <text className="name-label" x="-5" y={yMid} alignmentBaseline="middle" >{props.d.country}</text>
    <rect  y={barPadding * 0.5} width={width} height={props.barHeight - barPadding} fill={barColour} />
    <text className="value-label" x={800} y={yMid} alignmentBaseline="middle" >{props.d.population}</text>
  </g>
}
const data = [
  { country: 'World', population: 7693165599 },
  { country: 'China', population: 1377422166 },
  { country: 'India', population: 1295210000 },
  { country: 'United States of America', population: 323947000 },
  { country: 'Indonesia', population: 258705000 },
  { country: 'Brazil', population: 206135893 },
  { country: 'Pakistan', population: 194125062 },
  { country: 'Nigeria', population: 186988000 },
  { country: 'Bangladesh', population: 161006790 },
  { country: 'Russian Federation', population: 146599183 },
  { country: 'Japan', population: 126960000 },
]
    const App =() => {
      
    return ( <div>
      <svg width="100%" height="500" >
      <g className="container">
        <text className="main-title" x="400" y="30">30 Days Of React</text>
        <text className="title" x="450" y="65">World Population</text>
        <text className="sub-title" x="460" y="80">Ten most populated countries</text>
        <g className="chart" transform="translate(200,100)">
          {barGroups}
        </g>
      </g>
      </svg>
    </div>
    )
  }
 */