import {useRef, useState, useCallback, useLayoutEffect, FC, PropsWithChildren} from "react"
import ResizeObserver from "resize-observer-polyfill"
import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion
} from "framer-motion"
import Box from "@Components/UI/Box";

const ScrollContainer: FC<PropsWithChildren<unknown>> = ({ children }) => {

  const scrollRef = useRef<HTMLDivElement>(null!)

  const [pageHeight, setPageHeight] = useState(0)

  const resizePageHeight = useCallback((entries: ResizeObserverEntry[]) => {
    for (const entry of entries) {
      setPageHeight(entry.contentRect.height)
    }
  }, [])

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(entries =>
        resizePageHeight(entries)
    )
    scrollRef && resizeObserver.observe(scrollRef.current)
    return () => resizeObserver.disconnect()
  }, [scrollRef, resizePageHeight])

  const { scrollY } = useViewportScroll()
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight])
  const physics = { damping: 15, mass: 0.27, stiffness: 55 } // easing of smooth scroll
  const spring = useSpring(transform, physics) // apply easing to the negative scroll value

  return (
      <>
        <motion.div
            ref={scrollRef}
            style={{ y: spring }}
            className="scroll-container"
        >
          {children}
        </motion.div>
        <Box sx={{ height: pageHeight }} />
      </>
  )
}

export default ScrollContainer;
