import { motion } from "framer-motion"

export function AnimateSVG({ children }) {
  const icon = {
    hidden: {
      pathLength: 0,
      transition: { duration: 2, ease: "easeInOut" }
    },
    visible: {
      pathLength: 1,
      transition: { duration: 2, ease: "easeInOut" }
    }
  }
  
  const childElements = children.props.children
  return (
    <>
      {childElements.length > 1 ? (
        <motion.svg {...children.props}>
          {childElements.map(({ props: { d, className } }, index) => (
            <motion.path
              key={index}
              variants={icon}
              initial="hidden"
              animate="visible"
              d={d}
              className={className}
            />
          ))}
        </motion.svg>
       ) : (
        <motion.svg {...children.props}>
          <motion.path
            variants={icon}
            initial="hidden"
            animate="visible"
            d={childElements.props.d}
            className={childElements.props.className}
          />
        </motion.svg>
      )}
    </>
  )
}
