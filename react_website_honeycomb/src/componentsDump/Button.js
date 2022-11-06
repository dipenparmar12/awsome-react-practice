import classNames from 'classnames'
import React, { Component } from 'react'

export default function Button({ className, children, ...rest }) {
  return (
    <p
      className={classNames(
        'default_transition inline-flex w-full items-center justify-center border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white sm:w-auto cursor-pointer active:brightness-90 hover:shadow-lg active:shadow-md ',
        className,
      )}
      {...rest}
    >
      {children}
    </p>
  )
}
