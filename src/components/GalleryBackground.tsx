import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const GalleryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<any[]>([])
  const animationFrameRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Create luxury particles
    const particleCount = 80
    const colors = ['#F5D08A', '#FFE5B4', '#FFD700', '#FFF8DC', '#D4AF37']
    
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 4 + 1,
      speedX: (Math.random() - 0.5) * 0.8,
      speedY: (Math.random() - 0.5) * 0.8,
      opacity: Math.random() * 0.6 + 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
      twinkle: Math.random() * Math.PI * 2
    }))

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY
        particle.twinkle += 0.05

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Twinkling effect
        const twinkleOpacity = particle.opacity * (0.7 + 0.3 * Math.sin(particle.twinkle))

        // Draw particle with enhanced glow
        ctx.save()
        ctx.globalAlpha = twinkleOpacity
        ctx.shadowBlur = 15
        ctx.shadowColor = particle.color
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        
        // Outer glow
        ctx.globalAlpha = twinkleOpacity * 0.3
        ctx.shadowBlur = 25
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: 0 }}>
      {/* Animated Gradient Background */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, #0B1020 0%, #151b2e 25%, #0d1428 50%, #151b2e 75%, #0B1020 100%)',
          backgroundSize: '400% 400%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      {/* Gold Accent Gradients */}
      <motion.div
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(245, 208, 138, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(255, 229, 180, 0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)'
        }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -40, 0],
          y: [0, -50, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }}
      />

      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          opacity: 0.7
        }}
      />

      {/* Shimmer Overlay */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(245, 208, 138, 0.1), transparent)',
          transform: 'skewX(-20deg)'
        }}
        animate={{
          left: ['-100%', '200%']
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatDelay: 3,
          ease: 'linear'
        }}
      />
    </div>
  )
}

export default GalleryBackground

