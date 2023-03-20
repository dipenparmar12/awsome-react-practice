/**
 *
 * @param {*} data
 * @param {*} fontSize
 * @param  {...any} rest
 */
function printJson(data, fontSize = 14, ...rest) {
  return (
    <pre
      style={{
        color: '#000',
        fontSize: fontSize + 'px',
        borderBottom: '1px solid red',
        marginBottom: '5px',
      }}
      {...rest}
    >
      {JSON.stringify(data, null, 4)}
    </pre>
  )
}

export default printJson
