/**
 * All case studies shown on the home page ("Case Studies" section).
 *
 * To add one:
 * 1. Add an entry below.
 * 2. Create its page at app/case-studies/<slug>/page.tsx.
 * The home-page card and the page's title/metadata both read from this entry.
 */

export interface CaseStudy {
  /** URL segment: the page lives at /case-studies/<slug>/ */
  slug: string
  title: string
  /** Page subtitle and meta description */
  subtitle: string
  /** One or two sentences for the home-page card */
  summary: string
  organisation: string
  period: string
  tags: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'wcc-qa',
    title: 'Building Reliable API Tests and Troubleshooting CI at Women Coding Community',
    subtitle:
      'Extending mentor lifecycle coverage, investigating unexpected API behavior, and resolving CI failures in a collaborative open-source project.',
    summary:
      'How I extended mentor lifecycle coverage with Playwright API tests, caught a test that would have passed without checking its rule, and separated a broken CI runner from a genuine application change.',
    organisation: 'Women Coding Community',
    period: 'November 2026',
    tags: ['Playwright', 'TypeScript', 'REST APIs', 'Zod', 'Faker', 'GitHub Actions'],
  },
]

export const caseStudyHref = (slug: string) => `/case-studies/${slug}/`

export function getCaseStudy(slug: string): CaseStudy {
  const found = caseStudies.find(c => c.slug === slug)
  if (!found) throw new Error(`Unknown case study: ${slug}`)
  return found
}
