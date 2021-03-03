import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <div className='sidebar_item'>
            <Link to={'/'}> Posts </Link>
          </div>
        </li>
        <li>
          <div className='sidebar_item'>
            <Link to={'/create'}>Add New Post</Link>
          </div>
        </li>
        <li>
          <div className='sidebar_item'>
            <Link to={'/test'}>Test</Link>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
