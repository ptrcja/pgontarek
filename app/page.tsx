'use client'

import { motion } from 'framer-motion'
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Coffee,
  Sparkles,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button, buttonVariants } from '@/components/ui/button'
import { caseStudies, caseStudyHref } from '@/lib/case-studies'

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

// Card tags: a few specific tools per item, not a full stack list
const CASE_STUDY_TAGS: Record<string, string[]> = {
  'wcc-qa': ['Playwright API tests', 'Zod schemas', 'Faker data factories', 'GitHub Actions'],
}

const PROJECTS = [
  {
    title: 'Chargeback QA Suite',
    label: 'API automation · AI-assisted triage',
    summary:
      'Playwright API tests for payment chargeback flows against a mocked provider. When a test fails, an n8n workflow asks Claude to analyse it and opens a GitHub issue with a suggested fix.',
    tags: ['Playwright API tests', 'Mockoon', 'n8n', 'Claude AI'],
    repo: 'https://github.com/ptrcja/chargeback-qa-suite',
    icon: Sparkles,
  },
  {
    title: 'Flaky Test Detector',
    label: 'Test tooling',
    summary:
      'Runs a Playwright suite many times to find intermittent failures, then reports failure rates and confidence scores in an HTML dashboard.',
    tags: ['Playwright E2E', 'CTRF reports', 'Node.js'],
    repo: 'https://github.com/ptrcja/flaky-test-project-playwright',
    icon: Coffee,
  },
]

const EXPERIENCE: {
  title: string
  meta?: string
  period: string
  summary: string
  link?: { label: string; href: string }
}[] = [
  {
    title: 'QA Engineer · Women Coding Community',
    meta: 'Volunteer · Open source',
    period: 'October 2025 – Present',
    summary:
      'Contribute to automated UI and API testing, investigate application and test-environment issues, and improve test reliability and documentation alongside a distributed QA team.',
    link: {
      label: 'View contributions',
      href: 'https://github.com/Women-Coding-Community/wcc-qa/pulls?q=is%3Apr+author%3Aptrcja',
    },
  },
  {
    title: 'QA Tester · Testlio',
    period: 'February 2025 – Present',
    summary:
      'Participated in exploratory and functional testing cycles for iOS and web applications, documenting defects and verifying application behaviour.',
  },
  {
    title: 'Operations & Systems Support · Dutch Value Logistics',
    period: 'July 2022 – January 2025',
    summary:
      'Supported a warehouse management system migration through UAT, issue reproduction, documentation, and collaboration with technical teams.',
  },
]

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
              <a href="#work" className="text-sm font-medium hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">Work</a>
              <a href="#experience" className="text-sm font-medium hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">Experience</a>
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



          </motion.div>
        </div>
      </section>

      {/* About Section: left-aligned text, one highlighter accent on the name */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <motion.div
            className="max-w-3xl mx-auto"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display mb-8 text-center">About Me</h2>

            <p className="text-lg md:text-xl leading-relaxed mb-6 text-pretty">
              Hi, I’m{' '}
              <mark
                className="bg-transparent text-inherit font-medium px-0.5 rounded-sm [box-decoration-break:clone]"
                style={{ backgroundImage: 'linear-gradient(transparent 28%, #ded6ff 28%, #ded6ff 92%, transparent 92%)' }}
              >
                Patrycja
              </mark>
              , an ISTQB-certified QA Engineer who loves turning small testing details into big wins for users.
              My background in e-commerce and operations shaped my customer-first mindset, which I now bring to software testing.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground text-pretty">
              This portfolio brings together selected work, technical contributions, and the challenges I&apos;ve tackled along the way. Enjoy exploring!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Work Section: case study first, then projects */}
      <section id="work" className="scroll-mt-16 py-16 px-4 sm:px-6 lg:px-8 bg-cream-light">
        <div className="container mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-display mb-6 text-center"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Featured Work
          </motion.h2>
          <motion.p
            className="text-lead mb-12 text-muted-foreground text-center max-w-4xl mx-auto text-balance xl:whitespace-nowrap"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Real QA work, from open-source contributions to my own automation projects.
          </motion.p>

          <div className="max-w-5xl mx-auto space-y-8">
            {caseStudies.map(study => (
              <motion.div
                key={study.slug}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">{study.title}</CardTitle>
                    <CardDescription className="text-lg font-medium">
                      {study.organisation} | {study.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{study.summary}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {(CASE_STUDY_TAGS[study.slug] ?? []).map(t => (
                        <span key={t} className="px-3 py-1 bg-gradient-to-r from-lavender-light to-lavender-dark text-xs rounded-full font-medium">{t}</span>
                      ))}
                    </div>
                    <Link href={caseStudyHref(study.slug)} className={buttonVariants({ size: 'sm' })}>
                      Read case study
                      <ArrowRight className="h-4 w-4 ml-2" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {PROJECTS.map(project => (
                <motion.div key={project.title} variants={fadeInUp}>
                  <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 group">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <project.icon className="h-8 w-8 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                      </div>
                      <CardDescription>{project.label}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow">
                      <p className="text-sm text-muted-foreground mb-4">{project.summary}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map(t => (
                          <span key={t} className="px-3 py-1 bg-gradient-to-r from-lavender-light to-lavender-dark text-xs rounded-full font-medium">{t}</span>
                        ))}
                      </div>
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${buttonVariants({ size: 'sm' })} w-full mt-auto`}
                      >
                        <Github className="h-4 w-4 mr-2" aria-hidden="true" />
                        View Project
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section: concise role summaries (EXPERIENCE list above) */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-display mb-12 text-center"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>

          <motion.div
            className="max-w-4xl mx-auto space-y-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {EXPERIENCE.map(role => (
              <motion.div key={role.title} variants={fadeInUp}>
                <Card>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl">{role.title}</CardTitle>
                        {role.meta && (
                          <CardDescription className="text-lg font-medium">{role.meta}</CardDescription>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground mt-2 md:mt-0">{role.period}</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{role.summary}</p>
                    {role.link && (
                      <a
                        href={role.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${buttonVariants({ variant: 'outline', size: 'sm' })} mt-6`}
                      >
                        <Github className="h-4 w-4 mr-2" aria-hidden="true" />
                        {role.link.label}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-cream-light">
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