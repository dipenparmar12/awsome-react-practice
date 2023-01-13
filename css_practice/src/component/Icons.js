import React from 'react'
import '../base/config.css'
import './icons/heart.css'
import './icons/download.css'
import './icons/clock.css'
import './icons/wifi.css'
import './icons/search.css'
import Tabs from '../reactive/tab/Tabs';

const Icons = (props) => {

  // React.useEffect(() => {
  //   console.log("Icons props::", props)
  // })

  return (
      <>
        <div className='tabContainer morpichh center '>
          <Tabs active={'name'}>
            <div data-tabName={'download'}>
              <div className='download'/>
            </div>
            <div data-tabName={'clock'}>
              <div className='clock'/>
            </div>
            <div data-tabName={'wifi'}>
              <div className='wifi'/>
            </div>
            <div data-tabName={'search'}>
              <div className="search"/>
            </div>
            <div data-tabName={'heart'}>
              <div className='heart'/>
            </div>
          </Tabs>
        </div>
      </>
  )
}

export default Icons

// Ref: https://tobiasahlin.com/spinkit/
