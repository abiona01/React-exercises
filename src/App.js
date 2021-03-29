import React from "react";
//import axios from 'axios';
import "./style.css";

class App extends React.Component {
    state = {
      loading: true,
      country: null
    };
  

   async componentDidMount() {
    const url = "https://restcountries.eu/rest/v2/all?fields=flag;name;capital;languages;population;currencies";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ country: data[0], loading: false });
    console.log(data)
  }
  fetchCountry =async () => {
    const url = ("https://restcountries.eu/rest/v2/all?fields=flag;name;capital;languages;population;currencies")
    const response = await fetch(url);
    const data = await response.json();
    for(let i = 0; i < data.length; i++) {
      let index = Math.floor(Math.random() * data.length)
    this.setState({ country: data[index]});
    }
  }
  render() {
    return (
      <div>
        {this.state.loading || !this.state.country ? (<div>loading...</div>) 
        : (<div className="container">
          <div className="flex-container">
          <div className="image-div"><img src={this.state.country.flag} alt="country flag" /></div>
          <div className="country-name">
            <strong>{this.state.country.name}</strong>
          </div>
          </div>
          <div className="country-info">
          <div>
            <strong>Capital:</strong> {this.state.country.capital}
          </div>
          <div>
            <strong>Language:</strong> {this.state.country.languages[0].name}
          </div>
          <div>
            <strong>Population:</strong> {this.state.country.population}
          </div>
          <div>
            <strong>Currency:</strong> {this.state.country.currencies[0].name}
          </div>
          </div>
          <div className="button-div">
          <button onClick={this.fetchCountry}>Select Country</button>
          </div>
          </div>
        )}
      </div>
    );
  }
}
export default App
/**
import "./style.css";
import { useState, useEffect } from "react";

export default function App() {
  const [dark, setDark] = useState(false);
  const darkmode = () => {
    setDark(!dark);
  };
  useEffect(() => {
    document.body.classList.toggle("darkmode", dark);
  }, [dark]);
  return (
    <div className="App">
      <h1>Dark/Light Mode</h1>
      <p>{dark}</p>
      <h2>Click button below to change page mode</h2>
      <button className="btn" onClick={darkmode}>
        {dark ? "Light-Mode" : "Dark-Mode"}
      </button>
    </div>
  );
}

const newdata = data.map( ( data) =>{
  return(
    <div className="container">
     
        <img src={data.flag} alt="country flag" style={{width: '100px', height: '100px'}}/>
        <p>{data.name}</p>
      
      <div>
      <p>Capital: {data.capital}</p>
      <p>Language: {data.language}</p>
      <p>Population: {data.population}</p>
      <p>Currency: {data.currency}</p>
      <button  className="buttonStyle">Fetch Country</button>
      </div>
    </div>
  )
})

export default newdata*/