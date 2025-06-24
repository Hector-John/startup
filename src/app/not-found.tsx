'use client'

import { useRouter } from 'next/navigation'
import Button from '@/components/button'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NotFound() {
  const router = useRouter()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4"
    >
      <div className="max-w-md w-full text-center space-y-8">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="relative"
        >
          <h1 className="text-9xl font-bold text-gray-300 dark:text-gray-700">404</h1>
          <motion.h2 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-3xl font-bold text-gray-800 dark:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            Page Not Found
          </motion.h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-300"
        >
          Oops! The page you're looking for doesn't exist or has been moved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button 
            onClick={() => router.back()}
            variant="secondary" 
            size="lg"
          >
            Go Back
          </Button>

          <Link href="/">
            <Button variant="secondary" size="lg">
              Return Home
            </Button>
          </Link>
          
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Contact Support
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}
