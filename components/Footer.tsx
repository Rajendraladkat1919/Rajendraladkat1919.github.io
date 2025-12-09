import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-white mb-2">Rajendra Ladkat</p>
            <p className="text-sm">DevOps & Cloud Infrastructure Consultant</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/rajendraladkat1919"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/rajendra-ladkat-b337a350"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:raladevops1@gmail.com"
              className="hover:text-primary-400 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {currentYear} Rajendra Ladkat. All rights reserved.</p>
          <p className="mt-2 text-xs text-gray-500">
            Built with Next.js, React, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

