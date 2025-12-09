import { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  children: ReactNode
  className?: string
}

export default function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-16 scroll-mt-20 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}

