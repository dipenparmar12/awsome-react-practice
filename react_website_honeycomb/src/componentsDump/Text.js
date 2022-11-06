import classNames from 'classnames'
import React from 'react'

export default function Text({ className, children, ...rest }) {
  return (
    <p
      className={classNames(
        'paragraph text-gray-500/90 font-semibold md:leading-loose text-lg ',
        className,
      )}
      {...rest}
    >
      {children}
    </p>
  )
}
