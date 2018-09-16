import * as React from 'react'
import { Link } from 'react-router-dom'
export default function Lesson(props) {
  return (
    <li className='timeline-item'>
      <div className='timeline-badge bg-red'>
      </div>
      <h4 className='mb-0'>
      <Link to={`/courses/${props.courseId}/lessons/${props.id}`}>
        {props.title}
      </Link>
      </h4>
    </li>
  )
}
