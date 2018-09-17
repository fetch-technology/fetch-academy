import * as React from 'react'
import { Link } from 'react-router-dom'
import { Expand } from '../components/Expand'
import { API_URL } from '../config'

export default class ExpandedCourses extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lessons: ''
    }
  }
  componentDidMount() {
    fetch(`${API_URL}/academy/api/v1/programs/${this.props.programId}/lessons`, {
      mode: "cors",
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ lessons: res })
      })
  }
  render() {
    const { expanding } = this.props
    const { lessons } = this.state

    if (!this.props.courseId) {
      return <p>This course is not in Fetch Academy</p>
    }

    return (
      <Expand expanding={expanding} isCard={true}>
        <ul className='list-unstyled leading-loose ml-5'>
          <li className=''>
            <i className='fe fe-align-justify mr-5'></i>
            <Link to={`/courses/${this.props.courseId}`} className='font-weight-bold'>
              Course Overview
          </Link>
          </li>
          {
            lessons.length === 0 ? (
              <p>No lesson learn </p>
            ) : (
                lessons.map((lesson, i) => {
                  return (
                    <li key={i}>
                      <i className='fe fe-chevron-right mr-5'></i>
                      <Link to={`/courses/${this.props.courseId}/lessons/${lesson.id}`} className='font-weight-bold'>
                        {lesson.title}
                      </Link>
                    </li>
                  )
                })
              )
          }
        </ul>
      </Expand>
    )
  }
}