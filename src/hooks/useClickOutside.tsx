import { useEffect, useRef } from 'react'

export default function useOnClickOutsideRef(
  callback: () => void,
  initialValue = null
) {
  const elementRef = useRef<any>(initialValue)
  useEffect(() => {
    function handler(event: Event) {
      if (!elementRef.current?.contains(event.target)) {
        callback()
      }
    }
    window.addEventListener('click', handler)
    return () => window.removeEventListener('click', handler)
  }, [callback])
  return elementRef
}
