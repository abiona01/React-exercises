import React from 'react'
import axios from 'axios'

 export default class Cat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        data: []
    }
  }
  componentDidMount() {
    this.fetchCatData()
  }
  fetchCatData = async () => {
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
      <div className="cat">
        <p>There are {this.state.data.length} cats in total </p>
        <div>
          <p>{this.state.weight}</p>
        </div>
        <div>
         
        </div>
      </div>
    )
  }
}