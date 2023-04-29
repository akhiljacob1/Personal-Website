import { motion } from "framer-motion"

export function AnimateSVG({ children }) {
  const childElements = children.props.children
  return (
    <>
      {childElements.length > 1 ? (
        <motion.svg {...children.props}>
          {childElements.map(({ props: { d, className } }, index) => (
            <motion.path
              key={index}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              d={d}
              className={className}
            />
          ))}
        </motion.svg>
       ) : (
        <motion.svg {...children.props}>
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d={childElements.props.d}
            className={childElements.props.className}
          />
        </motion.svg>
      )}
    </>
  )
}
