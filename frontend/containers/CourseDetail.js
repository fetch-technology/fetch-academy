import * as React from 'react'
import { animateScroll } from 'react-scroll'
import { Redirect } from 'react-router-dom'
import LessonContent from '../components/LessonContent'
import LessonList from '../components/LessonList'
import { API_URL, ggAuth } from '../config'
import * as _ from 'lodash'
export default class CourseDetail extends React.Component {
  constructor(props) {
    super(props)
    this.fileRef = React.createRef()
    this.textRef = React.createRef()
    this.videoRef = React.createRef()
    this.qAwnsRef = React.createRef()
    this.state = {
      lessonCount: 0,
      courseTitle: '',
      lessons: null
    }
  }
  onScrollToElement = (ref) => {
    animateScroll.scrollTo(ref.current.offsetTop)
  }
  componentDidMount() {
    const { lessonId, courseId } = this.props.match.params
    const { isLoading } = this.props
    if (!isLoading && ggAuth.isSignedIn.get()) {
      fetch(`${API_URL}/academy/api/v1/user-courses/${courseId}`, {
        credentials: 'include'
      })
        .then(res => res.json())
        .then(res => {
          this.setState({ lessonCount: res.lesson_count, courseTitle: res.title })
          if (res.lessons.length == 0) {
            this.setState({ lessons: [] })
            return
          }

          let fetchedLessons = res.lessons.map(lesson => {
            return lesson.user_lessons[0].lesson
          })
          this.setState({ lessons: fetchedLessons })
          if (!lessonId) {
            this.props.history.push(`./${res.lessons[0].user_lessons[0].id}`)
            return
          }
          else {
            fetch(`${API_URL}/academy/api/v1/lessons/${lessonId}`,
              {
                credentials: 'include',
                method: 'GET'
              }
            )
              .then((res) => res.json())
              .then((res) => {
                this.setState({ lesson: res })
              })
          }
        })
    }

  }
  render() {
    const { courseTitle, lessons } = this.state
    const { courseId } = this.props.match.params
    const { lessonId } = this.props.match.params
    const { isLoading } = this.props

    if (!isLoading && !ggAuth.isSignedIn.get()) {
      return (
        <Redirect to='/login' />
      )
    }

    if (!lessons || !lessonId) {
      return (
        <div>
          LOADING.........
        </div>
      )
    }

    const curLessonIndx = _.findIndex(lessons, (lesson) => {

      return lesson.id === +lessonId
    })
    const renderLessons = lessons.map(lesson => {
      return {
        id: lesson.id, title: lesson.title, hasText: lesson.context != ''
        , hasQA: lesson.exercises != '', hasAtt: lesson.files.length > 0
        , hasVideo: lesson.videos.length > 0
      }
    })
    return (
      <div className='container mt-5'>
        <div className='page-header'>
          <h1 className='page-title'>
            {courseTitle}
            {lessons.length > 0 && <div className='text-muted'>{lessons[curLessonIndx].title}</div>}
          </h1>
        </div>
        <div className='row'>
          {lessons.length > 0 ?
            <React.Fragment><LessonList className='col-lg-3 order-lg-1 sticky-top align-self-start'
              courseId={courseId}
              lessons={renderLessons} insertAt={curLessonIndx}
              fileRef={this.fileRef} textRef={this.textRef} videoRef={this.videoRef} qAwnsRef={this.qAwnsRef}
              onScrollToElement={this.onScrollToElement} ></LessonList>
              <LessonContent content={lessons[curLessonIndx].content} videos={lessons[curLessonIndx].videos}
                questionAwnser={lessons[curLessonIndx].exercises} attachments={lessons[curLessonIndx].files}
                fileRef={this.fileRef} textRef={this.textRef} videoRef={this.videoRef} qAwnsRef={this.qAwnsRef}>
              </LessonContent>
            </React.Fragment>
            : 'There no available Lessons'}
        </div>
      </div>
    )
  }
}
