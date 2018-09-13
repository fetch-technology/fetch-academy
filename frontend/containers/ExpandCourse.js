import * as React from 'react'
import { Link } from 'react-router-dom'

export default class Expand extends React.Component {
  constructor() {
  }

  render() {
    return (
      <div className='card-footer'>
        <ul className='list-unstyled leading-loose ml-5'>
          <li className=''>
            <i className='fe fe-align-justify mr-5'></i>
            <Link to='/courses/:id' className='font-weight-bold'>
              Course Overview
          </Link>
          </li>
          <li>
            <i className='fe fe-chevron-right mr-5'></i>
            <Link to='/courses/:id/lessons/1' className='font-weight-bold'>
              Lesson 1
          </Link>
          </li>
          <li>
          <i className='fe fe-chevron-right mr-5'></i>
            <Link to='/courses/:id/lessons/1' className='font-weight-bold'>
              Lesson 1
          </Link>
          </li>

        </ul>
      </div>
    )
  }
}