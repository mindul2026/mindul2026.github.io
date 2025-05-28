import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '주식회사 쉐릿 | SHERIT',
  description: '혁신적인 라이프스타일 플랫폼, 알프(ALF)와 밥플(Babple)을 통해 더 나은 일상을 만들어갑니다.',
  keywords: '쉐릿, SHERIT, 알프, ALF, 밥플, Babple, 라이프스타일, 플랫폼',
  openGraph: {
    title: '주식회사 쉐릿 | SHERIT',
    description: '혁신적인 라이프스타일 플랫폼, 알프(ALF)와 밥플(Babple)을 통해 더 나은 일상을 만들어갑니다.',
    url: 'https://mindul2026.github.io',
    siteName: '주식회사 쉐릿',
    locale: 'ko_KR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 