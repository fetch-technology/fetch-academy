import * as React from 'react'
import { Link } from 'react-router-dom'

export default class ExpandCourse extends React.Component {
  render() {
    if(!this.props.courseId) {
      return <p>This course is not in Fetch Academy</p>
    }
    return (
      <div className='card-footer'>
        <ul className='list-unstyled leading-loose ml-5'>
          <li className=''>
            <i className='fe fe-align-justify mr-5'></i>
            <Link to={`/courses/${this.props.courseId}`} className='font-weight-bold'>
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