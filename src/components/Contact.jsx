import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiSend, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              Let's Connect
            </h3>

            <motion.div
              whileHover={{ x: 10 }}
              className="card flex items-start gap-4"
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white flex-shrink-0">
                <FiMail size={24} />
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">Email</p>
                <a
                  href="mailto:handegaytri1@gmail.com"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 smooth-transition"
                >
                  handegaytri1@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              className="card flex items-start gap-4"
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-green-600 to-teal-600 text-white flex-shrink-0">
                <FiPhone size={24} />
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">Phone</p>
                <a
                  href="tel:+917387503447"
                  className="text-slate-600 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 smooth-transition"
                >
                  +91 7387503447
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              className="card flex items-start gap-4"
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-pink-600 to-rose-600 text-white flex-shrink-0">
                <FiMapPin size={24} />
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">Location</p>
                <p className="text-slate-600 dark:text-slate-400">
                  Pune City, Maharashtra, India
                </p>
              </div>
            </motion.div>

            {/* Response time */}
            <div className="card bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 border-l-4 border-blue-600">
              <p className="text-slate-700 dark:text-slate-300">
                <span className="font-semibold text-green-600 dark:text-green-400">✓ Actively Open</span> to
                opportunities and collaborations. I'll get back to you within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="card"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 smooth-transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 smooth-transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 smooth-transition resize-none"
                  placeholder="Tell me about your project or just say hi!"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <FiSend /> Send Message
              </motion.button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-green-100 dark:bg-green-900/30 border border-green-400 text-green-800 dark:text-green-300 text-center"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
