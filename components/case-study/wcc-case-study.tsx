import { ArrowDown, CheckCircle, ChevronRight, CircleDot, ExternalLink, GitPullRequest } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { getCaseStudy } from '@/lib/case-studies'

/*
 * WCC QA case study content, rendered by app/case-studies/wcc-qa/page.tsx.
 * Every claim is sourced from Women-Coding-Community/wcc-qa issue #65 and PRs #104, #106, #108.
 * Title, subtitle and tags come from lib/case-studies.ts. Styling reuses the home page's conventions;
 * investigation details use native <details> toggles; code uses Playwright-docs (VS Code Light+) colours.
 */

const REPO = 'https://github.com/Women-Coding-Community/wcc-qa'
const ISSUE_65 = `${REPO}/issues/65`
const PR_104 = `${REPO}/pull/104`
const ISSUE_105 = `${REPO}/issues/105`
const PR_106 = `${REPO}/pull/106`
const ISSUE_107 = `${REPO}/issues/107`
const PR_108 = `${REPO}/pull/108`

const study = getCaseStudy('wcc-qa')

const QUICK_FACTS = [
  { value: '3', label: 'merged PRs', detail: 'Mentor coverage, CI workflow, and test maintenance.' },
  { value: '7', label: 'active tests', detail: 'Plus 2 deliberately skipped regression scenarios documenting unresolved behavior.' },
  { value: '2', label: 'backend defects documented', detail: 'Not fixed as part of this work.' },
]

const tagStyle = 'px-3 py-1 bg-gradient-to-r from-lavender-light to-lavender-dark text-xs rounded-full font-medium'

/* ---------- helpers (same styles as the live case study) ---------- */

function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary font-medium underline underline-offset-4 hover:no-underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}

function Block({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-24 pt-16">
      <h2 id={`${id}-heading`} className="text-3xl md:text-4xl font-display mb-6">
        {title}
      </h2>
      <div className="space-y-4 text-lg leading-relaxed">{children}</div>
    </section>
  )
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xl md:text-2xl font-heading pt-4">{children}</h3>
}

