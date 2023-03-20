import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

export function Users() {
  return (
    <Fragment>
      <div>
        Users:
        <div>
          <Outlet />
        </div>
      </div>
    </Fragment>
  )
}
