import { motion } from 'framer-motion'
import { getPhotosByChapter } from '../data/photos'
import GalleryBackground from '../components/GalleryBackground'

const GallerySection = () => {
  const chapters = [
    { number: 1, title: 'The Beginning', subtitle: 'Where our story first unfolded' },
    { number: 2, title: 'Moments In Between', subtitle: 'The beautiful everyday with you' },
    { number: 3, title: 'You & Me, Now', subtitle: 'Creating our forever' }
  ]

  return (
    <section id="gallery" className="gallery-section section" style={{ padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
      <GalleryBackground />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {chapters.map((chapter) => {
          const chapterPhotos = getPhotosByChapter(chapter.number as 1 | 2 | 3)
          
          return (
            <div key={chapter.number} style={{ marginBottom: '8rem' }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: 'center', marginBottom: '4rem' }}
              >
                <motion.p 
                  style={{ color: 'var(--color-gold)', fontSize: '0.875rem', letterSpacing: '4px', marginBottom: '1rem', textTransform: 'uppercase' }}
                  animate={{
                    textShadow: [
                      '0 0 10px rgba(245, 208, 138, 0.5)',
                      '0 0 20px rgba(245, 208, 138, 0.8)',
                      '0 0 10px rgba(245, 208, 138, 0.5)'
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  Chapter {chapter.number}
                </motion.p>
                <motion.h2 
                  style={{ 
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)', 
                    marginBottom: '0.5rem', 
                    fontFamily: 'var(--font-serif)',
                    background: 'linear-gradient(135deg, #F5D08A 0%, #FFE5B4 50%, #F5D08A 100%)',
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                  animate={{
                    backgroundPosition: ['0% center', '200% center', '0% center']
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                >
                  {chapter.title}
                </motion.h2>
                <motion.p 
                  style={{ opacity: 0.6, fontSize: '1rem' }}
                  animate={{
                    opacity: [0.6, 0.8, 0.6]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  {chapter.subtitle}
                </motion.p>
              </motion.div>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                gap: '1.5rem',
                padding: '0 1rem'
              }}>
                {chapterPhotos.map((photo, index) => (
                  <motion.div
                    key={photo.id}
                    initial={{ opacity: 0, y: 80, rotateY: -25, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, rotateY: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.08,
                      type: 'spring',
                      stiffness: 120,
                      damping: 15
                    }}
                    whileHover={{ 
                      y: -25, 
                      scale: 1.1,
                      rotateY: 10,
                      rotateX: 10,
                      z: 50,
                      boxShadow: [
                        '0 30px 80px rgba(245, 208, 138, 0.5)',
                        '0 40px 100px rgba(245, 208, 138, 0.7)',
                        '0 30px 80px rgba(245, 208, 138, 0.5)'
                      ],
                      borderColor: [
                        'rgba(245, 208, 138, 0.3)',
                        'rgba(245, 208, 138, 0.6)',
                        'rgba(245, 208, 138, 0.3)'
                      ],
                      transition: { duration: 0.4 }
                    }}
                    className="tilt-3d hover-lift"
                    style={{
                      background: 'rgba(26, 31, 53, 0.5)',
                      padding: '0.3rem',
                      borderRadius: '12px',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(245, 208, 138, 0.05)',
                      cursor: 'pointer',
                      transformStyle: 'preserve-3d',
                      border: '1px solid rgba(245, 208, 138, 0.2)',
                      backdropFilter: 'blur(15px) saturate(180%)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <motion.div 
                      style={{ 
                        position: 'relative', 
                        overflow: 'hidden', 
                        border: '0.5px solid rgba(245, 208, 138, 0.25)', 
                        borderRadius: '8px',
                        background: 'rgba(11, 16, 32, 0.4)'
                      }}
                      whileHover={{
                        borderColor: 'rgba(245, 208, 138, 0.5)'
                      }}
                    >
                      {/* Shimmer Effect */}
                      <motion.div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: '-100%',
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(90deg, transparent, rgba(245, 208, 138, 0.3), transparent)',
                          zIndex: 2,
                          pointerEvents: 'none'
                        }}
                        animate={{
                          left: ['-100%', '200%']
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          ease: 'linear'
                        }}
                      />
                      <motion.img
                        src={photo.src}
                        alt={photo.caption}
                        loading="lazy"
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover', 
                          display: 'block', 
                          aspectRatio: '4/3',
                          filter: 'brightness(0.95) contrast(1.05)',
                          position: 'relative',
                          zIndex: 1
                        }}
                        whileHover={{
                          scale: 1.05,
                          filter: 'brightness(1.05) contrast(1.1)',
                          transition: { duration: 0.3 }
                        }}
                      />
                      {/* Gold Glow Overlay on Hover */}
                      <motion.div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'radial-gradient(circle at center, rgba(245, 208, 138, 0.1) 0%, transparent 70%)',
                          pointerEvents: 'none',
                          zIndex: 2
                        }}
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                      <motion.div 
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          padding: '1.25rem',
                          background: 'linear-gradient(to top, rgba(11, 16, 32, 0.98), rgba(11, 16, 32, 0.7), transparent)',
                          color: 'var(--color-gold)',
                          fontSize: '0.875rem',
                          textAlign: 'center',
                          opacity: 0,
                          textShadow: '0 2px 12px rgba(0, 0, 0, 0.9), 0 0 20px rgba(245, 208, 138, 0.5)',
                          zIndex: 3,
                          borderTop: '1px solid rgba(245, 208, 138, 0.2)'
                        }}
                        className="photo-caption"
                        whileHover={{
                          opacity: 1,
                          transition: { duration: 0.3 }
                        }}
                      >
                        {photo.caption}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
      <style>{`
        .gallery-section {
          position: relative;
        }
        .gallery-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(245, 208, 138, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 229, 180, 0.06) 0%, transparent 50%);
          pointer-events: none;
          z-index: 0;
        }
      `}</style>
    </section>
  )
}

export default GallerySection

