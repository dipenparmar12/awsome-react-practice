import React from 'react'
import classNames from 'classnames'

export default function Heading4({ className, children, ...rest }) {
  return (
    <h5
      className={classNames(
        'h5 text-black  text-2xl font-extrabold',
        className,
      )}
      {...rest}
    >
      {children}
    </h5>
  )
}
