import * as React from 'react'
import * as cx from 'classnames'

export const Expand = (props)=>{
  return (
    <div className={cx('card-footer', { expand: props.expanding })}>
      {props.children}
    </div>
  )
}



