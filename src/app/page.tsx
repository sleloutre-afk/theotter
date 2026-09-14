import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import Shift from '@/components/Shift'
import Approach from '@/components/Approach'
import Included from '@/components/Included'
import Pricing from '@/components/Pricing'
import References from '@/components/References'
import Story from '@/components/Story'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Shift />
        <Approach />
        <Included />
        <Pricing />
        <References />
        <Story />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
