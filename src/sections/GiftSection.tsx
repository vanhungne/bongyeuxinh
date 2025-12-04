import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const GiftSection = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section id="gift" className="gift-section section" style={{ padding: '8rem 0', background: 'radial-gradient(ellipse at center, #1a1a2e 0%, var(--color-navy) 100%)', minHeight: '100vh' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}
        >
          You've found the golden moments.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: '4rem' }}
        >
          Now open your birthday surprise.
        </motion.p>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          style={{
            width: '250px',
            height: '250px',
            margin: '0 auto',
            cursor: 'pointer',
            position: 'relative'
          }}
        >
          <div style={{
            width: '200px',
            height: '160px',
            background: 'linear-gradient(135deg, var(--color-ivory) 0%, #e8e0d5 100%)',
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            borderRadius: '8px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
          }} />
          <div style={{
            width: '220px',
            height: '60px',
            background: 'linear-gradient(135deg, var(--color-ivory) 0%, #e8e0d5 100%)',
            position: 'absolute',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            borderRadius: '8px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
          }} />
          <div style={{
            width: '30px',
            height: '200px',
            background: 'var(--color-gold)',
            position: 'absolute',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            boxShadow: '0 5px 15px rgba(245, 208, 138, 0.5)'
          }} />
          <div style={{
            width: '220px',
            height: '30px',
            background: 'var(--color-gold)',
            position: 'absolute',
            top: '50px',
            left: '50%',
            transform: 'translateX(-50%)',
            boxShadow: '0 5px 15px rgba(245, 208, 138, 0.5)'
          }} />
        </motion.div>
        
        <p style={{ marginTop: '2rem', fontSize: '0.875rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-gold)', opacity: 0.7 }}>
          Click to open
        </p>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              background: 'rgba(5, 5, 5, 0.95)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2000
            }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              style={{
                width: '90%',
                maxWidth: '1200px',
                background: 'var(--color-navy)',
                border: '2px solid var(--color-gold)',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 30px 80px rgba(0, 0, 0, 0.6)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src="/assets/video/surprise.mp4"
                controls
                autoPlay
                style={{ width: '100%', display: 'block' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default GiftSection

