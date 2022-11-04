import React from 'react'

function TableExtendable() {
  const [users, setUsers] = React.useState([])

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setUsers(users.splice(0, 3)))
  }, [])

  return (
    <>
      <div>
        <h1 className="text-2xl">User List Table Extendable</h1>

        <table className="center">
          <thead>
            <tr>
              <th> # </th>
              <th> ID </th>
              <th> Name </th>
              <th> UserName </th>
            </tr>
          </thead>

          <tbody className="text-sm font-normal text-gray-700 dark:text-gray-100">
            {users?.map?.((row, i) => (
              <TableRow key={'table' + row?.name} data={row} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default TableExtendable

function TableRow({ data, isReferral, ...props }) {
  const [visible, setVisible] = React.useState(false)

  return (
    <>
      <tr className="py-10 border-t border-gray-200 dark:border-gray-700 dark:border-opacity-30  hover:bg-gray-100 dark:hover:bg-minthnt-250 ">
        <td
          className="px-4 py-4 cursor-pointer"
          onClick={() => setVisible(!visible)}
        >
          {visible ? '-' : '+'}
        </td>

        <td className="px-4 py-4">{data?.id}</td>
        <td className="px-4 py-4"> {data?.name}</td>
        <td className="px-4 py-4"> {data?.username}</td>
      </tr>

      <tr>
        <td
          colSpan={Object.keys(data || {}).length}
          className={(visible === false && ' hidden  ') + ' row_transition'}
        >
          <div
            className="text-left ml-2 mt-1 bg-gray-200"
            style={{
              minHeight: '100px',
              maxWidth: '300px',
            }}
          >
            <div>
              <pre style={{ overflowX: 'scroll' }}>
                {JSON.stringify(data, null, 4)}
              </pre>
            </div>
          </div>
        </td>
      </tr>
    </>
  )
}
