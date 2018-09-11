import * as React from 'react'

export default function LessonResources(props) {
  return (
    <li className='timeline-item' onClick={() => { props.onScrollToElement(props.myRef) }}
      style={{ cursor: 'pointer' }}
    >
      <div className='timeline-badge bg-gray'>
      </div>
      <p className='pl-5 mb-0'>agagasf</p>
    </li>
  )
}
