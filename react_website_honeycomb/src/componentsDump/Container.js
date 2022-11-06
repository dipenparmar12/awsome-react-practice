import classNames from 'classnames'
import React from 'react'

export default function Container({
  className,
  classNameContainer,
  children,
  ...rest
}) {
  return (
    <section
      className={classNames('container mx-auto', classNameContainer)}
      {...rest}
    >
      <div
        className={classNames(
          'px-8 md:px-28 mx-auto w-full sm:w-auto',
          className,
        )}
      >
        {children}
      </div>
    </section>
  )
}
