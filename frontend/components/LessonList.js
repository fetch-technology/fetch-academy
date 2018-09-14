import * as React from 'react'
import Lesson from './Lesson'
import LessonResources from './LessonResources'
export default function LessonList(props) {
  return (
    <div className= {props.className} >
      <div className='card'>
        <div className='card-body'>
          <ul className='timeline'>
            <Lesson></Lesson>
            <LessonResources myRef = {props.textRef} resourceType= 'text' onScrollToElement={props.onScrollToElement}></LessonResources>
            <LessonResources myRef = {props.fileRef} resourceType= 'video' onScrollToElement={props.onScrollToElement}></LessonResources>
            <Lesson></Lesson>
          </ul>
        </div>
      </div>
    </div>
  )
}