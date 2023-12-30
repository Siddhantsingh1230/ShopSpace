export const pageTransitionVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      duration: 0.35,
    },
  },
};
