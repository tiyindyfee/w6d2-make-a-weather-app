import React from 'react'
import moment from 'moment'
import { Link } from 'react-router'

import { sharedState } from 'react-helpers/dist/sharedState'

const Header = (props) => {
  var date = moment().format('LLL')
  var city = sharedState().city.split(',')[0]

  return <header>
    <h3 className="text-uppercase">{city}</h3>
    <span>{date}</span>
  </header>
}

export default Header
