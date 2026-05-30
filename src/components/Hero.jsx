import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { FiDownload, FiMail, FiCode } from 'react-icons/fi'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-purple-900/20 -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-6 text-center"
      >
        {/* Profile Image */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <div className="relative w-40 h-40 mx-auto mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-1"
            >
              <div className="w-full h-full rounded-full bg-white dark:bg-slate-950 flex items-center justify-center text-5xl font-bold gradient-text dark:gradient-text-light">
                GH
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Text */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text dark:gradient-text-light">Gaytri Hande</span>
          </h1>
        </motion.div>

        {/* Typewriter Animation */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-2xl md:text-4xl font-semibold text-blue-600 dark:text-blue-400 h-16 flex items-center justify-center">
            <Typewriter
              words={[
                'Full Stack Developer',
                'Computer Engineering Student',
                'Problem Solver',
                'Tech Enthusiast',
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Motivated 2nd year Computer Engineering student passionate about building responsive full-stack applications. Expertise in React, Node.js, and databases.
        </motion.p>

        {/* Location */}
        <motion.p
          variants={itemVariants}
          className="text-md text-slate-500 dark:text-slate-400 mb-12"
        >
          📍 Pune City, Maharashtra, India
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary flex items-center gap-2"
          >
            <FiCode /> View Projects
          </motion.a>
          <motion.a
            href="https://drive.google.com/file/d/your-resume-id/view"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary flex items-center gap-2"
          >
            <FiDownload /> Download Resume
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary flex items-center gap-2"
          >
            <FiMail /> Contact Me
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="text-blue-600 dark:text-blue-400 text-2xl">↓</div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
