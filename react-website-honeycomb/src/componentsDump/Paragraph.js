import classNames from 'classnames'
import React from 'react'

export default function Paragraph({ className, children, ...rest }) {
  return (
    <p
      className={classNames(
        'paragraph text-gray-500/90 text-base font-semibold',
        className,
      )}
      {...rest}
    >
      {children}
    </p>
  )
}
