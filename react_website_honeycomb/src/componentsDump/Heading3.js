import React from 'react'
import classNames from 'classnames'

export default function Heading3({ className, children, ...rest }) {
  return (
    <h3
      className={classNames(
        'h3 text-black  text-2xl font-extrabold',
        className,
      )}
      {...rest}
    >
      {children}
    </h3>
  )
}
