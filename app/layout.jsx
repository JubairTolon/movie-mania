import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'Next 🔥',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body >
    </html >
  )
}
