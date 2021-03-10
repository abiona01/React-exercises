import React from 'react'
import ReactDOM from 'react-dom'

const header = (
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
const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(); */
