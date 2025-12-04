import { motion } from 'framer-motion'

interface GlowOrbProps {
  size?: number
  color?: string
  x?: number
  y?: number
  delay?: number
}

const GlowOrb: React.FC<GlowOrbProps> = ({ 
  size = 200, 
  color = '#F5D08A',
  x = 50,
  y = 50,
  delay = 0
}) => {
  return (
    <motion.div
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${color}40, transparent 70%)`,
        filter: 'blur(40px)',
        pointerEvents: 'none',
        zIndex: 0
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
        x: [0, 30, 0],
        y: [0, -30, 0]
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    />
  )
}

export default GlowOrb

