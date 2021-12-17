import { useState, useEffect, useRef, useCallback } from 'react'

// TODO::WIP Integrate with Sidebar
/**
 * @src: https://medium.com/geekculture/how-to-handle-click-outside-a-div-in-react-d2283dc4ed57
 * @src: https://medium.com/free-code-camp/how-to-detect-an-outside-click-with-react-and-hooks-25dbaa30abcd
 * @returns
 */
const useOutsideClicked = (isHideOnEsc = true) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  const hideOnEsc = useCallback(
    (e) => {
      if (e.keyCode === 27 || e.key === 'Escape' || e.key === 'Esc') {
        setIsVisible(false)
      }
    },
    [setIsVisible],
  )

  const handleOutsideClicked = (event) => {
    if (!isVisible) return null
    if (ref.current && !ref.current.contains(event.target)) {
      setIsVisible(false)
    }
    return null
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideClicked, !isVisible)
    isHideOnEsc && document.addEventListener('keydown', hideOnEsc, !isVisible)
    return () => {
      document.removeEventListener('click', handleOutsideClicked, !isVisible)
      isHideOnEsc &&
        document.removeEventListener('keydown', hideOnEsc, !isVisible)
    }
  }, [handleOutsideClicked, hideOnEsc])

  return { ref, isVisible, setIsVisible }
}

export default useOutsideClicked

/*
  const { ref, isVisible, setIsVisible } = useOutsideClicked()
  <button
    onClick={(e) => setIsVisible(!isVisible)}
    ref={ref}
  >
    Show Modal
  </button>
 */
