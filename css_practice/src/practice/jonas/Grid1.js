import React from 'react'
import './grid.scss'
import GridTwoSection from './GridTwoSection'

const Grid1 = () => {
  return (
    <>
      {/* Method 1 */}
      {/* <div className={'grid w-1200 center-h py-2'}>
        <header className='header'> Header </header>
        <div className='box'>1</div>
        <div className='box'>2</div>
        <div className='box'>3</div>
        <div className='sidebar'>Sidebar</div>
        <div className='content'>Content</div>
        <footer className='footer'>footer</footer>
      </div> */}
      {/* Method 2 */}
      {/* <div className={'grid-names w-1200 center-h py-2'}>
        <header className='header'> Header </header>
        <div className='box'>1</div>
        <div className='box'>2</div>
        <div className='box'>3</div>
        <div className='sidebar'>Sidebar</div>
        <div className='content'>Content</div>
        <footer className='footer'>footer</footer>
      </div> */}
      <GridTwoSection />
    </>
  )
}

export default Grid1
