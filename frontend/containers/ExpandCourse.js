import * as React from 'react'
import { Link } from 'react-router-dom'

export default class Expand extends React.Component {
  render() {
    if(!this.props.courseId) {
      return <p>This course is not in Fetch Academy</p>
    }
    return (
      <div className='card-footer'>
        <Link to={`/courses/${this.props.courseId}`} className='font-weight-light'>
          Course Overview

        </Link>
      </div>
    )
  }
}