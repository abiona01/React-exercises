import React from 'react'
import axios from 'axios'

 export default class Cat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        data: [],
        weight: ""
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
  fetchCat =async () => {
    const url = ('https://api.thecatapi.com/v1/breeds')
    const response = await axios.get(url)
    const data = await response.data;
    for(let i = 0; i < data.length; i++) {
      let index = Math.floor(Math.random() * data.length)
    this.setState({ country: data[index]});
      const weight = this.state.data[index].weight.metric;
      const div = weight.split("-");
      const one = parseInt(div[0]);
      const two = parseInt(div[1]);
      const sum = one + two
      const ave = sum / 2
      const totals = [];
      const spin = totals.push(ave)
      const final = this.setState ({weight: spin})
      console.log(sum/2)
      return (
        <div>
          <span>{final}.map({final} = <li>{final}</li>)</span>
        </div>
      )
  
  }
}
  render() {
    return(
      <div className="cat">
        <p>There are {this.state.data.length} cats in total </p>
        <div>
          <p>{this.state.weight}</p>
        </div>
        <div>
         <button onClick = {this.fetchCat}>Click me</button>
        </div>
      </div>
    )
  }
}
/**async componentDidMount() {
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
  } */