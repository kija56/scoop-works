import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="bg-primary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-5xl text-balance">
            Ready to transform your business operations?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/70">
            Join thousands of enterprises already using Scoop to streamline
            their workflows, reduce costs, and accelerate growth.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-all hover:brightness-110"
            >
              Get Started Today
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/pricing"
              className="flex items-center gap-2 rounded-lg border border-primary-foreground/20 px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/5"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
