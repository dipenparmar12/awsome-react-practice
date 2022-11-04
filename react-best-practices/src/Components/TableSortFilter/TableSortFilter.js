import React from 'react'
import { JsonPrint } from '../JsonPrint'
import { filterRows, paginateRows, sortRows } from './TableSortFilterUtils'

/**
 * @src: https://www.taniarascia.com/front-end-tables-sort-filter-paginate/
 */
function TableSortFilter() {
  const [users, setUsers] = React.useState([])

  const columns = [
    { accessor: 'id', label: 'ID' },
    { accessor: 'firstname', label: 'Name' },
    { accessor: 'birthday', label: 'DOB' },
    {
      accessor: 'is_admin',
      label: 'Is Admin',
      format: (value) => (value ? '✔️' : '✖️'),
    },
    // { accessor: 'start_date', label: 'Start Date' },
  ]

  React.useEffect(() => {
    fetch(
      'https://fakerapi.it/api/v1/persons?_quantity=50&_gender=male&_birthday_start=2005-01-01',
    )
      .then((response) => response.json())
      .then((results) => {
        return results?.data?.map((row, i) => ({
          id: i,
          firstname: row?.firstname + ' ' + row?.lastname,
          birthday: row?.birthday,
          gender: row?.gender,
          is_admin: row?.firstname?.length % 2,
        }))
      })
      .then((users) => setUsers(users))
    // .then((users) => setUsers(users.splice(0, 10)))
  }, [])

  return (
    <>
      <h1 className="text-2xl"> Table sort, filter and pagination (client) </h1>
      <div className="text-sm center">
        <TableApp columns={columns} rows={users} />
      </div>
    </>
  )
}

export default TableSortFilter

