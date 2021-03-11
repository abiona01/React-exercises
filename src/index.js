import React from 'react'
import ReactDOM from 'react-dom'
import wemimoImage from './images/Adewemimo-abiona.png'

/*const header = (
<header className="header-wrapper">
  <h1>SUBSCRIBE</h1>
  <h3>Sign up with your email address to receive news and updates</h3>
</header>
)
const main = (
  <div className="main-wrapper">
    <div className="flex-container">
      <input type="text" placeholder="First name" />
      <input type="text" placeholder="Last name" />
      <input type="email" placeholder="Email" />
    </div> 
    <br />
    <span><button className="button-wrapper">Subscribe</button></span>
  </div>
)
const app = (
  <div>
    {header}
    {main}
  </div>
) 
const header = (
  <header className='header-wrapper'>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Abiona Quadrat A.</p>
    <small>March 10, 2021</small>
  </header>
) 
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

const user = (
  <div>
    <img className='user-wrapper' src= {wemimoImage} alt='Abiona Quadrat A.' />
  </div>
)

const main = (
  <main className='main-wrapper'>
    <h2>ABIONA QUADRAT ADEWEMIMO</h2>
    <p>Junior Developer, Nigeria</p>
    <h2>
      SKILLS
    </h2>
  </main>
)

const buttons =(
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

const footer= (
  <footer>
    <p>
      &copy; Joined on Mar 8, 2021
    </p>
  </footer>
)
const app = (
  <div>
    {user}
    {main}
    {buttons}
    {footer}
  </div>
)
const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(); */
