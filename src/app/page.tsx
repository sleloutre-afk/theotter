import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import Shift from '@/components/Shift'
import Approach from '@/components/Approach'
import Included from '@/components/Included'
import Pricing from '@/components/Pricing'
import References from '@/components/References'
import Story from '@/components/Story'
import Resources from '@/components/Resources'
import { getArticles } from '@/lib/articles'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const articles = getArticles()

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
        <Resources articles={articles} />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
