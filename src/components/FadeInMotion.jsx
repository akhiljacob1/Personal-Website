import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

export const FadeInAndUp = {
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
  hidden: { y: 40, opacity: 0 }
}

export const FadeInAndDown = {
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
  hidden: { y: -40, opacity: 0 }
}

export const FadeIn = {
  visible: { opacity: 1, transition: { duration: 0.6, delay: 0.4 } },
  hidden: { opacity: 0 }
}

export const StaggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.4,
      delayChildren: 0.3,
      staggerChildren: 0.3
    }
  }
};

export const StaggerItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export function FadeInMotion({
  className,
  children,
  variants = FadeInAndUp,
  once_boolean=true
}) {
  const animation = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: once_boolean })
  useEffect(() => {
    isInView ? animation.start("visible") : animation.start("hidden")
  }, [animation, isInView])
  return (
    <motion.div
      ref={ref}
      animate={animation}
      initial="hidden"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
