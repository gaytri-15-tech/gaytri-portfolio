import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiLinkedin, FiGithub, FiMail, FiInstagram } from 'react-icons/fi'

const CodingProfiles = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const profiles = [
    {
      name: 'GitHub',
      handle: 'gaytri-15-tech',
      url: 'https://github.com/gaytri-15-tech',
      icon: FiGithub,
      description: '100+ Repositories & Open Source Contributions',
      color: 'from-gray-600 to-gray-800',
    },
    {
      name: 'LinkedIn',
      handle: 'gaytri-hande-969992328',
      url: 'https://linkedin.com/in/gaytri-hande-969992328',
      icon: FiLinkedin,
      description: 'Professional Network & Experience',
      color: 'from-blue-600 to-blue-800',
    },
    {
      name: 'LeetCode',
      handle: '100+ Problems Solved',
      url: '#',
      icon: FiMail,
      description: 'Data Structures & Algorithms Practice',
      color: 'from-yellow-600 to-orange-600',
    },
    {
      name: 'Email',
      handle: 'handegaytri1@gmail.com',
      url: 'mailto:handegaytri1@gmail.com',
      icon: FiMail,
      description: 'Get in Touch',
      color: 'from-red-600 to-pink-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="coding-profiles" ref={ref} className="py-20 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Coding Profiles & Connect</h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6"
        >
          {profiles.map((profile, idx) => {
            const Icon = profile.icon
            return (
              <motion.a
                key={idx}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)' }}
                className="card group overflow-hidden"
              >
                <div className={`h-1 bg-gradient-to-r ${profile.color}`}></div>

                <div className="space-y-4">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${profile.color} text-white group-hover:scale-110 smooth-transition`}>
                    <Icon size={28} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 smooth-transition">
                      {profile.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm font-mono break-all">
                      {profile.handle}
                    </p>
                  </div>

                  <p className="text-slate-700 dark:text-slate-300 text-sm">
                    {profile.description}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="mt-4 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-100 dark:hover:bg-blue-900 smooth-transition w-full"
                  >
                    Visit Profile
                  </motion.button>
                </div>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Extra Activities */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 card"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Extracurricular Activities
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">🌍 NSS Member</p>
              <p className="text-slate-700 dark:text-slate-300">National Service Scheme</p>
            </div>
            <div className="space-y-2">
              <p className="text-lg font-semibold text-purple-600 dark:text-purple-400">💻 Web Developer</p>
              <p className="text-slate-700 dark:text-slate-300">EIC Club, MESWCOE Pune</p>
            </div>
            <div className="space-y-2">
              <p className="text-lg font-semibold text-green-600 dark:text-green-400">🎯 Problem Solver</p>
              <p className="text-slate-700 dark:text-slate-300">100+ LeetCode Problems</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CodingProfiles
