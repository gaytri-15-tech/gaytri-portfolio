import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ScrollReveal from './ScrollReveal'

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const skills = [
    '✨ Full-Stack Development',
    '🔧 RESTful APIs',
    '🗄️ Database Management',
    '🎨 Responsive Design',
    '📊 Data Structures & Algorithms',
    '🚀 Problem Solving',
  ]

  return (
    <section id="about" ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-30"></div>
              <div className="card relative w-full aspect-square rounded-2xl flex items-center justify-center text-7xl font-bold gradient-text dark:gradient-text-light">
                💻
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="card">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                I'm a motivated second-year Computer Engineering student with a strong foundation in full-stack web development, data structures, algorithms, and software engineering principles.
              </p>
            </div>

            <div className="card">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                I excel in building responsive full-stack applications, creating RESTful APIs, and managing databases efficiently. My passion lies in problem-solving and learning emerging technologies.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="card text-sm md:text-base font-medium text-slate-700 dark:text-slate-300"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
