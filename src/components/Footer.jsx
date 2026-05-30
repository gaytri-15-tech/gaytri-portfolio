import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiInstagram, FiArrowUp } from 'react-icons/fi'

const Footer = () => {
  const socials = [
    { icon: FiGithub, url: 'https://github.com/gaytri-15-tech', label: 'GitHub' },
    { icon: FiLinkedin, url: 'https://linkedin.com/in/gaytri-hande-969992328', label: 'LinkedIn' },
    { icon: FiMail, url: 'mailto:handegaytri1@gmail.com', label: 'Email' },
    { icon: FiInstagram, url: '#', label: 'Instagram' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-950 dark:bg-black text-slate-300 py-16 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold gradient-text dark:gradient-text-light mb-4">
              Gaytri Hande
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Full Stack Developer & Computer Engineering Student passionate about building innovative digital solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-blue-400 smooth-transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 smooth-transition">
                  Resume
                </a>
              </li>
              <li>
                <a href="https://github.com/gaytri-15-tech" className="hover:text-blue-400 smooth-transition">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/gaytri-hande-969992328" className="hover:text-blue-400 smooth-transition">
                  LinkedIn
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:handegaytri1@gmail.com" className="hover:text-blue-400 smooth-transition">
                  handegaytri1@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+917387503447" className="hover:text-blue-400 smooth-transition">
                  +91 7387503447
                </a>
              </li>
              <li className="text-slate-400">Pune, Maharashtra</li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mb-8"></div>

        {/* Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {socials.map((social, idx) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center smooth-transition"
                  aria-label={social.label}
                >
                  <Icon size={18} />
                </motion.a>
              )
            })}
          </motion.div>

          {/* Copyright & Back to Top */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-slate-400">
            <p>© 2024 Gaytri Hande. All rights reserved.</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={scrollToTop}
              className="p-2 rounded-full bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white smooth-transition"
              aria-label="Back to top"
            >
              <FiArrowUp size={18} />
            </motion.button>
          </div>
        </div>

        {/* Design credit */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-xs text-slate-500 mt-8"
        >
          Designed & Built with ❤️ using React, Tailwind CSS, and Framer Motion
        </motion.p>
      </div>
    </footer>
  )
}

export default Footer
