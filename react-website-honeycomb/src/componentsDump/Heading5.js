import React from 'react'
import classNames from 'classnames'

export default function Heading5({ className, children, ...rest }) {
  return (
    <h5
      className={classNames('h5 text-secondary-1 text-md font-bold', className)}
      {...rest}
    >
      <span className="hyphen"> </span>
      {children}
    </h5>
  )
}
