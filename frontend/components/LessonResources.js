import * as React from 'react'

export default function LessonResources(props) {
  return (
    <li className='timeline-item' onClick={() => { props.onScrollToElement(props.myRef) }}
      style={{ cursor: 'pointer' }}
    >
      <div className='timeline-badge bg-gray'>
      </div>
      {
        props.resourceType === 'text' &&
        <div>
          <i className='fe fe-file-text ml-3'></i> Text
        </div>
      }
      {props.resourceType === 'file' &&
        <div>
          <i className='fe fe-paperclip ml-3'></i> File
      </div>
      }
      {props.resourceType === 'questionAnswer' &&
        <div>
          <i className='fa fa-question-circle-o ml-3'></i> Q & A
        </div>
      }
      {props.resourceType === 'video' &&
        <div>
          <i className='fe fe-video ml-3'></i> Video
        </div>
      }
    </li>
  )
}
