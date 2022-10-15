/* eslint-disable no-return-assign */
/* eslint-disable prefer-const */

import React, { useCallback, useEffect, useRef, useState } from 'react'
import JsonPrint from './JsonPrint'

function windowSizes() {
  const contentWidth =
    [...document.body.children].reduce(
      (a, el) => Math.max(a, el.getBoundingClientRect().right),
      0,
    ) - document.body.getBoundingClientRect().x

  return {
    windowWidth: document.documentElement.clientWidth,
    windowHeight: document.documentElement.clientHeight,
    pageWidth: Math.min(document.body.scrollWidth, contentWidth),
    pageHeight: document.body.scrollHeight,
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    pageX: document.body.getBoundingClientRect().x,
    pageY: document.body.getBoundingClientRect().y,
    screenX: -window.screenX,
    screenY: -window.screenY - (window.outerHeight - window.innerHeight),
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
    // ---

    scrollX: window.scrollX,
    scrollY: window.scrollY,
  }
}

const styles = {
  popup_box: {
    backgroundColor: 'rgb(226, 226, 226)',
    width: '150px',
    height: '180px',
    borderRadius: '2px',
    padding: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '100px',
  },
}

export default function WindowsCagePopOver() {
  const [sizes, setSizes] = useState(windowSizes)
  const [position, setPosition] = useState({ left: 0, top: 0 })
  const popupBoxRef = useRef(null)

  const popupBoxWidth = popupBoxRef?.current?.offsetWidth || 0
  const popupBoxHeight = popupBoxRef?.current?.offsetHeight || 0

  React.useEffect(() => {
    function handleMouseMove(e) {
      let left = e.pageX
      let top = e.pageY
      setPosition({ left, top })
      setSizes(windowSizes())
    }

    document.addEventListener('mousemove', handleMouseMove, {})
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div style={{ height: '120vh', width: '120vw' }}>
      <h1>Div can not move outside of window</h1>
      <div
        // className="popup_box"
        ref={(res) => (popupBoxRef.current = res)}
        style={{
          ...styles.popup_box,
          // top: position.top,
          // left: position.left,
          // backgroundColor:
          //   position.left + popupBoxWidth > sizes.windowWidth ? 'red' : '',
          // color:
          //   position.top + popupBoxHeight > sizes.windowHeight ? 'white' : '',

          top:
            position.top + popupBoxHeight > sizes.windowHeight + sizes.scrollY
              ? sizes.windowHeight + sizes.scrollY - popupBoxHeight
              : position.top,

          left:
            position.left + popupBoxWidth > sizes.windowWidth + sizes.scrollX
              ? sizes.windowWidth + sizes.scrollX - popupBoxWidth
              : position.left,
        }}
      >
        ---
        <br />
        Left + W: {position.left + popupBoxWidth} <br />
        Top + H: {position.top + popupBoxHeight} <br />
        ---
        <br />
        left: {position.left} <br />
        Top: {position.top} <br />
      </div>

      <div>
        <JsonPrint data={[position]} />
        <JsonPrint
          data={{
            width: popupBoxRef?.current?.offsetWidth,
            height: popupBoxRef?.current?.offsetHeight,

            MaxTop: sizes.windowHeight + sizes.scrollY,
            MaxLeft: sizes.windowWidth + sizes.scrollX,
          }}
        />
        <JsonPrint data={[sizes]} />
      </div>
    </div>
  )
}
