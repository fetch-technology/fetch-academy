import * as React from 'react'
import { Link } from 'react-router-dom'
export default function LessonContent(props) {
  return (
    <div className='col-lg-9'>
      <div className='card'>
        <div className='card-body'>
          <div className='text-wrap p-lg-6'>
            {props.content && <div>
              <h2 ref={props.textRef}>Text</h2>
              <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
            </div>}
            {props.videos.length > 0 &&
              <div>
                <h2 ref={props.videoRef}>Videos</h2>
                {
                  props.videos.map((video, i) => {
                    return <p key={i}>Video {i + 1}: {video}</p>
                  })
                }
              </div>
            }
            {
              props.questionAwnser !== '' &&
              <div>
                <h2 ref={props.qAwnsRef}>Questions</h2>
                <div dangerouslySetInnerHTML={{ __html: props.questionAwnser }}></div>
              </div>
            }
            {props.attachments.length > 0 &&
              <div>
                <h2 ref={props.fileRef}>Attachment</h2>
                {props.attachments.map((att,i) => {
                  return <a className='tag' href={att} key={i}>File {i+1}</a>
                })}
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}