export const tabContentAnimation = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.13,
    },
  }
}

export const placesItemAnimation = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1
  }
};