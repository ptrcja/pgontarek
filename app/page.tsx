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
  Globe,
  Coffee,
  Sparkles
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
              Quality Assurance Engineer
              </p>
            </motion.div>

            <motion.p
              className="text-lead text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
             
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
          
              
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
              
          
              </div>
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
              Hi, I’m Patrycja, an ISTQB-certified QA Engineer who loves turning small testing details into big wins for users.
              My background in e-commerce and operations shaped my customer-first mindset, which now helps me spot issues and create smooth solutions. 
               
              </p>
              <p className="text-lg leading-relaxed">
              This portfolio is a space where I share my projects, learning progress, and the skills I’m building along the way.
              Right now, I’m diving into test automation with Playwright and TypeScript, and enjoying every step of the journey! 
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
                <h3 className="text-xl font-semibold mb-2">Automation</h3>
                <p className="text-muted-foreground">Specializing in Playwright with TypeScript, building automation solutions that make testing faster and smarter</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center">
                <div className="bg-lavender-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer-Focused Experience</h3>
                <p className="text-muted-foreground">5+ years in e-commerce and operations taught me how to think like a user and solve problems with impact</p>
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
                      <CardTitle className="text-xl">QA Engineer</CardTitle>
                      <CardDescription className="text-lg font-medium">Women Coding Community | Remote</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                      October 2025 - Present
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>Developed and maintained automated functional tests using Playwright and TypeScript for an open-source project <a href="https://github.com/Women-Coding-Community/wcc-frontend" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Link</a></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>Refactored test architecture to Component Object pattern following code review - improved structure, reduced repetition, and long-term maintainability</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>Improved CI/CD reliability by reducing false test failures by ~30% through pipeline debugging and test stabilisation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>Contributed to weekly QA syncs, helping shape testing standards across a distributed open-source team</span>
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
                      <CardTitle className="text-xl">QA Tester</CardTitle>
                      <CardDescription className="text-lg font-medium">Testlio | Remote</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                      February 2025 - Present
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>Participated in crowdsourced test cycles for iOS and web applications, gaining exposure to real-world bug reporting workflows and defect management processes</span>
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
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <Coffee className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                    <CardTitle className="text-xl">Coffee E-commerce Flaky Test Detector</CardTitle>
                  </div>
                  <CardDescription>
                    Statistical flaky test detection tool built for Coffee Store e-commerce platform, running Playwright tests repeatedly to generate comprehensive reports with confidence scores
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li>• Runs tests N times (10-100+) to detect intermittent failures</li>
                    <li>• Statistical analysis with failure rates and confidence scoring</li>
                    <li>• Interactive HTML reports with health metrics dashboard</li>
                    <li>• CTRF integration for standardized test result parsing</li>
                    <li>• Educational examples: stable vs flaky patterns</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-lavender-light to-lavender-dark text-xs rounded-full font-medium">Playwright</span>
                    <span className="px-3 py-1 bg-gradient-to-r from-lavender-light to-lavender-dark text-xs rounded-full font-medium">TypeScript</span>
                    <span className="px-3 py-1 bg-gradient-to-r from-lavender-light to-lavender-dark text-xs rounded-full font-medium">Node.js</span>
                    <span className="px-3 py-1 bg-gradient-to-r from-lavender-light to-lavender-dark text-xs rounded-full font-medium">CTRF</span>
                  </div>
                  <a href="https://github.com/ptrcja/flaky-test-project-playwright" target="_blank" rel="noopener noreferrer" className="w-full mt-auto">
                    <Button size="sm" className="w-full">
                      <Github className="h-4 w-4 mr-2" aria-hidden="true" />
                      View Project
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <Database className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                    <CardTitle className="text-xl">E-commerce Test Automation Suite</CardTitle>
                  </div>
                  <CardDescription>
                    Advanced automation framework for comprehensive e-commerce testing workflows
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
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
                    <span className="px-3 py-1 bg-gradient-to-r from-lavender-light to-lavender-dark text-xs rounded-full font-medium">Gherkin</span>
                    <span className="px-3 py-1 bg-gradient-to-r from-lavender-light to-lavender-dark text-xs rounded-full font-medium">Maven</span>
                  </div>
                  <a href="https://github.com/ptrcja/2.-WorkshopTask" target="_blank" rel="noopener noreferrer" className="w-full mt-auto">
                    <Button size="sm" className="w-full">
                      <Github className="h-4 w-4 mr-2" aria-hidden="true" />
                      View Project
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                    <CardTitle className="text-xl">Chargeback QA Suite</CardTitle>
                  </div>
                  <CardDescription>
                    AI-assisted QA framework for compliance-critical payment chargeback workflows with auto-triaged failures
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li>• 13 API tests across 3 browsers running on GitHub Actions</li>
                    <li>• On failure, n8n webhook triggers Claude AI to analyze the issue</li>
                    <li>• Auto-creates structured GitHub Issues with root cause and suggested fix</li>
                    <li>• Mockoon mock server simulating a real payment provider</li>
                    <li>• Compliance-focused chargeback flow coverage</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-lavender-light to-lavender-dark text-xs rounded-full font-medium">Playwright</span>
                    <span className="px-3 py-1 bg-gradient-to-r from-lavender-light to-lavender-dark text-xs rounded-full font-medium">TypeScript</span>
                    <span className="px-3 py-1 bg-gradient-to-r from-lavender-light to-lavender-dark text-xs rounded-full font-medium">n8n</span>
                    <span className="px-3 py-1 bg-gradient-to-r from-lavender-light to-lavender-dark text-xs rounded-full font-medium">Claude AI</span>
                    <span className="px-3 py-1 bg-gradient-to-r from-lavender-light to-lavender-dark text-xs rounded-full font-medium">Mockoon</span>
                    <span className="px-3 py-1 bg-gradient-to-r from-lavender-light to-lavender-dark text-xs rounded-full font-medium">GitHub Actions</span>
                  </div>
                  <a href="https://github.com/ptrcja/chargeback-qa-suite" target="_blank" rel="noopener noreferrer" className="w-full mt-auto">
                    <Button size="sm" className="w-full">
                      <Github className="h-4 w-4 mr-2" aria-hidden="true" />
                      View Project
                    </Button>
                  </a>
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
                <Card className="h-full flex flex-col">
                  <CardHeader className="text-center">
                    <TestTube className="h-12 w-12 text-primary mx-auto mb-3" aria-hidden="true" />
                    <CardTitle className="text-lg">Testing</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2 text-sm">
                      <li>Functional, Regression, Exploratory</li>
                      <li>Compatibility, Integration, UAT</li>
                      <li>Mobile (iOS), Defect Management</li>
                      <li>Test Case Design</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full flex flex-col">
                  <CardHeader className="text-center">
                    <Code className="h-12 w-12 text-primary mx-auto mb-3" aria-hidden="true" />
                    <CardTitle className="text-lg">Automation & CI/CD</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2 text-sm">
                      <li>Playwright, TypeScript</li>
                      <li>Selenium, Cucumber BDD</li>
                      <li>GitHub Actions, GitHub (PR Reviews)</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full flex flex-col">
                  <CardHeader className="text-center">
                    <FileCheck className="h-12 w-12 text-primary mx-auto mb-3" aria-hidden="true" />
                    <CardTitle className="text-lg">API, Tools & Data</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2 text-sm">
                      <li>Postman, Bruno, REST API, Contract Testing</li>
                      <li>Mockoon, Chrome DevTools, TestFlight</li>
                      <li>JIRA, TestLink, Zendesk, Notion</li>
                      <li>MySQL, PostgreSQL</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full flex flex-col">
                  <CardHeader className="text-center">
                    <Sparkles className="h-12 w-12 text-primary mx-auto mb-3" aria-hidden="true" />
                    <CardTitle className="text-lg">AI, Methods & Languages</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2 text-sm">
                      <li>n8n workflow automation</li>
                      <li>Claude AI integration, AI-assisted test triage</li>
                      <li>Agile/Scrum, SDLC, STLC, BDD, Shift-left</li>
                      <li>English (Business), Polish (Native)</li>
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
                      <h4 className="font-semibold text-lg mb-2">Manual and Automation QA Testing Bootcamp at Coders Lab</h4>
                      <p className="text-muted-foreground text-sm">Completed January 2025</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-lg mb-2">Certificate of Recognition - Women Coding Community</h4>
                      <p className="text-muted-foreground text-sm">January 2026</p>
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
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto"
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
                    <MapPin className="h-8 w-8 text-primary mx-auto mb-3" aria-hidden="true" />
                    <h3 className="font-semibold mb-2">Location</h3>
                    <p className="text-sm text-muted-foreground">Utrecht, the Netherlands</p>
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
              © 2026 Patrycja Zofia Gontarek. Built with Next.js, TypeScript, and Tailwind CSS.
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