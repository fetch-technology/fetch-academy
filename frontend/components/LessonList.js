import * as React from 'react'
import Lesson from './Lesson'
import LessonResources from './LessonResources'
import { Expand } from './Expand'
export default function LessonList(props) {
  const { lessons, insertAt } = props
  let renderLessonList = lessons.map((lesson, i) => {
    return <Lesson id={lesson.id} courseId={props.courseId} title={lesson.title} key={i}></Lesson>
  })
  renderLessonList.splice(insertAt + 1, 0,
    <React.Fragment key={`${insertAt}-res`}>
      {lessons[insertAt].hasText && <LessonResources myRef={props.textRef} resourceType='text' onScrollToElement={props.onScrollToElement}></LessonResources>}
      {lessons[insertAt].hasVideo && <LessonResources myRef={props.fileRef} resourceType='video' onScrollToElement={props.onScrollToElement}></LessonResources>}
      {lessons[insertAt].hasQA && <LessonResources myRef={props.qAwnsRef} resourceType='qAwns' onScrollToElement={props.onScrollToElement}></LessonResources>}
      {lessons[insertAt].hasAtt && <LessonResources myRef={props.fileRef} resourceType='file' onScrollToElement={props.onScrollToElement}></LessonResources>}
    </React.Fragment>
  )
  return (
    <div className={props.className} >
      <div className='card'>
        <div className='card-body'>
          <ul className='timeline'>
            {renderLessonList}
          </ul>
        </div>
      </div>
    </div>
  )
}