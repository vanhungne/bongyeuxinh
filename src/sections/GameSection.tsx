import { useState } from 'react'
import { motion } from 'framer-motion'
import { photos, isGoldenMoment, getGoldenMomentByPhotoId } from '../data/photos'

const GameSection = () => {
  const [foundCount, setFoundCount] = useState(0)
  const [foundPhotos, setFoundPhotos] = useState<Set<number>>(new Set())
  const [gameComplete, setGameComplete] = useState(false)

  const handlePhotoClick = (photoId: number) => {
    if (foundPhotos.has(photoId)) return

    if (isGoldenMoment(photoId)) {
      const newFound = new Set(foundPhotos).add(photoId)
      setFoundPhotos(newFound)
      setFoundCount(newFound.size)
      
      const moment = getGoldenMomentByPhotoId(photoId)
      if (moment) {
        alert(`✨ ${moment.title}\n\n${moment.message}`)
      }
      
      if (newFound.size === 5) {
        setTimeout(() => setGameComplete(true), 1000)
      }
    }
  }

  if (gameComplete) {
    return (
      <section className="game-section section" style={{ padding: '8rem 0', background: 'linear-gradient(180deg, #0B1020 0%, #0d1423 100%)', minHeight: '100vh' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '2rem', fontFamily: 'var(--font-serif)' }}
          >
            These are the five moments I would keep forever.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ color: 'var(--color-gold)', marginBottom: '3rem', fontSize: '1.125rem' }}
          >
            Thank you for giving me all of them. Happy Birthday, my love.
          </motion.p>
          <motion.button
            className="btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('gift')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Continue the surprise
          </motion.button>
        </div>
      </section>
    )
  }

  return (
    <section id="game" className="game-section section" style={{ padding: '8rem 0', background: 'linear-gradient(180deg, #0B1020 0%, #0d1423 100%)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}
        >
          The <span className="script">Golden Moments</span> Hunt
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: '2rem' }}
        >
          Among these memories, 5 moments changed everything. Can you find them?
        </motion.p>
        
        <div style={{
          display: 'inline-block',
          padding: '1rem 2rem',
          border: '2px solid var(--color-gold)',
          borderRadius: '50px',
          marginBottom: '4rem',
          background: 'rgba(245, 208, 138, 0.05)'
        }}>
          <span style={{ color: 'var(--color-gold)', fontSize: '1.25rem', fontFamily: 'var(--font-serif)', fontWeight: 600 }}>
            {foundCount} / 5
          </span>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', 
          gap: '1rem'
        }}>
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8, 
                scale: 1.08,
                rotateZ: 5,
                boxShadow: '0 15px 40px rgba(245, 208, 138, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handlePhotoClick(photo.id)}
              animate={foundPhotos.has(photo.id) ? {
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
                boxShadow: [
                  '0 0 30px rgba(245, 208, 138, 0.5)',
                  '0 0 50px rgba(245, 208, 138, 0.8)',
                  '0 0 30px rgba(245, 208, 138, 0.5)'
                ]
              } : {}}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: foundPhotos.has(photo.id) ? Infinity : 0,
                  ease: 'easeInOut'
                }
              }}
              className={foundPhotos.has(photo.id) ? 'glowing-pulse' : ''}
              style={{
                background: 'var(--color-ivory)',
                padding: '0.5rem',
                borderRadius: '4px',
                cursor: 'pointer',
                border: foundPhotos.has(photo.id) ? '3px solid var(--color-gold)' : 'none',
                boxShadow: foundPhotos.has(photo.id) ? '0 0 30px rgba(245, 208, 138, 0.5)' : '0 5px 20px rgba(0, 0, 0, 0.2)',
                transformStyle: 'preserve-3d'
              }}
            >
              <img
                src={photo.src}
                alt={`Memory ${photo.id}`}
                loading="lazy"
                style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', borderRadius: '2px' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GameSection

