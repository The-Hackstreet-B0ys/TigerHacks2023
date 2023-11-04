import { Oxygen } from 'next/font/google'
import './globals.css'

const oxygen = Oxygen({ subsets: ['latin'] })

export const metadata = {
  title: 'Insight AI',
  description: 'TigerHacks 2023',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oxygen.className}>{children}</body>
    </html>
  )
}
