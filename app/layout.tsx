import type { Metadata, Viewport } from 'next';
import { Inter_Tight, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider, themeInitScript } from '@/components/ThemeProvider';
import './globals.css';

const sans = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://akpanphilip.github.io'),
  title: {
    default: 'Philip Akpan | Full Stack Developer',
    template: '%s | Philip Akpan',
  },
  description:
    'Philip Akpan | Full Stack Developer based in Abuja, Nigeria. Building high-performance, scalable, secure web applications with Next.js, React, Vue and Laravel.',
  keywords: [
    'Philip Akpan', 'Software Engineer', 'Full Stack Developer',
    'Next.js', 'React', 'Vue', 'Laravel', 'NodeJs', 'Nigeria', 'Abuja',
  ],
  authors: [{ name: 'Philip Akpan' }],
  openGraph: {
    title: 'Philip Akpan — Full Stack Developer',
    description: 'Building high-performance, scalable web applications from Abuja, Nigeria.',
    type: 'website',
    images: ['/images/dp.jpg'],
  },
  icons: { icon: '/images/dp.jpg' },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
