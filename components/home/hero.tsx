import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ShieldCheck, Globe } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 scale-110">
          <Image
            src="/hero-meeting-background.png"
            alt=""
            fill
            className="object-cover object-center blur-[2px] sm:blur-sm"
            priority
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/94 via-black/82 to-black/60"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/55"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"
          aria-hidden
        />
        <div
          className="absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6">
        <div className="flex w-full max-w-3xl flex-col items-center text-center">
          {/* <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/90 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>Unified Enterprise Platform</span>
          </div> */}

          <h1 className="text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.85)] md:text-6xl lg:text-7xl">
            <span className="mt-6 block">Enterprise systems that</span>
            <span className="mt-1 block bg-gradient-to-r from-cyan-200 via-indigo-200 to-violet-200 bg-clip-text text-transparent [filter:drop-shadow(0_2px_16px_rgba(0,0,0,0.9))] md:mt-2">
              scale with you
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-base font-medium leading-relaxed text-white/95 drop-shadow-md md:text-xl">
            From ERP to CRM, HRM to SCM - ScoopWorks unifies your entire
            business on a single, intelligent platform. Built for speed,
            designed for global growth.
          </p>

          <div className="mt-10 flex w-full max-w-md flex-col items-stretch gap-4 sm:max-w-none sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-gray-900 shadow-2xl shadow-black/35 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cyan-500/20"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-black/20 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/60 hover:bg-black/35"
            >
              Explore Products
            </Link>
          </div>

          {/* <div className="mt-10 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
              <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-400" />
              <span className="text-sm font-medium text-white/90">SOC2 Type II</span>
            </div>
            <div className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
              <Globe className="h-5 w-5 shrink-0 text-sky-400" />
              <span className="text-sm font-medium text-white/90">Global Ready</span>
            </div>
            <div className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="text-sm font-medium text-white/90">24/7 Support</span>
            </div>
          </div> */}

        </div>
      </div>
    </section>
  )
}
