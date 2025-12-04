import { motion } from 'framer-motion'

interface SparkleProps {
  x: number
  y: number
  delay?: number
  size?: number
}

const Sparkle: React.FC<SparkleProps> = ({ x, y, delay = 0, size = 1 }) => {
  return (
    <motion.div
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
        fontSize: `${size}rem`,
        pointerEvents: 'none',
        zIndex: 1
      }}
      initial={{ opacity: 0, scale: 0, rotate: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1.5, 0],
        rotate: [0, 180, 360],
        y: [0, -20, 0]
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      ✨
    </motion.div>
  )
}

export default Sparkle
