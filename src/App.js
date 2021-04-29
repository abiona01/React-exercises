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
            <p><span>Weight:</span> {weight.metric}KG</p>
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
      this.setState({
        data,
      })
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    return(
      <div className="cat-wrapper">
        {this.state.data.map((cat, i) => (
          <li key={i}><Cats cat={cat}/></li>
        ))}
      </div> 
    )
  }
}
