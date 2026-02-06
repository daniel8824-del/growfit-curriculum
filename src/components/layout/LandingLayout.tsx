import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { SearchDialog } from '@/components/search/SearchDialog'

export function LandingLayout() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <Header onSearchOpen={() => setSearchOpen(true)} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  )
}
