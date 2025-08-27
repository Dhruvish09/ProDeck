'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Profile from '../../pages/Resume'
import Layout from '../../components/Layout'

export default function ResumePage() {
  return (
    <div className="h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="h-full w-full"
        >
          <Layout>
            <Profile />
          </Layout>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
