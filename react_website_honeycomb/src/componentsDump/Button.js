import classNames from 'classnames'
import React, { Component } from 'react'

export default function Button({ className, children, ...rest }) {
  return (
    <p
      className={classNames(
        'inline-flex w-full items-center justify-center border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white sm:w-auto',
        className,
      )}
      {...rest}
    >
      {children}
    </p>
  )
}
