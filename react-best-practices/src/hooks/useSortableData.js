import React from 'react'
import obj from '../utils/obj'
import Assertion from '../utils/Assertion'

export const isFunction = Assertion.isFunction

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config)

  const sortedItems = React.useMemo(() => {
    let sortableItems = isFunction(items) ? [...items()] : [...items]
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1
        }
        return 0
      })
    }
    return sortableItems
  }, [items, sortConfig])

  const requestSort = (key) => {
    let direction = 'ascending'
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending'
    }
    setSortConfig({ key, direction })
  }

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return
    }
    return sortConfig.key === name ? sortConfig.direction : undefined
  }

  // console.log(
  //   'useSortableData.js::34 sortedItems, requestSort, sortConfig',
  //   sortedItems,
  //   requestSort,
  //   sortConfig,
  // )
  return { items: sortedItems, requestSort, sortConfig, getClassNamesFor }
}

export default useSortableData

export const TableSortExample = () => {
  const [users, setUsers] = React.useState([])
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setUsers(users.splice(0, 4)))
  }, [])

  const { items, requestSort, sortConfig, getClassNamesFor } = useSortableData(
    users,
  )
  // const { items, requestSort, sortConfig } = useSortableData(() =>
  //   users.map((el) => flattenObject(el)),
  // )

  const tableHeadings = {
    id: 'ID',
    name: 'name',
    'address.city': 'City',
    'company.name': 'Company',
  }

  return (
    <>
      <h1 className="text-2xl"> Sortable Table </h1>
      <table className="center">
        <thead>
          <tr>
            {Object.entries(tableHeadings).map(([key, title], i) => {
              return (
                <th
                  key={'heading__' + key}
                  onClick={() => requestSort(key)}
                  className={`${getClassNamesFor(key)} mx-2 p-3`}
                >
                  {title}
                  {sortConfig?.key === key
                    ? sortConfig?.direction === 'ascending'
                      ? ' ↑'
                      : ' ↓'
                    : ' '}
                </th>
              )
            })}
          </tr>
        </thead>

        <tbody className="text-sm font-normal text-gray-700 dark:text-gray-100">
          {items?.map?.((row, i) => (
            <TableRow key={'row__' + row?.name} data={row} />
          ))}
        </tbody>
      </table>
    </>
  )
}

function TableRow({ data, ...props }) {
  return (
    <>
      <tr className="text-left py-10 border-t border-gray-200 hover:bg-gray-100 ">
        <td className="px-4 py-4">{data['id']}</td>
        <td className="px-4 py-4">{data['name']}</td>
        <td className="px-4 py-4">{obj.get(data, 'address.city')}</td>
        <td className="px-4 py-4">{obj.get(data, 'company.name')}</td>
      </tr>
    </>
  )
}
