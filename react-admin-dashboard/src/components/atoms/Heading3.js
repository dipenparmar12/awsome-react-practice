import classNames from 'classnames'
import React, { Children } from 'react'

export default function Heading3({ className, children, ...rest }) {
  return (
    <h3 className={classNames('heading_3', className)} {...rest}>
      {children}
    </h3>
  )
}
