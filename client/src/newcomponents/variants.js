export const fadeIn = (direction,delay) => {
    return{
        hidden:{
            y:direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x:direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
        },
        show:{
            y:0,
            x:0,
            opacity:1,
            transition:{
                type:'tween',
                duration:1.2,
                delay:delay,
                ease:[0.25,0.25,0.25,0.75],
            }
        },
        hover: {
            scale: 1.10,
            rotate: 10,
            transition: { type: "spring", stiffness: 400 },
          },
          newhover:{
            scale: 1.1,
      transition: { type: "spring", stiffness: 400 },
          },
          newhover1:{
            scale: 1.1,
      transition: { type: "spring", stiffness: 400 },
          },
          tap: {
            scale: 0.95,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 10,
            },
          },
          exit: {
            y: direction === "up" ? -40 : direction === "down" ? 40 : 0,
            x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
            opacity: 0,
            transition: {
              type: "tween",
              duration: 0.8,
              delay: delay,
              ease: [0.4, 0.0, 0.2, 1],
            },
          },
    }
}