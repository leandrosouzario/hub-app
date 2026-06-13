import Header from '@/components/Header'
import AppPortal from '@/components/AppPortal'
import FeaturedApp from '@/components/FeaturedApp'
import Roadmap from '@/components/Roadmap'
import AboutBrief from '@/components/AboutBrief'
import TechChips from '@/components/TechChips'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <AppPortal />
      <FeaturedApp />
      <Roadmap />
      <AboutBrief />
      <TechChips />
      <Footer />
    </main>
  )
}
