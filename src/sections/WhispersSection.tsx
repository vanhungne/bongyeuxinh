import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const whisperMessages = [
  'You are my favorite chapter.',
  'Every day with you feels rare and precious.',
  'In your eyes, I found my home.',
  'You make ordinary moments extraordinary.',
  'Forever starts with every sunrise we share.',
  'My heart chose you before my mind could catch up.'
]

const WhispersSection = () => {
  const [activeMessage, setActiveMessage] = useState<string | null>(null)

  return (
    <section className="whispers-section section" style={{ padding: '8rem 0', background: 'var(--color-navy)', minHeight: '80vh' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}
        >
          Hidden <span className="script">Whispers</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: '4rem' }}
        >
          Hover over the symbols to discover my thoughts
        </motion.p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', padding: '4rem 0', position: 'relative' }}>
          {['♥', '★', '◉', '◊', '☼', '⬡'].map((icon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.3, 
                y: -10,
                rotate: 360,
                filter: 'drop-shadow(0 0 30px rgba(245, 208, 138, 0.8))'
              }}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                delay: i * 0.1,
                y: {
                  duration: 2 + i * 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut' as const
                },
                rotate: {
                  duration: 3 + i * 0.3,
                  repeat: Infinity,
                  ease: 'easeInOut' as const
                }
              }}
              onHoverStart={() => setActiveMessage(whisperMessages[i])}
              onHoverEnd={() => setActiveMessage(null)}
              className="glowing-pulse"
              style={{
                width: '60px',
                height: '60px',
                color: 'var(--color-gold)',
                fontSize: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                filter: 'drop-shadow(0 0 10px rgba(245, 208, 138, 0.5))'
              }}
            >
              {icon}
            </motion.div>
          ))}
        </div>
        
        <AnimatePresence>
          {activeMessage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'var(--color-ivory)',
                color: 'var(--color-navy)',
                padding: '2rem',
                borderRadius: '8px',
                border: '2px solid var(--color-gold)',
                maxWidth: '400px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
                fontFamily: 'var(--font-serif)',
                fontSize: '1.125rem',
                fontStyle: 'italic',
                zIndex: 10
              }}
            >
              {activeMessage}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default WhispersSection

