import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import '../styles/LoadingScreen.css'

interface LoadingScreenProps {
  onComplete: () => void
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [stage, setStage] = useState(1)

  useEffect(() => {
    // Ensure loading completes after maximum 1.5 seconds
    const maxLoadingTimer = setTimeout(() => {
      setProgress(100)
      setTimeout(onComplete, 200)
    }, 1500)

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        
        const next = prev + Math.random() * 15 + 5
        
        if (next >= 100) {
          clearInterval(interval)
          clearTimeout(maxLoadingTimer)
          setTimeout(onComplete, 300)
          return 100
        }
        
        // Update stage
        const newStage = Math.ceil((next / 100) * 3)
        setStage(prevStage => {
          if (newStage !== prevStage) {
            return newStage
          }
          return prevStage
        })
        
        return next
      })
    }, 200)

    return () => {
      clearInterval(interval)
      clearTimeout(maxLoadingTimer)
    }
  }, [onComplete])

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { 
      opacity: 0,
      scale: 1.1,
      transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] as const }
    }
  }

  const monogramVariants = {
    initial: { scale: 0, rotate: -180, opacity: 0 },
    animate: { 
      scale: 1, 
      rotate: [0, 360],
      opacity: 1,
      transition: {
        scale: {
          type: 'spring' as const,
          stiffness: 200,
          damping: 15,
          delay: 0.2
        },
        rotate: {
          duration: 1,
          ease: 'easeOut' as const
        }
      }
    }
  }

  const heartVariants = {
    animate: {
      scale: [1, 1.3, 1],
      rotate: [0, 10, -10, 0],
      filter: [
        'drop-shadow(0 0 10px rgba(245, 208, 138, 0.5))',
        'drop-shadow(0 0 30px rgba(245, 208, 138, 0.8))',
        'drop-shadow(0 0 10px rgba(245, 208, 138, 0.5))'
      ],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut' as const
      }
    }
  }

  return (
    <motion.div
      className="loading-screen"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="loading-content">
        <motion.div
          className="monogram"
          variants={monogramVariants}
        >
          <svg className="monogram-ring" viewBox="0 0 120 120">
            <motion.circle
              cx="60"
              cy="60"
              r="58"
              fill="none"
              stroke="var(--color-gold)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: 1,
                rotate: 360
              }}
              transition={{ 
                pathLength: { duration: 2, ease: 'easeInOut' },
                rotate: { duration: 20, repeat: Infinity, ease: 'linear' }
              }}
            />
            <motion.circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="var(--color-gold)"
              strokeWidth="1"
              opacity="0.3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </svg>
          
          <motion.div className="monogram-text" variants={heartVariants} animate="animate">
            <span className="initial">B</span>
            <motion.span 
              className="heart"
              animate={{ 
                scale: [1, 1.3, 1],
                color: ['#F5D08A', '#FFD700', '#F5D08A']
              }}
              transition={{ 
                duration: 1, 
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            >
              ♥
            </motion.span>
            <span className="initial">L</span>
          </motion.div>
        </motion.div>

        <motion.p
          className="loading-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Curating a birthday experience…
        </motion.p>

        <div className="progress-container">
          <div className="progress-bar">
            <motion.div
              className="progress-fill"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="progress-glow"
              style={{ left: `${progress}%` }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(245, 208, 138, 0.5)',
                  '0 0 40px rgba(245, 208, 138, 0.8)',
                  '0 0 20px rgba(245, 208, 138, 0.5)'
                ]
              }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
          
          <motion.p
            className="progress-text"
            key={stage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            Preparing {stage.toString().padStart(2, '0')} / 03 surprises…
          </motion.p>
        </div>

        {/* Floating Particles */}
        <div className="particles">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'easeInOut'
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen

