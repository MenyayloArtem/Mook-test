const initial = {
    initial : {
      opacity : 1,
      transform : "translateX(0%)"
    },

    config : {
      duration : 200
    }
  }

const swipeLeft = {
    ...initial,
    from : {
        transform : "translateX(100%)"
      },
      enter : {
        transform : "translateX(0%)"
      },
      leave : {
        transform : "translateX(-100%)"
      },
}

const swipeRight = {
    ...initial,
    from : {
        transform : "translateX(-100%)"
      },
      enter : {
        transform : "translateX(0%)"
      },
      leave : {
        transform : "translateX(100%)"
      },
}

export const transition = {
    ...initial,
    from : {
        opacity : 0,
      },
      enter : {
        opacity : 1,
      },
      leave : {
        opacity : 0,
      },
}

export default function getAnimation(location) {
    if (location.pathname == "/image" && (["/", "/images"].includes(location.state?.prev || !location.state?.prev))) {
        return swipeRight
    } else if (["/", "/images"].includes(location.pathname) && (["/image", "/"].includes(location.state?.prev) || !location.state?.prev)) {
        return swipeLeft
    } else {
        return transition
    }
}