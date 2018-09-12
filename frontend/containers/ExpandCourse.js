import * as React from 'react'
import { Link } from 'react-router-dom'

export default class Expand extends React.Component {
  constructor() {
  }

  render() {
    return (
      <div className='card-footer'>
        <Link to='/courses/:id' className='font-weight-light'>
          Course Overview

        </Link>
      </div>
    )
  }
}