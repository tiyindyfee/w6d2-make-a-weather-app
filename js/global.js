import { Router, Route, Link, browserHistory } from 'react-router'
import React from 'react'
import ReactDOM from 'react-dom'

import Current from '../components/Current'
import Forecast from '../components/Forecast'
import Settings from '../components/Settings'

// Setup initial shared state
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'

var savedCity = localStorage.getItem('city')
sharedState({
  city: savedCity || 'Indianapolis,US'
})

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Current} />
    <Route path="/forecast" component={Forecast}/>
    <Route path="/settings" component={Settings} />
  </Router>
), document.getElementById('app'))
