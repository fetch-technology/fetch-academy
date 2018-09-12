import * as React from 'react'
import { animateScroll } from 'react-scroll'
import LessonContent from '../components/LessonContent'
import LessonList from '../components/LessonList'

export default class CourseDetail extends React.Component {
  constructor(props) {
    super(props)
    this.fileRef = React.createRef()
    this.textRef = React.createRef()
    this.videoRef = React.createRef()
    this.qAwnsRef = React.createRef()
  }
  onScrollToElement = (ref) => {
    animateScroll.scrollTo(ref.current.offsetTop)
  }
  render() {
    return (
      <div className='container mt-5'>
        <div className='page-header'>
          <h1 className='page-title'>
            Course name ......
        	</h1>
        </div>
        <div className='row'>
          <LessonList fileRef={this.fileRef} textRef={this.textRef} onScrollToElement= {this.onScrollToElement}></LessonList>
          <LessonContent fileRef={this.fileRef} textRef={this.textRef}></LessonContent>
        </div>
      </div>
    )
  }
}
