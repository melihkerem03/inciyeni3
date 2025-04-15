import React from 'react'
import Header from './header'

interface PageTemplateProps {
  children: React.ReactNode;
}

export default function PageTemplate({ children }: PageTemplateProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
    </div>
  )
} 