'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Resume from '../../pages/Resume'
import Layout from '../../components/Layout'

export default function ResumePage() {
  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Layout>
            <Resume />
          </Layout>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
