import React from 'react'
import axios from 'axios'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink,
  } from 'react-router-dom'
  import { FaCat } from "react-icons/fa";

  // Home component
const Home = (props) => <h2> </h2>
// About component
const About = (props) => <h2> </h2>
// Contact component
const Dummy = (props) => <h2> </h2>

const Challenges = (props) => (
    <div className="head">
      <h1>30 DAYS OF REACT</h1>
      <Router>
          <ul className="day">
              <li>
              <NavLink to='/day-19'>Day 19</NavLink>
              </li>
          </ul>
          <Route  path='/day-19' component={About} />
      </Router>
    </div>
  )

  const BottomHeader =(props) => (
    <div>
        <div className="cat-header">
        <Challenges />
    <Router>
        <Navbar />
        <Switch>
            <Route  path='/about' component={About} />
            <Route  path='/dummy' component={Dummy} />
            <Route  exact path='/' component={Home} />
        </Switch>
    </Router>
    <BottomHeader />
    </div>
      <div className="cat-bottom">
          <p className="icon"> <FaCat /> </p>
          <h2>Cats Paradise</h2>
          <p className="info">There are 67 cat breeds</p>
          <p>On average a cat can weigh about <span className="blue">4.71</span>kg and lives <span className="blue">13.75</span> years</p>
      </div>
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
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            tempData: []
        }
      }
    async componentDidMount () {
        
        const url = 'https://api.thecatapi.com/v1/breeds'
        try {
          const response = await axios.get(url)
          const data = await response.data
          console.log(data)
          this.setState({
            data,
          })
        } catch (error) {
          console.log(error)
        }
      }
      filterCats = () => {
        const filteredCats = []
        console.log(this.state.data)
        const countries = this.state.data.map(({ origin }) => origin)
        const setCountries = new Set(countries)
        for (let country of setCountries) {
          const countryList = this.state.data.filter(
            ({ origin }) => origin === country
          )
          filteredCats.push(countryList)
        }
        const sortedCats = [...filteredCats].sort((a, b) => {
          return a.length - b.length
        })
        return sortedCats
      }
      handleCatFilter = (org) => {
        const countryList = this.state.data.filter(({ origin }) => origin === org)
        this.setState({
          tempData: countryList,
        })
      }
      handleAllCats = () => {
        this.setState({
          tempData: this.state.data,
        })
      }
    render() {
        return(
            <div>
                <BottomHeader />
                <div className='cats-nav'>
                    {this.filterCats().map((c) => {
                    return (
                        <div onClick={() => this.handleCatFilter(c[0].origin)}>
                            {c[0].origin}({c.length})
                        </div>
                    )
                    })}
                    {this.state.data.length > 0 && (
                    <div onClick={this.handleAllCats}>All</div>
                    )}
                </div>
            </div>
        )
    }
}


export default Header