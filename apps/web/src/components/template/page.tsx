import type { ReactNode } from 'react'
import { Footer } from './footer'
import { Header } from './header'

interface PageProps {
  children: ReactNode
  className?: boolean
  nonHeader?: boolean
  nonFooter?: boolean
}
export function Page({ children, className, nonFooter, nonHeader }: PageProps) {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        background:
          'radial-gradient(50% 50% at 50% 50%, #2d0064 0%, #0d001c 100%)',
      }}
    >
      <div className="flex-1 flex flex-col">
        {!nonHeader && <Header />}
        <main className={`flex-1 flex flex-col ${className ?? ''}`}>
          {children}
        </main>
        {!nonFooter && <Footer />}
      </div>
    </div>
  )
}
