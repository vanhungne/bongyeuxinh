import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LetterSection = () => {
  const [showKiss, setShowKiss] = useState(false)

  return (
    <>
      <section className="letter-section section" style={{ padding: '8rem 0', background: 'linear-gradient(135deg, #1a1a2e 0%, var(--color-navy) 100%)', minHeight: '100vh' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            style={{
              maxWidth: '800px',
              margin: '0 auto',
              background: 'var(--color-ivory)',
              padding: '4rem 3rem',
              borderRadius: '12px',
              border: '2px solid var(--color-gold)',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.4)',
              position: 'relative'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '-15px',
              left: '-15px',
              right: '-15px',
              bottom: '-15px',
              border: '1px solid var(--color-gold)',
              borderRadius: '12px',
              opacity: 0.3,
              pointerEvents: 'none'
            }} />
            
            <h2 className="script" style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--color-gold)',
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              My Birthday Letter To You
            </h2>
            
            <div style={{
              color: 'var(--color-navy)',
              fontSize: '1.125rem',
              lineHeight: 2,
              marginBottom: '3rem',
              fontFamily: 'var(--font-serif)'
            }}>
              <p style={{ marginBottom: '1.5rem' }}>Happy Birthday, baby.</p>
              <p style={{ marginBottom: '1.5rem' }}>Thank you for making my world softer, brighter, and fuller.</p>
              <p style={{ marginBottom: '1.5rem' }}>Every photo on this page is a reminder of how lucky I am that you exist.</p>
              <p>I love you, more than these words can ever show.</p>
            </div>
            
            <motion.button
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowKiss(true)}
              style={{ display: 'block', margin: '0 auto', border: '2px solid var(--color-gold)', color: 'var(--color-gold)' }}
            >
              Click to receive a kiss 💋
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      <AnimatePresence>
        {showKiss && (
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
              background: 'rgba(11, 16, 32, 0.98)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              zIndex: 3000,
              padding: '2rem'
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{ position: 'relative', maxWidth: '600px', marginBottom: '2rem' }}
            >
              <img
                src="/assets/images/photo-hero.jpg"
                alt="Our Love"
                style={{
                  width: '100%',
                  borderRadius: '12px',
                  border: '3px solid var(--color-gold)',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
                }}
              />
              <svg
                viewBox="0 0 100 100"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '120%',
                  height: '120%',
                  pointerEvents: 'none'
                }}
              >
                <motion.path
                  d="M50,85 C50,85 15,60 15,40 C15,25 25,15 35,15 C42,15 47,20 50,25 C53,20 58,15 65,15 C75,15 85,25 85,40 C85,60 50,85 50,85 Z"
                  fill="none"
                  stroke="var(--color-gold)"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
              </svg>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.5rem',
                color: 'var(--color-ivory)',
                marginBottom: '2rem',
                fontStyle: 'italic',
                textAlign: 'center'
              }}
            >
              From this day and every day after, I choose you.
            </motion.p>
            
            <motion.button
              className="btn"
              onClick={() => setShowKiss(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
            >
              Close
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default LetterSection

