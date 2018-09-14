import * as React from 'react'

export default function LessonContent(props) {
  return (
    <div className='col-lg-9'>
      <div className='card'>
        <div className='card-body'>
          <div className='text-wrap p-lg-6'>
            {props.textRef && <div>
              <h2 ref={props.textRef}>Text</h2>
              <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
            </div>}
            {props.videoRef && <h2 ref={props.videoRef}>Videos</h2>}
            {props.qAwnsRef && <h2 ref={props.qAwnsRef}>Questions</h2>}
            {props.fileRef && <h2 ref={props.fileRef}>Attachment</h2>}
          </div>
        </div>
      </div>
    </div>
  )
}