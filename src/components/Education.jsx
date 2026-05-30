import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap } from 'react-icons/fa'
import { FiAward, FiCalendar } from 'react-icons/fi'

const Education = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const education = [
    {
      degree: 'B.Tech Computer Engineering',
      institution: "Modern Education Society's Wadia College Of Engineering",
      location: 'Pune',
      year: '2023 - Present',
      details: 'Currently Pursuing Second Year',
      cgpa: 'CGPA: 8.32',
      icon: FaGraduationCap,
    },
    {
      degree: '12th Standard',
      institution: 'Child Career English Medium School and Jr College',
      location: 'Newasa',
      year: '2021 - 2023',
      details: 'Science Stream',
      icon: FiAward,
    },
    {
      degree: '10th Standard',
      institution: 'Sundarbai Kanya Vidyalaya',
      location: 'Newasa',
      year: '2011 - 2021',
      details: 'CBSE Board',
      icon: FiAward,
    },
  ]

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="education" ref={ref} className="py-20 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Education</h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {education.map((edu, idx) => {
              const Icon = edu.icon
              const isEven = idx % 2 === 0

              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={`flex flex-col md:flex-row gap-6 items-stretch ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Content */}
                  <div className="flex-1 card">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {edu.degree}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400">{edu.institution}</p>
                      </div>
                    </div>

                    <div className="space-y-2 text-slate-700 dark:text-slate-300">
                      <p className="flex items-center gap-2">
                        <FiCalendar className="text-blue-600" />
                        {edu.year}
                      </p>
                      <p>{edu.details}</p>
                      {edu.cgpa && <p className="font-semibold text-blue-600 dark:text-blue-400">{edu.cgpa}</p>}
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-col items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 border-4 border-white dark:border-slate-950 z-10"
                    ></motion.div>
                  </div>

                  {/* Empty space for alternation */}
                  <div className="hidden md:flex flex-1"></div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
