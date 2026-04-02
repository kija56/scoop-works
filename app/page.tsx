import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/home/hero"
import { SystemsOverview } from "@/components/home/systems-overview"
import { Features } from "@/components/home/features"
import { Testimonials } from "@/components/home/testimonials"
import { CTASection } from "@/components/home/cta-section"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SystemsOverview />
        <Features />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
