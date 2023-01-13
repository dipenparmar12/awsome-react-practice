import classNames from 'classnames'
import React from 'react'

export default function Hr({ className, ...rest }) {
  return <div className={classNames('hr', className)} {...rest} />
}
