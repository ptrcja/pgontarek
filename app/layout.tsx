import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter'
})

const SITE_DESCRIPTION = 'ISTQB Foundation Level certified QA Engineer working with Playwright and TypeScript: REST API test automation, test-data factories, Zod schema validation, and GitHub Actions CI.'

export const metadata: Metadata = {
    metadataBase: new URL('https://pgontarek.com'),
    title: 'Patrycja Zofia Gontarek - QA Engineer Portfolio',
    description: SITE_DESCRIPTION,
    keywords: 'QA Engineer, Quality Assurance, Test Automation, Playwright, TypeScript, API Testing, REST API, GitHub Actions, ISTQB Certified, Netherlands',
    authors: [{ name: 'Patrycja Zofia Gontarek' }],
    creator: 'Patrycja Zofia Gontarek',
    publisher: 'Patrycja Zofia Gontarek',
    robots: 'index, follow',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: '/',
        title: 'Patrycja Zofia Gontarek - QA Engineer Portfolio',
        description: SITE_DESCRIPTION,
        siteName: 'Patrycja Gontarek, QA Engineer'
    },
    twitter: {
        card: 'summary',
        title: 'Patrycja Zofia Gontarek - QA Engineer Portfolio',
        description: SITE_DESCRIPTION
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={inter.variable}>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="font-sans antialiased">
                <div className="relative min-h-screen bg-background">
                    {children}
                </div>
            </body>
        </html>
    )
} 