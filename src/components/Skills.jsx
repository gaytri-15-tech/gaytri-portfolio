import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FiCode,
  FiDatabase,
  FiTool,
  FiSmartphone,
  FiPackage,
  FiGitBranch,
} from 'react-icons/fi'

const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const skillCategories = [
    {
      title: 'Frontend',
      icon: FiSmartphone,
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap', 'Tailwind CSS'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Backend',
      icon: FiPackage,
      skills: ['Node.js', 'Express.js', 'REST APIs'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Databases',
      icon: FiDatabase,
      skills: ['MongoDB', 'MySQL'],
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'Languages',
      icon: FiCode,
      skills: ['C++', 'Python', 'Java', 'JavaScript'],
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Tools',
      icon: FiGitBranch,
      skills: ['Git', 'GitHub', 'VS Code', 'Linux'],
      color: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Core Subjects',
      icon: FiTool,
      skills: ['Operating System', 'OOP', 'DBMS', 'DSA'],
      color: 'from-pink-500 to-rose-500',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="skills" ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Skills & Technologies</h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, idx) => {
            const Icon = category.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="card group overflow-hidden"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${category.color} text-white mb-4 group-hover:scale-110 smooth-transition`}>
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  {category.title}
                </h3>

                <div className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: idx * 0.1 + i * 0.05 }}
                      className="flex items-center gap-2 text-slate-700 dark:text-slate-300"
                    >
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></span>
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Skill Bars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 space-y-6"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-8">
            Proficiency Levels
          </h3>

          {[
            { name: 'Full-Stack Development', level: 85 },
            { name: 'React.js & Frontend', level: 80 },
            { name: 'Node.js & Backend', level: 75 },
            { name: 'Database Management', level: 78 },
            { name: 'Data Structures & Algorithms', level: 82 },
          ].map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 + idx * 0.1 }}
              className="space-y-2"
            >
              <div className="flex justify-between">
                <span className="font-medium text-slate-900 dark:text-white">{skill.name}</span>
                <span className="text-blue-600 dark:text-blue-400 font-bold">{skill.level}%</span>
              </div>
              <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ delay: 0.7 + idx * 0.1, duration: 1.5 }}
                  className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
