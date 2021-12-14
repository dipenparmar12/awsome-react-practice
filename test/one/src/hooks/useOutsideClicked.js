import { useState, useEffect, useRef, useCallback } from 'react'

// TODO::WIP Integrate with Sidebar
/**
 * @src: https://medium.com/geekculture/how-to-handle-click-outside-a-div-in-react-d2283dc4ed57
 * @src: https://medium.com/free-code-camp/how-to-detect-an-outside-click-with-react-and-hooks-25dbaa30abcd
 * @returns
 */
export default function useOutsideClicked() {
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
    if (ref.current && !ref.current.contains(event.target)) {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideClicked)
    return () => {
      document.removeEventListener('click', handleOutsideClicked)
    }
  }, [handleOutsideClicked])

  useEffect(() => {
    document.addEventListener('keydown', hideOnEsc)
    return () => {
      document.removeEventListener('keydown', hideOnEsc)
    }
  }, [hideOnEsc])

  return { ref, isVisible, setIsVisible }
}
