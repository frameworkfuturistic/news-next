import Header1 from '@/components/headers/Header1'
import './globals.css'
import { Inter } from 'next/font/google'
import TopHeader from '@/components/headers/TopHeader'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopHeader />
        <Header1 />
        {children}
      </body>
    </html>
  )
}