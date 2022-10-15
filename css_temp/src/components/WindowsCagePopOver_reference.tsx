// @src:  https://gitlab.leosidea.com/react-move-element/react-move-element/-/blob/main/react-move-element/src/components/RotatingElement.tsx
import React, { PropsWithChildren, useEffect, useRef } from 'react'

const getOffset = (el: {
  offsetLeft: number
  offsetTop: number
  scrollLeft: number
  scrollTop: number
  offsetParent: any
}) => {
  let _x = 0
  let _y = 0
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - el.scrollLeft
    _y += el.offsetTop - el.scrollTop
    el = el.offsetParent
  }
  return { top: _y, left: _x }
}

const getDegrees = (centerX: number, centerY: number) => {
  const radians = Math.atan2(centerX, centerY)
  return radians * (180 / Math.PI) * -1 + 180
}

const updateDirection = (centerX: number, centerY: number, logoRef: any) => {
  logoRef.current.style.transform =
    'rotate(' + getDegrees(centerX, centerY) + 'deg)'
}

const getCenters = (logoRef: any) => {
  const pointerBox = logoRef.current.getBoundingClientRect()
  const offsets = getOffset(logoRef.current)
  const centerX = offsets.left + pointerBox.width / 2
  const centerY = offsets.top + pointerBox.height / 2
  return { centerX, centerY }
}

const getChildWithProps = (children: any, logoRef: any) => {
  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      // @ts-ignore
      ref: logoRef,
      style: {
        ...children.props.style,
        display: 'inline-block',
        margin: '0',
        padding: '0',
      },
    })
  } else return 'Unique children element is needed'
}

export const RotatingElement = ({
  children,
  isFixed = false,
}: PropsWithChildren<any>) => {
  const logoRef = useRef() as any
  const windowScrollX = useRef(0)
  const windowScrollY = useRef(0)
  const previousCenterX = useRef(0)
  const previousCenterY = useRef(0)

  const onMouseMove = (e: { clientX: number; clientY: number }) => {
    if (e) {
      const centers = getCenters(logoRef)
      let centerX = centers.centerX
      let centerY = centers.centerY
      if (!isFixed) {
        centerX = centerX - window.pageXOffset
        centerY = centerY - window.pageYOffset
      }
      const centerXRelative = e.clientX - centerX
      const centerYRelative = e.clientY - centerY
      previousCenterX.current = centerXRelative
      previousCenterY.current = centerYRelative
      updateDirection(centerXRelative, centerYRelative, logoRef)
    }
  }

  const onScroll = (ev: Event) => {
    if (ev) {
      // @ts-ignore
      const scrollLeft = ev?.target?.scrollingElement.scrollLeft
      // @ts-ignore
      const scrollTop = ev?.target?.scrollingElement.scrollTop
      const offsetX = scrollLeft - windowScrollX.current
      const offsetY = scrollTop - windowScrollY.current
      windowScrollX.current = scrollLeft
      windowScrollY.current = scrollTop
      updateDirection(
        previousCenterX.current + offsetX,
        previousCenterY.current + offsetY,
        logoRef,
      )
      previousCenterX.current = previousCenterX.current + offsetX
      previousCenterY.current = previousCenterY.current + offsetY
    }
  }

  useEffect(() => {
    if (logoRef.current) {
      window.addEventListener('mousemove', onMouseMove, {
        passive: true,
        capture: false,
      })
      if (!isFixed)
        window.addEventListener('scroll', onScroll, {
          passive: true,
          capture: false,
        })
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove, false)
      if (!isFixed) window.removeEventListener('scroll', onScroll, false)
    }
  }, [])

  return <>{getChildWithProps(children, logoRef)}</>
}
