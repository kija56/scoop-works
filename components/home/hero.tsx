import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  Users,
  Layers,
} from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary pt-32 pb-20 lg:pt-44 lg:pb-32">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent" />
        <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-accent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
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
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
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

          {/* Stats Row */}
          <div className="mt-20 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
            {[
              { icon: BarChart3, stat: "99.9%", label: "Uptime SLA" },
              { icon: Users, stat: "50K+", label: "Active Users" },
              { icon: Layers, stat: "7+", label: "Integrated Systems" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-3 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 px-8 py-6 backdrop-blur-sm transition-colors hover:border-primary-foreground/20 hover:bg-primary-foreground/10"
              >
                <item.icon className="h-6 w-6 text-accent" aria-hidden />
                <span className="font-display text-3xl font-bold tabular-nums tracking-tight text-primary-foreground sm:text-4xl">
                  {item.stat}
                </span>
                <span className="text-sm font-medium uppercase tracking-wider text-primary-foreground/70">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
