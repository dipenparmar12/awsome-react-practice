import React from 'react'
import classNames from 'classnames'

export default function Heading2({ className, children, ...rest }) {
  return (
    <h2
      className={classNames(
        'h2 text-black text-4xl  md:text-5xl text-md font-extrabold mt-4 mb-8 md:leading-snug',
        className,
      )}
      {...rest}
    >
      {children}
    </h2>
  )
}
