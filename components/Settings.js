import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import Header from './Header'
import Nav from './Nav'

import classAutoBind from 'react-helpers/dist/classAutoBind'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'

class Settings extends Component {
  constructor(props) {
    super(props)
    classAutoBind(this)
    this.state = sharedState()
  }

  componentDidMount() {
    attachSharedState(this)
  }

  componentWillUnmount() {
    detachSharedState(this)
  }

  saveCity() {
    localStorage.setItem('city', this.state.city)
    alert('Saved!')
    browserHistory.push('/')
  }

  render() {
    return <div>
      <Header />
      <main>
        <br /><br />
        <input type="text" className="form-control" onChange={(e) => sharedState({city:e.target.value.replace(', ', ',')})} value={this.state.city} placeholder="City, 2-Digit Country" /><br />
        <button className="btn btn-success btn-block" onClick={this.saveCity}>Save</button>
      </main>
      <Nav />
    </div>
  }
}

export default Settings
