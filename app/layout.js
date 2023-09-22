
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Page Skeleton Loading',
  description: 'Testing Page Skeleton Loading',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  
      <body className={inter.className}>{children}
      
      </body>
     
    </html>
  )
}
