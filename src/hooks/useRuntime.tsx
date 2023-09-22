import debounce from 'lodash/debounce'
import { useLayoutEffect, useState } from 'react'

export function useMediaQuery(mq: number) {
  const [isMobile, setIsMobile] = useState(false)

  useLayoutEffect(() => {
    const updateSize = (): void => {
      setIsMobile(window.innerWidth <= mq)
    }

    window.addEventListener('resize', debounce(updateSize, 250))
    return (): void => window.removeEventListener('resize', updateSize)
  }, [])

  return isMobile
}
