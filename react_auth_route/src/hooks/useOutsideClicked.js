import { useState, useEffect, useRef } from 'react'

// TODO::WIP Integrate with Sidebar
/**
 * @src: https://medium.com/geekculture/how-to-handle-click-outside-a-div-in-react-d2283dc4ed57
 * @src: https://medium.com/free-code-camp/how-to-detect-an-outside-click-with-react-and-hooks-25dbaa30abcd
 * @returns 
 */
export default function useComponentVisible() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  const useOutsideClicked = (event) => {
    console.log(
      'useComponentVisible.js::[8] !ref.et)',
      !ref.current.contains(event.target)
    )
    if (ref.current && !ref.current.contains(event.target)) {
      setIsVisible(!isVisible)
    }
  }

  useEffect(() => {
    document.addEventListener('click', useOutsideClicked, !isVisible)
    return () => {
      document.removeEventListener('click', useOutsideClicked, !isVisible)
    }
  })

  return { ref, isVisible, setIsVisible }
}
