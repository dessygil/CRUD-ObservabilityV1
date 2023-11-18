import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gray-100 min-h-screen">
          <header className="bg-blue-500 p-4 text-white">
            <h1 className="text-2xl font-bold">Observability Test App</h1>
          </header>
          <main className="container mx-auto p-4">
            {children}
          </main>
          <footer className="bg-blue-500 p-4 text-white text-center">
            Built on 04-11-2023 &copy; 
          </footer>
        </div>
      </body>
    </html>
  )
}