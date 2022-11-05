import React from 'react'
import classNames from 'classnames'

export default function Heading2({ className, children, ...rest }) {
  return (
    <h2
      className={classNames(
        'h5 text-black text-5xl text-md font-extrabold mt-4 mb-8',
        className,
      )}
      {...rest}
    >
      {children}
    </h2>
  )
}
