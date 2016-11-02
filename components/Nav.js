import React from 'react'
import { Link } from 'react-router'

const Nav = (props) => <footer>
  <br /><br /><br />
  <Link to="/" className="btn btn-default">Current</Link>
  <Link to="/forecast" className="btn btn-default">Forecast</Link>
  <Link to="/settings" className="btn btn-default">Settings</Link>
</footer>

export default Nav
