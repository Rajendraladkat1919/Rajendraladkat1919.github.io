'use client'

import { useEffect, useRef } from 'react'
import { FaHandshake, FaUserTie, FaChalkboardTeacher, FaLaptopCode } from 'react-icons/fa'

export default function ScrollingServices() {
  const services = [
    { icon: FaHandshake, text: 'Freelancing Services' },
    { icon: FaUserTie, text: 'Infrastructure Consultancy' },
    { icon: FaChalkboardTeacher, text: 'Mentoring & Coaching' },
    { icon: FaLaptopCode, text: 'DevOps Training' },
    { text: 'Terraform & Terragrunt' },
    { text: 'AWS Cloud Solutions' },
    { text: 'Docker & Kubernetes' },
    { text: 'Prometheus & Grafana' },
    { text: 'GitHub Actions, Jenkins, ArgoCD' },
    { text: 'ELK Stack & Loki' },
  ]

  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollPosition = 0
    const scrollSpeed = 0.5 // pixels per frame
    let animationId: number

    const scroll = () => {
      scrollPosition += scrollSpeed
      const firstSetWidth = scrollContainer.scrollWidth / 2 // Width of first set of services
      
      // Reset position when we've scrolled through one complete set
      if (scrollPosition >= firstSetWidth) {
        scrollPosition = 0
      }
      
      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  // Duplicate services for seamless loop
  const duplicatedServices = [...services, ...services]

  return (
    <div className="fixed top-16 left-0 right-0 bg-primary-600 dark:bg-primary-700 text-white py-3 overflow-hidden z-40 shadow-lg">
      <div className="flex items-center">
        <span className="px-4 font-semibold text-sm md:text-base whitespace-nowrap bg-primary-700 dark:bg-primary-800 py-2 z-10 relative">
          Services:
        </span>
        <div className="flex-1 overflow-hidden relative">
          <div
            ref={scrollRef}
            className="flex items-center gap-12"
            style={{ willChange: 'transform' }}
          >
            {duplicatedServices.map((service, index) => (
              <div
                key={`${service.text}-${index}`}
                className="flex items-center gap-3 whitespace-nowrap text-sm md:text-base"
              >
                {service.icon && (
                  <service.icon className="text-primary-200 flex-shrink-0" size={18} />
                )}
                <span className="font-medium">{service.text}</span>
                <span className="text-primary-300 mx-2">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

