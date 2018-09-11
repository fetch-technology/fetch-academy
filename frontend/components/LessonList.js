import * as React from 'react'
import Lesson from './Lesson'
import LessonResources from './LessonResources'
export default function LessonList(props) {
  return (
    <div className='col-lg-3 order-lg-1'>
      <div className='card'>
        <div className='card-body'>
          <ul className='timeline'>
            <Lesson></Lesson>
            <LessonResources myRef = {props.fileRef} onScrollToElement={props.onScrollToElement}></LessonResources>
            <LessonResources myRef = {props.textRef} onScrollToElement={props.onScrollToElement}></LessonResources>
            <Lesson></Lesson>
          </ul>
        </div>
      </div>
    </div>
  )
}