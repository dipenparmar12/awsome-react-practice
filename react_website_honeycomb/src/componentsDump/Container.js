import classNames from 'classnames'
import React from 'react'

export default function Container({ className, children, ...rest }) {
  return (
    <section
      className={classNames(
        'container px-20 mx-auto w-full sm:w-auto',
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  )
}
