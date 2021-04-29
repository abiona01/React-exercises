import React from 'react'

import {
    BrowserRouter as Router,
    NavLink,
  } from 'react-router-dom'
  import { FaCat } from "react-icons/fa";

const Challenges = (props) => (
    <div className="head">
      <h1>30 DAYS OF REACT</h1>
      <Router>
          <ul className="day">
              <li>
              <NavLink to='/day-19'>&lt;&lt; Day 19</NavLink>
              </li>
          </ul>
      </Router>
    </div>
  )

  const BottomHeader =(props) => (
    
      <div className="cat-bottom">
          <p className="icon"> <FaCat /> </p>
          <h2>Cats Paradise</h2>
          <p className="info">There are 67 cat breeds</p>
          <p>On average a cat can weigh about <span className="blue">4.71</span>kg and lives <span className="blue">13.75</span> years</p>
      </div>
  )

//const NotFound = (props) => <h1>The page your looking for not found</h1>
const Navbar = () => (
  <ul className="links">
    <li>
      <NavLink to='/'>Home</NavLink>
    </li>
    <li>
      <NavLink to='/about'>About</NavLink>
    </li>
    <li>
      <NavLink to='/dummy'>Dummy Data</NavLink>
    </li>
  </ul>
)



class Header extends React.Component {
   
    render() {
        return(
        <div className="cat-header">
        <Challenges />
    <Router>
        <Navbar />
        
    </Router>
    <BottomHeader />
    </div>
  
        )
    }
}


export default Header