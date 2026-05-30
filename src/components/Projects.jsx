import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const projects = [
    {
      id: 1,
      title: 'Autonomous Data Cleaning & Feature Preparation System',
      description:
        'AI-driven data preprocessing system that detects missing values, duplicates, outliers, and inconsistent categories. Features automated preprocessing pipelines, intelligent feature scaling, blockchain-based audit logging, and comprehensive data quality reports.',
      tech: ['Python', 'Machine Learning', 'Data Processing', 'Blockchain'],
      color: 'from-blue-600 to-cyan-600',
      github: 'https://github.com/gaytri-15-tech',
      live: '#',
      highlights: [
        'Missing value detection & imputation',
        'Outlier detection algorithms',
        'Feature scaling automation',
        'Blockchain audit logging',
      ],
    },
    {
      id: 2,
      title: 'Inventory Management & Invoice Generator System',
      description:
        'Full-stack application for inventory management with role-based access control, JWT authentication, automated PDF invoice generation, and real-time sales analytics dashboard.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      color: 'from-purple-600 to-pink-600',
      github: 'https://github.com/gaytri-15-tech',
      live: '#',
      highlights: [
        'JWT Authentication',
        'Role-based Access Control',
        'Real-time Inventory Tracking',
        'PDF Invoice Generation',
        'Sales Analytics Dashboard',
      ],
    },
    {
      id: 3,
      title: 'GitMini – Custom Version Control System',
      description:
        'Git-inspired version control system built in C++ with support for commits, branching, checkout, and rollback operations. Uses advanced data structures and multithreading for efficient operations.',
      tech: ['C++', 'STL', 'JSON', 'Multithreading'],
      color: 'from-green-600 to-teal-600',
      github: 'https://github.com/gaytri-15-tech',
      live: '#',
      highlights: [
        'Commit Management',
        'Branching & Checkout',
        'Rollback Functionality',
        'Graph & HashMap Data Structures',
        'Multithreading & Mutex Synchronization',
      ],
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Featured Projects</h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="card overflow-hidden"
            >
              {/* Header with gradient */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>

              <div className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-900 smooth-transition"
                      title="GitHub Repository"
                    >
                      <FiGithub size={20} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-900 smooth-transition"
                      title="Live Demo"
                    >
                      <FiExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                      <span className="text-slate-700 dark:text-slate-300">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-4 py-2 rounded-lg bg-gradient-to-r ${project.color} text-white text-sm font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
