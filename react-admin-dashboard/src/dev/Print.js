import React from 'react'

export default function Print({
  data,
  className,
  style,
  maxHeight,
  tab = 2,
  children,
  ...rest
}) {
  return (
    <div
      className={`my-2 text-gray-500 dark:text-gray-200 overflow-x-hidden overflow-y-auto  ${className}`}
      style={{ maxHeight, ...style }}
      {...rest}
    >
      <pre>{JSON.stringify(data || children, null, tab)}</pre>
    </div>
  )
}

// <Print maxHeight={'300px'}>{State}</Print>
