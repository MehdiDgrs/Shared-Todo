import './globals.css'
import { Inter } from 'next/font/google'
import { Caveat, Permanent_Marker } from 'next/font/google'
const permanentMarker = Permanent_Marker({ subsets: ['latin'], weight: '400' })
const inter = Inter({ subsets: ['latin'] })
const caveat = Caveat({ subsets: ['latin'] })
export const metadata = {
  title: 'Shared Todo List',
  description: 'Online todo ',
}

export default function RootLayout({ children }) {
  return (
    <html lang='fr'>
      <body className={caveat.className}>{children}</body>
    </html>
  )
}
