import React, { Component } from 'react'
import Header from './Header'
import Nav from './Nav'
import moment from 'moment'

import classAutoBind from 'react-helpers/dist/classAutoBind'

class Forecast extends Component {
  constructor(props) {
    super(props)
    classAutoBind(this)
    this.state = {
      days: []
    }
  }

  componentDidMount() {
    fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.city}&cnt=5&units=imperial&appid=f21c60eaf4b3735aaa9a0c7dff67b7a4`)
    .then(response => response.json())
    .then(this.updateForecast)
  }

  updateForecast(weatherData) {
    //console.log(weatherData)

    var days = weatherData.list.map((day) => {

      var date = moment.unix(day.dt).format('ddd')
      var temp = Math.round(day.temp.day)
      var condition = day.weather[0].description

      return {
        date: date,
        temp: temp,
        condition: condition
      }

    })

    //console.log(days)

    this.setState({
      days: days
    })
  }

  render() {
    var forecast = this.state.days.map((day, i) => <div className="row" key={i}>
      <div className="col-xs-12"><strong>{day.date}</strong> {day.temp} &mdash; {day.condition}</div>
    </div>

    return <div>
      <Header />
      <main>
        {forecast}
      </main>
      <Nav />
    </div>
  }
}

export default Forecast
