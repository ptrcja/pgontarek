import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { WccCaseStudy, WccCaseStudyHero } from '@/components/case-study/wcc-case-study'
import { caseStudyHref, getCaseStudy } from '@/lib/case-studies'

const study = getCaseStudy('wcc-qa')

export const metadata: Metadata = {
  title: `${study.title} | Patrycja Gontarek`,
  description: study.subtitle,
  alternates: { canonical: caseStudyHref(study.slug) },
  openGraph: {
    type: 'article',
    url: caseStudyHref(study.slug),
    title: study.title,
    description: study.subtitle,
    siteName: 'Patrycja Gontarek, QA Engineer',
  },
  twitter: { card: 'summary', title: study.title, description: study.subtitle },
}

const backLink =
  'inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded'

export default function WccCaseStudyPage() {
  return (
    <main className="min-h-screen bg-cream-light">
      {/* Navigation (same bar as the home page) */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-border z-50" aria-label="Main navigation">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="font-serif text-xl font-semibold rounded focus:outline-none focus:ring-2 focus:ring-primary">
              Patrycja Gontarek
            </Link>
            <Link href="/#work" className={backLink}>
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to portfolio
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <WccCaseStudyHero />
        </div>
      </section>

      {/* Body */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <WccCaseStudy />
          <p className="max-w-3xl mx-auto pt-16">
            <Link href="/#work" className={backLink}>
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to portfolio
            </Link>
          </p>
        </div>
      </section>

      {/* Footer (same as the home page) */}
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
