import type { Metadata } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const beVietnamPro = Be_Vietnam_Pro({ 
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: 'Học viện Tài chính Tí hon - Khóa học tài chính cho trẻ em',
  description: 'Nền tảng giáo dục trực tuyến chuyên cung cấp các khóa học tài chính cá nhân cho trẻ em từ 6 đến 11 tuổi với AI hỗ trợ học tập.',
  generator: 'v0.app',
  icons: {
    icon: [
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`${beVietnamPro.className} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
