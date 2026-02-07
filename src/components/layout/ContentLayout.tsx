import { Outlet, ScrollRestoration } from 'react-router-dom'
import { useState } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { SearchDialog } from '@/components/search/SearchDialog'

export function ContentLayout() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollRestoration />
      <Header onSearchOpen={() => setSearchOpen(true)} />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
          <Outlet />
        </div>
      </main>
      <Footer />
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  )
}
