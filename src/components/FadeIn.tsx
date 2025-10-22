'use client'

import React, { JSX } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

type FadeInProps = {
  children: React.ReactNode
  /**
   * Directional offset in pixels. Only one of x or y should typically be non-zero.
   */
  offsetY?: number
  offsetX?: number
  durationMs?: number
  delayMs?: number
  className?: string
  as?: keyof JSX.IntrinsicElements
  /**
   * If true, animation runs only once. If false, it fades out when leaving viewport and back in on re-enter.
   */
  once?: boolean
  /**
   * If true, determines vertical offset based on current scroll direction (down => positive Y, up => negative Y).
   */
  followScrollDirection?: boolean
}

export default function FadeIn({
  children,
  offsetY = 40,
  offsetX = 0,
  durationMs = 800,
  delayMs = 0,
  className,
  as = 'div',
  once = false,
  followScrollDirection = true,
}: FadeInProps) {
  const controls = useAnimation()
  const ref = React.useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once, margin: '0px 0px -10% 0px' })

  const lastScrollYRef = React.useRef<number>(0)
  const [scrollDirection, setScrollDirection] = React.useState<'down' | 'up'>('down')

  React.useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const current = window.scrollY || 0
          if (current > lastScrollYRef.current) {
            setScrollDirection('down')
          } else if (current < lastScrollYRef.current) {
            setScrollDirection('up')
          }
          lastScrollYRef.current = current
          ticking = false
        })
        ticking = true
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const computedOffsetY = followScrollDirection ? (scrollDirection === 'down' ? Math.abs(offsetY) || 40 : -Math.abs(offsetY || 40)) : offsetY

  React.useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: durationMs / 1000, delay: delayMs / 1000 },
      })
    } else if (!once) {
      controls.start({
        opacity: 0,
        x: offsetX,
        y: computedOffsetY,
        transition: { duration: durationMs / 1000, delay: 0 },
      })
    }
  }, [isInView, controls, durationMs, delayMs, once, offsetX, computedOffsetY])

  const Component = motion[as as 'div'] as any

  return (
    <Component
      ref={ref}
      initial={{ opacity: 0, x: offsetX, y: computedOffsetY }}
      animate={controls}
      className={className}
    >
      {children}
    </Component>
  )
}


