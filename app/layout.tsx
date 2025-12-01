import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter'
})

export const metadata: Metadata = {
    title: 'Patrycja Zofia Gontarek - QA Engineer Portfolio',
    description: 'ISTQB Foundation Level certified QA professional with hands-on automation and manual testing experience. Specializing in Selenium WebDriver, Java, API testing, and quality assurance.',
    keywords: 'QA Engineer, Quality Assurance, Test Automation, Selenium WebDriver, Manual Testing, ISTQB Certified, Java, API Testing, Netherlands',
    authors: [{ name: 'Patrycja Zofia Gontarek' }],
    creator: 'Patrycja Zofia Gontarek',
    publisher: 'Patrycja Zofia Gontarek',
    robots: 'index, follow',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://ptrcja.github.io/pgontarek/',
        title: 'Patrycja Zofia Gontarek - QA Engineer Portfolio',
        description: 'ISTQB Foundation Level certified QA professional with hands-on automation and manual testing experience.',
        siteName: 'Show case of my work in Manual and Automation Testing'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Patrycja Zofia Gontarek - QA Engineer Portfolio',
        description: 'ISTQB Foundation Level certified QA professional with hands-on automation and manual testing experience.'
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