import React, { useState } from 'react'

const useScroll = () => {
  const [isScrolledToTop, setIsScrolledToTop] = useState(true)
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false)

  const onScrollEvent = (e: React.SyntheticEvent<HTMLElement>) => {
    const el = e.target
    // @ts-expect-error
    const maxHeight = el.scrollHeight - el.offsetHeight
    // @ts-expect-error
    setIsScrolledToTop(el.scrollTop < 5)
    // @ts-expect-error
    setIsScrolledToBottom(el.scrollTop >= maxHeight - 5)
  }

  return [onScrollEvent, isScrolledToTop, isScrolledToBottom]
}

export default useScroll
