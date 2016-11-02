import React, { Component } from 'react'
import Header from './Header'
import Nav from './Nav'

import classAutoBind from 'react-helpers/dist/classAutoBind'

class Current extends Component {
  constructor(props) {
    super(props)
    classAutoBind(this)
    this.state = {
      temp: '--',
      condition: '--'
    }
  }

  componentDidMount() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=imperial&appid=f21c60eaf4b3735aaa9a0c7dff67b7a4`)
    .then(response => response.json())
    .then(this.updateCurrent)
  }

  updateCurrent(weatherData) {
    this.setState({
      temp: Math.round(weatherData.main.temp),
      condition: weatherData.weather[0].description
    })
  }

  render() {
    return <div>
      <Header />
      <main>
        <h1>{this.state.temp}&deg;</h1>
        <h3>{this.state.condition}</h3>
      </main>
      <Nav />
    </div>
  }
}

export default Current
