import React from 'react'
import axios from 'axios'
import './index.css';

const Cats = ({cat: {name, image, origin, weight, life_span, temperament, description} }) => {
  return (
    <div className="container">
          <div className="image-div">
            <img src={image?.url} loading="lazy" alt={name} />
          </div>
          <div className="text-content">
          <div className="cat-name">
            <p>{name}</p>
          </div>
          <p className="cat-origin"><strong>{origin}</strong></p>
          <div className="cat-attributes">
            <p><span>Temperament:</span> {temperament}</p>
            <p><span>Weight:</span> {weight?.metric}KG</p>
            <p><span>Lifespan:</span> {life_span} </p>
          </div>
          <div className="cat-description">
            <p><span>Description</span></p>
            <p>{description}</p>
          </div>
          </div>
        </div>
  )
}

 export default class App extends React.Component {
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
      const modifyData = await Promise.all(
        data.map(async (cat) => {
          let url = await axios.get(
            `https://api.thecatapi.com/v1/images/search?breed_id=${cat.id}`
          )
          let image = await url.data[0].url

          cat.url = image
          return cat
        })
      )

      this.setState({
        data: modifyData,
        tempData: modifyData,
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
      <div className="cat-wrapper">
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
        {this.state.data.map((cat) => (
          <li key={cat.id}><Cats cat={cat}/></li>
        ))}
        <Cats cat={this.state.tempData} />
      </div> 
    )
  }
}
