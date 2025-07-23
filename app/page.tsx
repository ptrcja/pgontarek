'use client'

import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  CheckCircle,
  Code,
  Database,
  Shield,
  Bug,
  TestTube,
  Users,
  FileCheck,
  Globe
} from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-cream-light">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-border z-50" role="navigation" aria-label="Main navigation">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="font-serif text-xl font-semibold"
            >
              Patrycja Gontarek
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden md:flex space-x-6"
            >
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">About</a>
              <a href="#experience" className="text-sm font-medium hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">Experience</a>
              <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">Projects</a>
              <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">Skills</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">Contact</a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8" role="banner">
        <div className="container mx-auto">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-display mb-4 text-6xl md:text-7xl lg:text-8xl">
                Patrycja Zofia Gontarek
              </h1>
              <p className="text-subheading text-2xl md:text-3xl text-muted-foreground">
                Junior QA Engineer
              </p>
            </motion.div>

            <motion.p
              className="text-lead text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              ISTQB Foundation Level certified QA professional with hands-on automation and manual testing experience.
              Specialized in quality assurance, test automation, and ensuring exceptional software reliability.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span>Utrecht, The Netherlands</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" aria-hidden="true" />
                <a href="tel:+310687146217" className="hover:text-primary transition-colors">+31 0687146217</a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" aria-hidden="true" />
                <a href="mailto:patgontarek17@gmail.com" className="hover:text-primary transition-colors">patgontarek17@gmail.com</a>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-6 justify-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button size="lg" asChild className="px-8 py-4">
                <a href="https://github.com/ptrcja" target="_blank" rel="noopener noreferrer" aria-label="View GitHub profile">
                  <Github className="h-5 w-5 mr-3" aria-hidden="true" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="px-8 py-4 border-2">
                <a href="https://www.linkedin.com/in/patrycja-gontarek-21b570293/" target="_blank" rel="noopener noreferrer" aria-label="View LinkedIn profile">
                  <Linkedin className="h-5 w-5 mr-3" aria-hidden="true" />
                  LinkedIn
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-display mb-8 text-center"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>

            <motion.div
              className="prose prose-lg mx-auto text-center"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg leading-relaxed mb-6">
                ISTQB Foundation Level certified QA professional with hands-on automation and manual testing experience.
                Detail-oriented professional with 5+ years of customer experience in e-commerce with strong analytical
                mindset and passion for quality assurance.
              </p>
              <p className="text-lg leading-relaxed">
                Demonstrated ability to analyze complex customer issues and document clear, actionable solutions.
                Committed to delivering high-quality software through comprehensive testing methodologies and
                continuous improvement practices.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp} className="text-center">
                <div className="bg-lavender-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-2">ISTQB Certified</h3>
                <p className="text-muted-foreground">Foundation Level certification ensuring industry-standard testing practices</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center">
                <div className="bg-lavender-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Automation Expert</h3>
                <p className="text-muted-foreground">Selenium WebDriver, Java, and Cucumber BDD for comprehensive test automation</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center">
                <div className="bg-lavender-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-2">5+ Years Experience</h3>
                <p className="text-muted-foreground">Customer-focused experience in e-commerce with analytical problem-solving</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-cream-light">
        <div className="container mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-display mb-12 text-center"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Professional Experience
          </motion.h2>

          <motion.div
            className="max-w-4xl mx-auto space-y-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl">Freelance QA Tester</CardTitle>
                      <CardDescription className="text-lg font-medium">Testlio | Remote</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                      June 2025 - Present
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>Certified regression tester participating in paid crowdtesting projects for real-world applications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>Execute manual testing scenarios and provide detailed bug reports for client products</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border-l-4 border-l-secondary">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl">Operations Systems Specialist</CardTitle>
                      <CardDescription className="text-lg font-medium">Dutch Value Logistics | Houten, The Netherlands</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                      July 2022 - January 2025
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>Processed 1,000+ B2B orders efficiently maintaining accuracy standards across complex workflow systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>Investigated inventory discrepancies using systematic analysis ensuring accurate stock levels in SAP system</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>Optimized packing workflows by 20% through process analysis and cross-team collaboration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>Created detailed documentation for Picqer system implementation supporting team training initiatives</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>


          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-display mb-12 text-center"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <TestTube className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                    <CardTitle className="text-xl">Address Management Test Automation</CardTitle>
                  </div>
                  <CardDescription>
                    E-commerce address lifecycle automation preventing delivery failures and improving customer trust
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li>• Complete address management workflow automation</li>
                    <li>• Prevents failed deliveries and shipping problems</li>
                    <li>• BDD scenarios written in plain English</li>
                    <li>• Page Object Model architecture</li>
                    <li>• Address creation, verification, and deletion testing</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-lavender-light to-lavender-dark text-xs rounded-full font-medium">Selenium WebDriver</span>
                    <span className="px-3 py-1 bg-gradient-to-r from-lavender-light to-lavender-dark text-xs rounded-full font-medium">Java</span>
                    <span className="px-3 py-1 bg-gradient-to-r from-lavender-light to-lavender-dark text-xs rounded-full font-medium">Cucumber BDD</span>
                    <span className="px-3 py-1 bg-gradient-to-r from-lavender-light to-lavender-dark text-xs rounded-full font-medium">Maven</span>
                  </div>
                  <Button size="sm" asChild className="w-full">
                    <a href="https://github.com/ptrcja/1.-Workshop-task-SeleniumWebdriver-Cucumber" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" aria-hidden="true" />
                      View Project
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <Database className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                    <CardTitle className="text-xl">E-commerce Test Automation Suite</CardTitle>
                  </div>
                  <CardDescription>
                    Advanced automation framework for comprehensive e-commerce testing workflows
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li>• Complete e-commerce workflow automation</li>
                    <li>• Advanced Page Object Model implementation</li>
                    <li>• Cross-browser compatibility testing</li>
                    <li>• Comprehensive test reporting and documentation</li>
                    <li>• End-to-end purchase flow validation</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-lavender-light to-lavender-dark text-xs rounded-full font-medium">Selenium WebDriver</span>
                    <span className="px-3 py-1 bg-gradient-to-r from-lavender-light to-lavender-dark text-xs rounded-full font-medium">Java</span>
                    <span className="px-3 py-1 bg-gradient-to-r from-lavender-light to-lavender-dark text-xs rounded-full font-medium">TestNG</span>
                    <span className="px-3 py-1 bg-gradient-to-r from-lavender-light to-lavender-dark text-xs rounded-full font-medium">Maven</span>
                  </div>
                  <Button size="sm" asChild className="w-full">
                    <a href="https://github.com/ptrcja/2.-WorkshopTask" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" aria-hidden="true" />
                      View Project
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <Bug className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                    <CardTitle className="text-xl">Trello QA Testing Project</CardTitle>
                  </div>
                  <CardDescription>
                    Professional manual testing showcase with live documentation and comprehensive bug reporting
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li>• 5 comprehensive test cases with 80% pass rate</li>
                    <li>• Live documentation with interactive test results</li>
                    <li>• 1 medium-severity bug identified and documented</li>
                    <li>• Authentication, registration, and board management testing</li>
                    <li>• Security testing including XSS validation</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-lavender-light to-lavender-dark text-xs rounded-full font-medium">Manual Testing</span>
                    <span className="px-3 py-1 bg-gradient-to-r from-lavender-light to-lavender-dark text-xs rounded-full font-medium">Security Testing</span>
                    <span className="px-3 py-1 bg-gradient-to-r from-lavender-light to-lavender-dark text-xs rounded-full font-medium">Chrome DevTools</span>
                    <span className="px-3 py-1 bg-gradient-to-r from-lavender-light to-lavender-dark text-xs rounded-full font-medium">Bug Reporting</span>
                  </div>
                  <Button size="sm" asChild className="w-full">
                    <a href="https://ptrcja.github.io/Trello-Testing-Project/" target="_blank" rel="noopener noreferrer">
                      <Globe className="h-4 w-4 mr-2" aria-hidden="true" />
                      View Live Project
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-cream-light">
        <div className="container mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-display mb-12 text-center"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Technologies & Skills
          </motion.h2>

          <motion.div
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div variants={fadeInUp}>
                <Card>
                  <CardHeader className="text-center">
                    <TestTube className="h-12 w-12 text-primary mx-auto mb-3" aria-hidden="true" />
                    <CardTitle className="text-lg">Testing Methods</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>Manual Testing</li>
                      <li>Black-box Testing</li>
                      <li>White-box Testing</li>
                      <li>Test Automation</li>
                      <li>Functional Testing</li>
                      <li>Regression Testing</li>
                      <li>API Testing</li>
                      <li>Exploratory Testing</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card>
                  <CardHeader className="text-center">
                    <Code className="h-12 w-12 text-primary mx-auto mb-3" aria-hidden="true" />
                    <CardTitle className="text-lg">Tools & Technologies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>Selenium WebDriver</li>
                      <li>Java</li>
                      <li>Cucumber BDD</li>
                      <li>JIRA</li>
                      <li>Postman</li>
                      <li>Chrome DevTools</li>
                      <li>Git</li>
                      <li>SQL</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card>
                  <CardHeader className="text-center">
                    <FileCheck className="h-12 w-12 text-primary mx-auto mb-3" aria-hidden="true" />
                    <CardTitle className="text-lg">Methodologies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>Agile/Scrum</li>
                      <li>SDLC</li>
                      <li>STLC</li>
                      <li>Page Object Model (POM)</li>
                      <li>BDD</li>
                      <li>Test Case Design</li>
                      <li>Bug Reporting</li>
                      <li>Documentation</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card>
                  <CardHeader className="text-center">
                    <Globe className="h-12 w-12 text-primary mx-auto mb-3" aria-hidden="true" />
                    <CardTitle className="text-lg">Languages & Other</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>English (Business)</li>
                      <li>Polish (Native)</li>
                      <li>TCP/IP protocols</li>
                      <li>HTTP/HTTPS</li>
                      <li>CRM Systems</li>
                      <li>SAP System</li>
                      <li>E-commerce Platforms</li>
                      <li>Cross-team Collaboration</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              className="mt-12 text-center"
              variants={fadeInUp}
            >
              <Card className="bg-lavender-light border-2 border-primary/20">
                <CardHeader>
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Shield className="h-8 w-8 text-primary" aria-hidden="true" />
                    <CardTitle className="text-2xl">Professional Certifications</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-lg mb-2">ISTQB Foundation Level - Certified</h4>
                      <p className="text-muted-foreground text-sm">May 2025</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-lg mb-2">Manual and Automation QA Testing Bootcamp</h4>
                      <p className="text-muted-foreground text-sm">Completed January 2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-display mb-8"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              Let's Connect
            </motion.h2>

            <motion.p
              className="text-lead mb-8 text-muted-foreground"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              I'm always interested in discussing QA opportunities, testing challenges,
              and how I can contribute to your team's success.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Mail className="h-8 w-8 text-primary mx-auto mb-3" aria-hidden="true" />
                    <h3 className="font-semibold mb-2">Email</h3>
                    <a
                      href="mailto:patgontarek17@gmail.com"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      patgontarek17@gmail.com
                    </a>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Phone className="h-8 w-8 text-primary mx-auto mb-3" aria-hidden="true" />
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <a
                      href="tel:+310687146217"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      +31 0687146217
                    </a>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <MapPin className="h-8 w-8 text-primary mx-auto mb-3" aria-hidden="true" />
                    <h3 className="font-semibold mb-2">Location</h3>
                    <p className="text-sm text-muted-foreground">Utrecht, The Netherlands</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex gap-6 justify-center"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Button size="lg" asChild className="px-8 py-4">
                <a href="https://github.com/ptrcja" target="_blank" rel="noopener noreferrer" aria-label="View GitHub profile">
                  <Github className="h-5 w-5 mr-3" aria-hidden="true" />
                  GitHub Portfolio
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="px-8 py-4 border-2">
                <a href="https://www.linkedin.com/in/patrycja-gontarek-21b570293/" target="_blank" rel="noopener noreferrer" aria-label="Connect on LinkedIn">
                  <Linkedin className="h-5 w-5 mr-3" aria-hidden="true" />
                  LinkedIn
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="text-center">
            <p className="text-sm">
              © 2025 Patrycja Zofia Gontarek. Built with Next.js, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-xs mt-2 opacity-75">
              ISTQB Foundation Level Certified QA Engineer
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
} 