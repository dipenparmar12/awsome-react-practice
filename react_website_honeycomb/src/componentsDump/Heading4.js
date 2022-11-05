import React from 'react'
import classNames from 'classnames'

export default function Heading4({ className, children, ...rest }) {
  return (
    <h4
      className={classNames('h4   text-xl font-extrabold', className)}
      {...rest}
    >
      {children}
    </h4>
  )
}
