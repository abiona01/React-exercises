import React from 'react'
import ReactDOM from 'react-dom'
const header = (
<header>
  <h1>SUBSCRIBE</h1>
  <h3>Sign up with your email address to receive news and updates</h3>
</header>
)
const main = (
  <div>
    <input type="text" placeholder="First name" />
    <input type="text" placeholder="Last name" />
    <input type="email" placeholder="Email" />
  </div>
)
const button = (
  <div>
    <button>Subscribe</button>
  </div>
)
const app = (
  <div>
    {header}
    {main}
    {button}
  </div>
)
const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
