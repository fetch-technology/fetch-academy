import * as React from 'react'
import { animateScroll } from 'react-scroll'
import LessonContent from '../components/LessonContent'
import LessonList from '../components/LessonList'
import { API_URL } from '../config'
export default class CourseDetail extends React.Component {
  constructor(props) {
    super(props)
    this.fileRef = React.createRef()
    this.textRef = React.createRef()
    this.videoRef = React.createRef()
    this.qAwnsRef = React.createRef()
    this.state = {
      lesson: null
    }
  }
  onScrollToElement = (ref) => {
    animateScroll.scrollTo(ref.current.offsetTop)
  }
  componentDidMount() {
    const { lessonId } = this.props.match.params

    fetch(`${API_URL}/academy/api/v1/lessons/${lessonId}`,
      {
        credentials: 'include',
        method: 'GET'
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        this.setState({ lesson: res })
      })
  }
  render() {
    const { lesson } = this.state

    if (!lesson) {
      return (
        <div>
          LOADING.........
        </div>
      )
    }
    return (
      <div className='container mt-5'>
        <div className='page-header'>
          <h1 className='page-title'>
            Course name ......
        	</h1>
        </div>
        <div className='row'>
          <LessonList className='col-lg-3 order-lg-1 sticky-top align-self-start' fileRef={this.fileRef} textRef={this.textRef} onScrollToElement={this.onScrollToElement}></LessonList>
          <LessonContent content={lesson.content} fileRef={this.fileRef} textRef={this.textRef}></LessonContent>
        </div>
      </div>
    )
  }
}
