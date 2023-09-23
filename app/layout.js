import 'react-loading-skeleton/dist/skeleton.css'
import { Suspense } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import Loading from './loading'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  icons: {
    icon: "./icon.png",
  },
  title: 'Page Skeleton Loading',
  description: 'Testing Page Skeleton Loading',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
      <Suspense fallback={<Loading/>}>
      {children}
      </Suspense>
      </body>
     
    </html>
  )
}
