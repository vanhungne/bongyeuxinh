import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Sparkle from '../components/Sparkle'
import '../styles/HeroSection.css'

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log('Video autoplay prevented:', err))
    }
  }, [])

  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })
  }

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.5
      }
    }
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 100
      }
    }
  }

  const title = "Happy Birthday, My Love"
  
  return (
    <section className="hero-section section">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video/intro.mp4" type="video/mp4" />
      </video>
      
      <div className="hero-overlay" />
      
      <div className="hero-content">
        <motion.p
          className="hero-subtitle gradient-text glow-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            delay: 0.3, 
            duration: 0.8,
            scale: {
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }
          }}
        >
          HAPPY BIRTHDAY
        </motion.p>
        
        <motion.h1
          className="hero-title text-glow"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          {title.split(' ').map((word, wordIndex) => (
            <span key={wordIndex} className="word">
              {word === 'My' || word === 'Love' ? (
                <motion.span 
                  className="script neon-glow"
                  animate={{
                    scale: [1, 1.1, 1],
                    textShadow: [
                      '0 0 20px rgba(245, 208, 138, 0.8)',
                      '0 0 40px rgba(245, 208, 138, 1)',
                      '0 0 20px rgba(245, 208, 138, 0.8)'
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  {word}{' '}
                </motion.span>
              ) : (
                word.split('').map((char, charIndex) => (
                  <motion.span 
                    key={charIndex} 
                    variants={letterVariants}
                    whileHover={{ 
                      scale: 1.2,
                      color: '#F5D08A',
                      textShadow: '0 0 20px rgba(245, 208, 138, 0.8)'
                    }}
                  >
                    {char}
                  </motion.span>
                ))
              )}
              {wordIndex < title.split(' ').length - 1 && ' '}
            </span>
          ))}
        </motion.h1>
        
        {/* Sparkles around title */}
        {[...Array(8)].map((_, i) => (
          <Sparkle
            key={i}
            x={20 + (i * 10)}
            y={30 + (i % 2) * 20}
            delay={i * 0.2}
            size={0.8 + (i % 3) * 0.3}
          />
        ))}
        
        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 2, duration: 1 }}
        >
          A curated journey of our moments together.
        </motion.p>
        
        <motion.button
          className="btn hero-btn rotating-border glowing-pulse"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            scale: 1
          }}
          transition={{ delay: 2.5, duration: 0.6 }}
          onClick={scrollToGallery}
          whileHover={{ 
            scale: 1.08,
            y: -5,
            boxShadow: '0 0 40px rgba(245, 208, 138, 0.6)'
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            animate={{ 
              x: [0, 5, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
          <span className="shimmer-gold">Begin the Journey</span>
        </motion.button>
      </div>
      
      {/* Decorative Elements */}
      <motion.div
        className="decorative decorative-top-left"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
      />
      <motion.div
        className="decorative decorative-bottom-right"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      />
      
      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 3 },
          y: { duration: 2, repeat: Infinity }
        }}
      >
        <div className="scroll-line" />
      </motion.div>
    </section>
  )
}

export default HeroSection

