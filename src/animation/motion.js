export const transition = { type: "tween", duration: 0.8 };

export const slideAnimation = (direction) => {
  return {
    initial: {
      x: direction === "left" ? -200 : direction === "right" ? 200 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: direction === 'left' ? 0.4 : 1},
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ...transition,delay: direction === 'left' ? 0.4 : 1},
    },
    exit: {
      x: direction === "left" ? -200 : direction === "right" ? 200 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      transition: { ...transition, delay:0},
      opacity : 0
    },
  };
};


export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};