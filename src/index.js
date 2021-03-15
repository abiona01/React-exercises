import React from 'react'
import ReactDOM from 'react-dom'
import wemimoImage from './images/Adewemimo-abiona.png'

const User = () => (
  <div>
    <img className='user-wrapper' src= {wemimoImage} alt='Abiona Quadrat A.' />
  </div>
)

const Main = () => (
  <main className='main-wrapper'>
    <h2>ABIONA QUADRAT ADEWEMIMO</h2>
    <p>Junior Developer, Nigeria</p>
    <h2>
      SKILLS
    </h2>
  </main>
)

const Buttons = () => (
  <div className='buttons'>
    <button>HTML</button>
    <button>CSS</button>
    <button>Sass</button>
    <button>JS</button>
    <button>React</button>
    <button>Redux</button>
    <button>Node</button>
    <button>MongoDB</button>
    <button>Python</button>
    <button>Flask</button>
    <button>Django</button>
    <button>NumPy</button>
    <button>Pandas</button>
    <button>Data Analysis</button>
    <button>MYSQL</button>
    <button>GraphQL</button>
    <button>D3.js</button>
    <button>Gatsby</button>
    <button>Docker</button>
    <button>Heroku</button>
    <button>Git</button>
  </div>
  
)

const Footer = () => (
  <footer>
    <p>
      &copy; Joined on Mar 8, 2021
    </p>
  </footer>
)
const App = () => (
  <div>
    <User />
    <Main />
    <Buttons />
    <Footer />
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
/*const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  let star = '#' + color
  return star
}
const hexaStyles = {
  backgroundColor: '{$star}',
}
const HexaColor = () => <div style={hexaStyles}>{hexaColor()}</div> 

const rootElement = document.getElementById('root')

ReactDOM.render(<HexaColor />, rootElement); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(); */
/*
const header = (
  <header className='header-wrapper'>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Abiona Quadrat A.</p>
    <small>March 10, 2021</small>
  </header>
) */
/*const user = (
  <div>
    <img src={frontend_techImage} alt="frontend technologies" />
  </div>
)
const main = (
  <main className='main-wrapper'>
    <p>Prerequisite to get started {' '}
    <strong>
      <em>react.js</em>
    </strong>
    :
    </p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </main>
)


const footer = (
  <footer>
  <div className='footer-wrapper'>
    <p>Copyright 2021</p>
    </div>
  </footer>
)

const app = ( 
  <div>
    {header}
    {user}
    {main}
    {footer}
    
  </div>
) */

/* LEVEL 2 EXERCISE
const Header = () => (
<header >
  <div className="header-wrapper">
  <h1>SUBSCRIBE</h1>
  <h3>Sign up with your email address to receive news and updates</h3>
  </div>
</header>
)
const Main = () => (
  <main>
  <div className="main-wrapper">
    <div className="flex-container">
      <input type="text" placeholder="First name" />
      <input type="text" placeholder="Last name" />
      <input type="email" placeholder="Email" />
    </div> 
    <br />
    <span><button className="button-wrapper">Subscribe</button></span>
  </div>
  </main>
)
const App = () => (
  <div>
    <Header />
    <Main />
  </div>
  
)
*/
/* LEVEL 3 EXERCISE
*/
// The App, or the parent or the container component
// Functional Component
/*const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }

  return (
    <div className='app'>
      <Button text='Greet People' onClick={greetPeople} />
      <Button text='Show Time' onClick={() => alert(new Date())} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)*/
/*const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}
// Header Component
const Header = (props) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{props.data.welcome}</h1>
        <h2>{props.data.title}</h2>
        <h3>{props.data.subtitle}</h3>
        <p>
          {props.data.author.firstName} {props.data.author.lastName}
        </p>
        <small>{showDate(props.data.date)}</small>
      </div>
    </header>
  )
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: new Date(), // date needs to be formatted to a human readable format
  }

  return (
    <div className='app'>
      <Header data={data} />
    </div>
  )
}*/