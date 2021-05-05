import React from 'react'
import axios from 'axios'

const Cats = ({cat: {weight, life_span}}) => {
    const weights =() => {
    const weight =  this.state.data.weight?.metric
    .split(' - ')
    .reduce((a,b) => +a + +b) / 2;
    return {
      weight: weight / 2
    }
    }
    const ages =()=>{ 
      const age = this.state.data.life_span
    .split(' - ')
    .reduce((a,b) => +a + +b);
      return{
        age: age / 2
      }
    }
    return (
      <div>
        <p>{weights}</p>
        <p>{ages}</p>
      </div>
    )
  }
 export default class Cat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        data: [],
    }
  }
  async componentDidMount () {
    const url = 'https://api.thecatapi.com/v1/breeds'
    try {
      const response = await axios.get(url)
      const data = await response.data
      console.log(data)
      this.setState({
        data
      })
    } catch (error) {
      console.log(error)
    }
  }
  fetchCat =async () => {
    const url = 'https://api.thecatapi.com/v1/breeds';
    const response = await axios.get(url)
    const data = await response.data;
    for(let i = 0; i < data.length; i++) {
      let index = Math.floor(Math.random() * data.length)
    this.setState({ data: data[index]});
      
  }
}
  render() {
    return(
      <div className="cat">
        <p>There are {this.state.data.length} cats in total </p>
        <div>
          <Cats cat ={this.fetchCat}/>
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