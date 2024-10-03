import { Page } from '@/components/template/page'
import type { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Page>
      <div className="bg-[url('/background.png')] bg-contain">{children}</div>
    </Page>
  )
}
