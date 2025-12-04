import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LoadingScreen from './sections/LoadingScreen'
import HeroSection from './sections/HeroSection'
import GallerySection from './sections/GallerySection'
import WhispersSection from './sections/WhispersSection'
import GameSection from './sections/GameSection'
import GiftSection from './sections/GiftSection'
import LetterSection from './sections/LetterSection'
import ParticleBackground from './components/ParticleBackground'
import GlowOrb from './components/GlowOrb'
import './styles/App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Backup timer - ensure loading completes even if LoadingScreen doesn't call onComplete
    const backupTimer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(backupTimer)
  }, [])

  useEffect(() => {
    // Initialize GSAP ScrollTrigger
    if (typeof window !== 'undefined' && (window as any).ScrollTrigger) {
      (window as any).ScrollTrigger.refresh()
    }
  }, [isLoading])

  return (
    <div className="app gradient-animated">
      <ParticleBackground />
      <GlowOrb size={300} x={10} y={20} delay={0} color="#F5D08A" />
      <GlowOrb size={250} x={90} y={80} delay={2} color="#FFE5B4" />
      <GlowOrb size={200} x={50} y={50} delay={4} color="#FFD700" />
      
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="app-content"
          >
            <HeroSection />
            <GallerySection />
            <WhispersSection />
            <GameSection />
            <GiftSection />
            <LetterSection />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App

