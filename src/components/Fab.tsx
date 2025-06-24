'use client'

import { useState } from 'react'
import { MessageCircle, Mail, X } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'
import Button from './button'

export default function FloatingHelp() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Floating icons */}
      <div
        className={`flex flex-col items-end space-y-3 mb-3 transform transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {/* WhatsApp */}
        <Link
          href="https://wa.me/+254769403162"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-md transition-all"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="w-5 h-5 text-white" />
        </Link>

        {/* Email */}
        <Button
          onClick={() => window.open('mailto:hello@kheemtech.com')}
          className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 hover:text-blue-300 hover:border-blue-400/30 flex items-center justify-center transition-all"
          aria-label="Email"
        >
          <Mail className="w-5 h-5" />
        </Button>
      </div>

      {/* Main FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full border border-gray-800 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white shadow-md hover:shadow-lg active:opacity-90 transition-all flex items-center justify-center"
        aria-label={isOpen ? 'Close help menu' : 'Open help menu'}
      >
        {isOpen ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </button>
    </div>
  )
}
