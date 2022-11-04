import React from 'react'

export const JsonPrint = React.memo(
  ({ data, fontSize = 14, color = '#000', style = {}, ...rest }) => (
    <pre
      style={{
        color: color,
        fontSize: fontSize + 'px',
        borderBottom: '1px solid red',
        marginBottom: '5px',
        maxHeight: '100px',
        maxWidth: 'initial',
        overflowY: 'scroll',
        textAlign: 'left',
        ...style,
      }}
      {...rest}
    >
      {JSON.stringify(data, null, 2)}
    </pre>
  ),
)
