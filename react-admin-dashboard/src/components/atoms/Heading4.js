import classNames from 'classnames'
import React, { Children } from 'react'

export default function Heading4({ className, children, ...rest }) {
  return (
    <h4 className={classNames('heading_4', className)} {...rest}>
      {children}
    </h4>
  )
}
