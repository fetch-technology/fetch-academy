import * as React from 'react'
import * as cx from 'classnames'

export const Expand = (props)=>{
  return (
    <div className={cx({ expand: props.expanding, 'card-footer': props.isCard })}>
      {props.children}
    </div>
  )
}



