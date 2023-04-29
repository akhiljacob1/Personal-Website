import { motion } from "framer-motion"

export function AnimateSVG({
  children
}) {
  return (
    <motion.svg
      {...children.props}
    >
      {children.props.children.map(({ props: { d, className } }) => (
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut"
          }}
          d={d}
          className={className}
        />
      ))}
    </motion.svg>
  )
}
