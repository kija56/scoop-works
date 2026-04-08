import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary pt-32 pb-20 lg:pt-44 lg:pb-32">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent" />
        <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-accent" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* Heading */}
          <h1 className="max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-6xl lg:text-7xl text-balance">
            Enterprise systems that scale with you
          </h1>

          {/* Subheading */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/70 md:text-xl">
            From ERP to CRM, HRM to SCM, Scoop unifies your entire business
            under one intelligent platform. Built for speed, designed for growth.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-all hover:brightness-110"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/products"
              className="flex items-center gap-2 rounded-lg border border-primary-foreground/20 px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/5"
            >
              Explore Products
            </Link>
          </div>

        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="hero-image-float relative rounded-3xl border border-primary-foreground/20 bg-primary-foreground/10 p-4 shadow-2xl shadow-black/20 backdrop-blur-sm">
            <Image
              src="/undraw_all-the-data_ijgn.svg"
              alt="Illustration showing unified business data dashboards"
              width={900}
              height={700}
              className="h-auto w-full"
              priority
            />
          </div>
          <div className="hero-image-float-delayed absolute -right-4 -bottom-8 hidden w-40 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-3 backdrop-blur-sm md:block">
            <Image
              src="/undraw_report_k55w.svg"
              alt="Analytics report illustration"
              width={320}
              height={240}
              className="h-auto w-full"
            />
          </div>
          <div className="hero-image-float-soft absolute -left-6 top-10 hidden w-36 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-3 backdrop-blur-sm md:block">
            <Image
              src="/undraw_revenue-analysis_fjh2.svg"
              alt="Revenue analysis illustration"
              width={320}
              height={240}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