function Checks({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

/* Syntax colours in the style of the Playwright docs / VS Code Light+ (readable on the light code background) */
const TOKEN_COLOR: Record<string, string> = {
  comment: '#008000',
  string: '#a31515',
  keyword: '#0000ff',
  control: '#af00db',
  number: '#098658',
  fn: '#795e26',
  prop: '#001080',
  ident: '#001080',
  key: '#0451a5',
  method: '#af00db',
  param: '#001080',
}

type Lang = 'ts' | 'yaml' | 'http'

// [token kind, pattern] pairs, tried in order; each becomes one capture group.
const RULES: Record<Lang, [string, string][]> = {
  ts: [
    ['comment', '\\/\\/.*$'],
    ['string', '"(?:[^"\\\\]|\\\\.)*"|\'(?:[^\'\\\\]|\\\\.)*\'|`(?:[^`\\\\]|\\\\.)*`'],
    ['control', '\\b(?:await|async|return|if|else)\\b'],
    ['keyword', '\\b(?:const|let|var|new|true|false|null|undefined)\\b'],
    ['number', '\\b\\d+\\b'],
    ['fn', '\\b[A-Za-z_]\\w*(?=\\()'],
    ['prop', '(?<=\\.)[A-Za-z_]\\w*'],
    ['ident', '\\b[A-Za-z_]\\w*\\b'],
  ],
  yaml: [
    ['comment', '(?<=^|\\s)#.*$'],
    ['string', '"(?:[^"\\\\]|\\\\.)*"|\'(?:[^\'\\\\]|\\\\.)*\''],
    ['key', '[\\w-]+(?=:(?:\\s|$))'],
    ['number', '\\b\\d+(?:\\.\\d+)?\\b'],
  ],
  http: [
    ['comment', '(?<=^|\\s)#.*$'],
    ['method', '^(?:GET|POST|PUT|PATCH|DELETE)\\b'],
    ['param', '(?<=[?&])[\\w-]+(?==)'],
    ['string', '(?<==)[^&\\s]+'],
  ],
}

function highlight(line: string, lang: Lang) {
  const rules = RULES[lang]
  const re = new RegExp(rules.map(([, src]) => `(${src})`).join('|'), 'g')
  const out: React.ReactNode[] = []
  let last = 0
  let m: RegExpExecArray | null
  while ((m = re.exec(line)) !== null) {
    if (m[0] === '') { re.lastIndex++; continue }
    if (m.index > last) out.push(line.slice(last, m.index))
    const group = m.slice(1).findIndex(g => g !== undefined)
    const kind = group >= 0 ? rules[group][0] : undefined
    out.push(
      <span key={m.index} style={kind ? { color: TOKEN_COLOR[kind] } : undefined}>
        {m[0]}
      </span>
    )
    last = m.index + m[0].length
  }
  if (last < line.length) out.push(line.slice(last))
  return out
}

function Code({ label, lang, children }: { label: string; lang: Lang; children: string }) {
  return (
    <figure className="my-6 rounded-lg border border-border bg-cream-light">
      <figcaption className="border-b border-border px-4 py-2 font-mono text-xs text-muted-foreground">{label}</figcaption>
      <pre tabIndex={0} className="overflow-x-auto px-4 py-4 text-[14px] leading-7 focus:outline-none focus:ring-2 focus:ring-primary">
        <code className="!bg-transparent !p-0" style={{ color: '#1a1a1a' }}>
          {children.split('\n').map((line, i) => (
            <span key={i} className="block">
              {highlight(line, lang)}
              {line === '' && ' '}
            </span>
          ))}
        </code>
      </pre>
    </figure>
  )
}

function Toggle({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <details className="border-b border-border [&[open]>summary>svg]:rotate-90">
      <summary className="flex cursor-pointer list-none items-center gap-2 py-3 text-lg font-semibold hover:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded [&::-webkit-details-marker]:hidden">
        <ChevronRight className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-200" aria-hidden="true" />
        {title}
      </summary>
      <div className="space-y-4 pb-5 pl-7">{children}</div>
    </details>
  )
}

/* ---------- diagram: main request path + supporting parts ---------- */

type Status = 'New' | 'Extended' | 'Existing'

const statusStyle: Record<Status, string> = {
  New: 'bg-primary text-primary-foreground',
  Extended: 'bg-gradient-to-r from-lavender-light to-lavender-dark',
  Existing: 'border border-border text-muted-foreground',
}

function Box({ name, detail, status, dashed = false }: { name: string; detail: string; status?: Status; dashed?: boolean }) {
  return (
    <div className={`rounded-lg bg-white p-3 ${dashed ? 'border border-dashed border-border' : 'border border-border'}`}>
      <div className="flex items-baseline justify-between gap-2">
        <p className="font-semibold text-sm whitespace-nowrap">{name}</p>
        {status && <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyle[status]}`}>{status}</span>}
      </div>
      <p className="mt-1 text-xs text-muted-foreground leading-snug">{detail}</p>
    </div>
  )
}

function Arrow() {
  return (
    <div aria-hidden="true" className="flex justify-center py-1 text-muted-foreground md:w-[calc(100%-22.5rem)]">
      <ArrowDown className="h-4 w-4" />
    </div>
  )
}

function Row({ main, side, sideLabel }: { main: React.ReactNode; side?: React.ReactNode; sideLabel?: string }) {
  return (
    <div className="grid gap-2 md:grid-cols-[1fr_5.5rem_16rem] md:items-center">
      <div>{main}</div>
      <span className="hidden md:block text-xs text-muted-foreground whitespace-nowrap px-1" aria-hidden="true">
        {side ? `← ${sideLabel}` : ''}
      </span>
      <div className={side ? 'pl-6 md:pl-0' : 'hidden md:block'}>{side}</div>
    </div>
  )
}

function FlowDiagram() {
  return (
    <figure className="my-8 rounded-lg border border-border bg-cream-light p-4 sm:p-6">
      <figcaption className="mb-4 text-sm">
        <span className="font-semibold">A simplified view of the test flow.</span>{' '}
        <span className="text-muted-foreground">Main request path on the left; supporting parts on the right.</span>
      </figcaption>
      <Row
        main={<Box name="Playwright specs" status="New" detail="Check specific behavior: reject, update, and ad-hoc flow specs." />}
        side={<Box name="Zod schemas" status="Extended" detail="Validate response shapes before asserting: availability, typed months." />}
        sideLabel="validates"
      />
      <Arrow />
      <Row main={<Box name="Role-scoped fixtures" status="Existing" detail="Select the calling role: mentorApi, mentorshipAdminApi, authApi, adminApi." />} />
      <Arrow />
      <Row
        main={<Box name="Services" status="Extended" detail="Setup and API operations in domain terms: reject, update, registration options, CMS type filtering." />}
        side={<Box name="Test-data factory" status="Extended" detail="Valid mentor payloads: long-term, ad-hoc, or both." />}
        sideLabel="uses"
      />
      <Arrow />
      <Row main={<Box name="Clients" status="Extended" detail="Send HTTP requests: reject/update endpoints and an optional CMS type query." />} />
      <Arrow />
      <Row main={<Box name="WCC backend REST API" detail="The platform under test." dashed />} />
    </figure>
  )
}

/* ---------- Investigation 2/2 comparison, same panel style as the flow diagram ---------- */

const FAILURES = [
  {
    title: 'CI environment failure',
    pr: { label: 'PR #106', href: PR_106 },
    rows: [
      ['Where it stopped', 'Browser installation, before any test ran'],
      ['Evidence', 'Unsupported-OS installer message and workflow logs'],
      ['Change made', 'Pin runner/Node and separate WebKit install steps'],
    ],
  },
  {
    title: 'Application/test expectation mismatch',
    pr: { label: 'PR #108', href: PR_108 },
    rows: [
      ['Where it stopped', 'Inside a test assertion'],
      ['Evidence', 'Merged backend change and navigation verified locally'],
      ['Change made', 'Update expected navigation labels'],
    ],
  },
]

function ComparisonPanel() {
  return (
    <figure className="my-8 rounded-lg border border-border bg-cream-light p-4 sm:p-6">
      <figcaption className="mb-4 text-sm">
        <span className="font-semibold">How I distinguished them.</span>{' '}
        <span className="text-muted-foreground">Same red check, two different causes.</span>
      </figcaption>
      <div className="grid gap-4 md:grid-cols-2">
        {FAILURES.map(f => (
          <div key={f.title} className="rounded-lg border border-border bg-white p-4">
            <div className="flex items-start justify-between gap-3 mb-3">
              <p className="font-semibold text-base leading-snug md:min-h-[2.75rem]">{f.title}</p>
              <a
                href={f.pr.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${'rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap bg-gradient-to-r from-lavender-light to-lavender-dark'} hover:underline focus:outline-none focus:ring-2 focus:ring-primary`}
              >
                {f.pr.label}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
            <dl className="divide-y divide-border">
              {f.rows.map(([k, v]) => (
                <div key={k} className="py-2.5 first:pt-0 last:pb-0">
                  <dt className="text-xs font-medium text-muted-foreground">{k}</dt>
                  <dd className="mt-0.5 text-sm">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </figure>
  )
}

/* ---------- code samples ---------- */

const SPEC_SAMPLE = `test(
  "MENTOR-R04: Rejecting as a mentor returns 403 and leaves the mentor PENDING",
  { tag: "@regression" },
  async ({ mentorApi, mentorshipAdminApi }) => {
    const response = await mentorApi.mentor.reject(mentorId!);
    expect(response.status()).toBe(403);

    const after = await mentorshipAdminApi.mentor.getById(mentorId!, true);
    const mentor = mentorResponseSchema.parse(await after.json());
    expect(mentor.profileStatus).toBe("PENDING");
  }
);`

const HTTP_SAMPLE = `GET /api/cms/v1/mentorship/mentors
# Active mentors can appear without a cycle-month filter.

GET /api/cms/v1/mentorship/mentors?mentorshipTypes=Ad-Hoc
# Ad-hoc availability is filtered against the open cycle's month.`

const CI_SAMPLE = `runs-on: ubuntu-24.04
# Node is configured as version 24 rather than lts/*.

- name: Install Playwright system dependencies
  timeout-minutes: 10
  run: npx playwright install-deps webkit

- name: Install Playwright browser
  timeout-minutes: 10
  run: npx playwright install webkit`

/* ---------- content ---------- */

export function WccCaseStudyHero() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight mb-6">{study.title}</h1>
      <p className="text-lead text-muted-foreground mb-8">{study.subtitle}</p>
      <div className="flex flex-wrap gap-2 mb-10">
        {study.tags.map(t => (
          <span key={t} className={tagStyle}>{t}</span>
        ))}
      </div>

      <dl className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {QUICK_FACTS.map(fact => (
          <div key={fact.label} className="flex flex-col rounded-lg border border-border bg-white p-5 shadow-sm">
            <dt className="text-center">
              <span className="block font-display text-5xl leading-none mb-2">{fact.value}</span>
              <span className="block font-semibold">{fact.label}</span>
            </dt>
            <dd className="mt-3 border-t border-border pt-3 text-sm text-muted-foreground leading-relaxed">{fact.detail}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 text-sm text-muted-foreground">
        Volunteer QA Engineer · <A href={REPO}>wcc-qa repository</A> · November 2026
      </p>
    </div>
  )
}

export function WccCaseStudy() {
  return (
    <article className="max-w-3xl mx-auto">
      <Block id="cs-context" title="The project and my role">
        <p>
          Women Coding Community develops its mentorship platform through open-source collaboration. As a volunteer QA
          Engineer, I contribute to its shared test-automation project, working with other contributors on API tests,
          test reliability, and troubleshooting.
        </p>
        <p>
          This case study focuses on extending mentor lifecycle coverage and two related contributions that helped
          restore the project&apos;s CI checks. The suite&apos;s overall architecture and CI workflows already existed;
          the work described here extends and maintains them.
        </p>
      </Block>

      <Block id="cs-framework" title="Extending the existing test framework">
        <p>
          The suite already covered registering and approving mentors. <A href={ISSUE_65}>Issue #65</A> addressed
          missing coverage for rejection, profile updates, authorization, and ad-hoc mentorship availability, including
          whether the correct mentors appear in the public CMS list.
        </p>
        <p>
          Rather than building tests around raw HTTP requests, I extended the existing clients, services, data
          factories, and response schemas. This kept setup and API details reusable while allowing the tests to focus
          on the behavior they needed to verify.
        </p>

        <FlowDiagram />

        <p>
          For example, the authorization test checks both that a mentor gets a <code>403</code> when attempting to
          reject another mentor <strong>and</strong> that the target mentor remains <code>PENDING</code>. Checking the
          HTTP status alone would not establish that the request left the data unchanged.
        </p>
        <Code lang="ts" label="mentor.reject.flow.spec.ts · MENTOR-R04">{SPEC_SAMPLE}</Code>

        <H3>Selected implementation decisions</H3>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            I used Claude Code to locate and understand backend rules, including the 250-character rejection-reason
            limit. I then applied this constraint as a named constant used by the test-data factory and verified the
            generated data myself.
          </li>
          <li>
            Each spec that creates a mentor uses <code>afterEach</code> cleanup to delete it, reducing test-data
            pollution when cleanup can execute successfully.
          </li>
          <li>
            The existing factory generated neither explicit long-term nor ad-hoc availability, despite the issue&apos;s
            original assumption. It now supports long-term, ad-hoc, or both, with long-term as the default.
          </li>
        </ul>
        <p>
          <A href={PR_104}>See the complete implementation in PR #104</A>
        </p>
      </Block>

      <Block id="cs-ad-hoc" title="Investigation 1/2: A test that would pass without proving anything">
        <p>
          An ad-hoc mentor without availability in the open cycle&apos;s month still appeared in the public list.
          Initially this looked like a failure of the month-based business rule. Investigating the API behavior revealed
          that the rule is only applied <strong>when the request filters the list by mentorship type</strong>.
        </p>
        <p>
          <strong>What changed:</strong> the tests now verify the intended visibility rule, rather than merely checking
          that an active mentor appears somewhere in an unfiltered response.
        </p>
        <div className="border-t border-border">
          <Toggle title="The request difference and how I investigated it">
            <Code lang="http" label="Public mentors endpoint">{HTTP_SAMPLE}</Code>
            <p>
              Without the type filter, the test expecting an available mentor to appear could pass regardless of the
              month, without proving the rule. The test expecting an unavailable mentor to be absent would fail for the
              wrong reason.
            </p>
            <p>
              I compared the endpoint behavior with and without the query parameter and checked where the backend
              applied the month filter. I then extended the CMS service with <code>mentorsByType</code>, so both ad-hoc
              tests exercised the filtered public view.
            </p>
          </Toggle>
        </div>
      </Block>

      <Block id="cs-ci" title="Investigation 2/2: Two CI failures with different causes">
        <p>
          When PR #104&apos;s smoke check was red, I checked <strong>where the workflow had stopped</strong> before
          changing any tests. That distinguished an environment problem from a later failure in a running test.
        </p>

        <ComparisonPanel />

        <p>The two fixes allowed PR #104&apos;s smoke check to pass.</p>

        <div className="border-t border-border">
          <Toggle title="Environment: WebKit could not install (PR #106)">
            <p>
              The job initially stopped before test execution because <code>ubuntu-latest</code> had moved to Ubuntu
              26.04, which the project&apos;s Playwright 1.58.2 WebKit installer did not support. Pinning Ubuntu 24.04
              removed that error, but the combined WebKit installation command subsequently hung.
            </p>
            <p>
              I separated dependency installation and browser download, added individual timeouts, and pinned Node 24
              to avoid another moving version target. The combined installation hung in four observed runs; after
              splitting the step, the runs reported in PR #106 passed three out of three times. Pinning Node alone had{' '}
              <strong>not</strong> resolved the hang.
            </p>
            <Code lang="yaml" label=".github/workflows/pull-request.yml · PR #106">{CI_SAMPLE}</Code>
            <p>
              Splitting the installation into separate steps resolved the hangs in the observed CI runs and made future
              failures easier to diagnose. <strong>I couldn&apos;t confirm the exact cause of the original hang.</strong>
            </p>
          </Toggle>
          <Toggle title="Application: The test expected old navigation labels (PR #108)">
            <p>
              Once the browser installed and the smoke tests could run, <code>ADMIN-LOGIN-02</code> failed for seven
              roles on navigation assertions. A merged backend change had renamed &ldquo;Dashboard&rdquo; to
              &ldquo;Home&rdquo; and changed which roles see &ldquo;Mentor Dashboard.&rdquo;
            </p>
            <p>
              Before updating the expectations, I checked the navigation in the running application with the current
              backend. I then adjusted the shared test data to reflect the verified behavior. I didn&apos;t change the
              assertion simply to make the check green.
            </p>
          </Toggle>
        </div>
      </Block>

      <Block id="cs-results" title="Results">
        <Checks
          items={[
            <><strong>Three merged pull requests:</strong> <A href={PR_104}>#104</A> (mentor tests and framework extensions), <A href={PR_106}>#106</A> (CI installation workflow), and <A href={PR_108}>#108</A> (navigation test maintenance).</>,
            <><strong>Nine mentor scenarios added:</strong> seven active regression tests (R01–R04, U01, U03–U04) and two intentionally skipped cases, R05 and U02, with <code>FIXME</code> comments.</>,
            <><strong>Two backend defects captured as regression expectations:</strong> a blank rejection reason returns <code>200</code> instead of the expected <code>400</code>; re-registering an existing mentor can erase the Calendly link. These defects were documented, <strong>not fixed</strong>, in this contribution.</>,
            <><strong>Smoke check restored:</strong> after the CI and navigation fixes were merged and incorporated, PR #104&apos;s smoke check passed.</>,
          ]}
        />
      </Block>

      <Block id="cs-reflection" title="What I took from it">
        <p>
          This contribution gave me more confidence working across different parts of the test framework and
          investigating problems beyond the tests themselves. One of the biggest lessons was not to assume that a
          passing test proves the behavior I intended to check.
        </p>
        <p>
          The CI investigation reinforced something similar: understanding where and why a failure happens matters more
          than making the check green. Working through these problems, discussing decisions with the team, and reviewing
          the results helped me become more deliberate in how I approach testing.
        </p>
      </Block>

      <Block id="cs-evidence" title="Evidence: issues and pull requests">
        <Card>
          <ul className="divide-y divide-border">
            {[
              { href: ISSUE_65, pr: false, label: 'Issue #65: Mentor reject/update and ad-hoc factory', text: 'Original scope' },
              { href: PR_104, pr: true, label: 'PR #104: Mentor tests, factory, schemas and test plan', text: 'Merged implementation' },
              { href: ISSUE_105, pr: false, label: 'Issue #105: WebKit installation problem', text: 'CI finding' },
              { href: PR_106, pr: true, label: 'PR #106: Runner and WebKit installation workflow', text: 'Merged CI change' },
              { href: ISSUE_107, pr: false, label: 'Issue #107: Outdated admin navigation expectations', text: 'Test-maintenance finding' },
              { href: PR_108, pr: true, label: 'PR #108: Updated navigation expectations', text: 'Merged fix' },
            ].map(item => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 px-5 py-4 text-base hover:bg-muted focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                >
                  {item.pr ? (
                    <GitPullRequest className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                  ) : (
                    <CircleDot className="mt-0.5 h-5 w-5 flex-shrink-0 text-muted-foreground" aria-hidden="true" />
                  )}
                  <span className="flex-grow">
                    <span className="font-semibold group-hover:underline">{item.label}</span>
                    <span className="block text-sm text-muted-foreground">{item.text}</span>
                  </span>
                  <ExternalLink className="mt-1 h-4 w-4 flex-shrink-0 text-muted-foreground" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </Card>
      </Block>
    </article>
  )
}