function TableApp({ columns, rows }) {
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const [activePage, setActivePage] = React.useState(1)
  const [filters, setFilters] = React.useState({})
  const [sort, setSort] = React.useState({ order: 'desc', orderBy: 'id' })

  const filteredRows = React.useMemo(() => filterRows(rows, filters), [
    rows,
    filters,
  ])

  const sortedRows = React.useMemo(() => sortRows(filteredRows, sort), [
    filteredRows,
    sort,
  ])

  const calculatedRows = paginateRows(sortedRows, activePage, rowsPerPage)

  const count = sortedRows.length
  const totalPages = Math.ceil(count / rowsPerPage)

  const handleSearch = (value, accessor) => {
    setActivePage(1)
    if (value) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [accessor]: value,
      }))
    } else {
      setFilters((prevFilters) => {
        const updatedFilters = { ...prevFilters }
        delete updatedFilters[accessor]
        return updatedFilters
      })
    }
  }

  const handleSort = (accessor) => {
    setActivePage(1)
    setSort((prevSort) => ({
      order:
        prevSort.order === 'asc' && prevSort.orderBy === accessor
          ? 'desc'
          : 'asc',
      orderBy: accessor,
    }))
  }

  const clearAll = () => {
    setActivePage(1)
    setRowsPerPage(5)
    setSort({ order: 'asc', orderBy: 'id' })
    setFilters({})
  }

  return (
    <>
      <div>
        <table className="center text-center w-1/2 ">
          <thead>
            <tr className="py-5 border-t border-gray-200 dark:border-gray-700 dark:border-opacity-30  hover:bg-gray-100 dark:hover:bg-minthnt-250 ">
              {columns.map((column) => {
                const getSortIcon = () => {
                  if (column?.accessor === sort.orderBy) {
                    if (sort.order === 'asc') {
                      return '⬆️'
                    }
                    return '⬇️'
                  } else {
                    return '️↕️'
                  }
                }

                return (
                  <th key={column.accessor} className="text-center px-4 py-2">
                    <span>{column.label}</span>
                    <button
                      className="ml-2 text-sm"
                      onClick={() => handleSort(column.accessor)}
                    >
                      {getSortIcon()}
                    </button>
                  </th>
                )
              })}
            </tr>
            <tr>
              {columns.map((column, _) => {
                return (
                  <th key={'column_' + _}>
                    <input
                      key={`${column.accessor}-search`}
                      type="search"
                      className="px-2 py-1"
                      placeholder={`Search ${column.label}`}
                      value={filters[column.accessor]}
                      onChange={(event) =>
                        handleSearch(event.target.value, column.accessor)
                      }
                    />
                  </th>
                )
              })}
            </tr>
          </thead>

          <tbody className="text-sm font-normal text-gray-700 dark:text-gray-100">
            {calculatedRows.map((row) => {
              return (
                <tr
                  key={row.id}
                  className=" border-t border-gray-200 dark:border-gray-700 dark:border-opacity-30  hover:bg-gray-100 dark:hover:bg-minthnt-250 "
                >
                  {columns.map((column) => {
                    if (column.format) {
                      return (
                        <td
                          key={column.accessor}
                          className="px-8 py-2 mx-2 mt-1 bg-gray-200"
                        >
                          {column.format(row[column.accessor])}
                        </td>
                      )
                    }
                    return <td key={column.accessor}>{row[column.accessor]}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>

        <Pagination
          activePage={activePage}
          count={count}
          totalPages={totalPages}
          setActivePage={setActivePage}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
        />

        <button onClick={clearAll}>
          <span rolo="pagi" aria-labelledby="button">
            {' '}
            Clear All 👇
          </span>
        </button>
      </div>

      <div>
        <JsonPrint
          data={{
            filters,
            activePage,
            totalPages,
            count,
            rowsPerPage,
            sort,
          }}
          className="center mt-2"
          style={{ maxHeight: '300px' }}
        />
      </div>
    </>
  )
}

const Pagination = ({
  activePage,
  count,
  totalPages,
  setActivePage,
  rowsPerPage,
  setRowsPerPage,
}) => {
  const beginning = activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1
  const end = activePage === totalPages ? count : beginning + rowsPerPage - 1

  return (
    <>
      <div className="pagination mt-5">
        <button
          disabled={activePage === 1}
          onClick={() => setActivePage(1)}
          className={[
            'mx-2',
            activePage === 1 && 'cursor-not-allowed bg-gray-300',
          ].join(' ')}
        >
          <span rolo="pagi" aria-labelledby="button">
            {' '}
            ⏮️ First{' '}
          </span>
        </button>

        <button
          disabled={activePage === 1}
          onClick={() => setActivePage(activePage - 1)}
          className={[
            'mx-2',
            activePage === 1 && 'cursor-not-allowed bg-gray-300',
          ].join(' ')}
        >
          <span rolo="pagi" aria-labelledby="button">
            {' '}
            ⬅️ Previous{' '}
          </span>
        </button>

        <button
          disabled={activePage === totalPages}
          onClick={() => setActivePage(activePage + 1)}
          className={[
            'mx-2',
            activePage === totalPages && 'cursor-not-allowed bg-gray-300',
          ].join(' ')}
        >
          <span rolo="pagi" aria-labelledby="button">
            {' '}
            Next ➡️{' '}
          </span>
        </button>

        <button
          disabled={activePage === totalPages}
          onClick={() => setActivePage(totalPages)}
          className={[
            'mx-2',
            activePage === totalPages && 'cursor-not-allowed bg-gray-300',
          ].join(' ')}
        >
          <span rolo="pagi" aria-labelledby="button">
            {' '}
            Last ⏭️{' '}
          </span>
        </button>

        <input
          type="number"
          min={3}
          onChange={(e) => setRowsPerPage(e.target.value)}
          value={rowsPerPage}
        />
      </div>

      <p className="mt-3">
        Page {activePage} of {totalPages}, Rows:{' '}
        {beginning === end ? end : `${beginning} - ${end}`} of {count}
      </p>
    </>
  )
}
