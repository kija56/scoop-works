import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/home/cta-section"
import { products } from "@/lib/products"
import Link from "next/link"
import Image from "next/image"
import type { ComponentType } from "react"
import {
  Building2,
  Users,
  HandshakeIcon,
  Truck,
  Calculator,
  FolderKanban,
  Package,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Products - Scoop Enterprise Systems",
  description:
    "Explore Scoop's suite of enterprise systems: ERP, HRM, CRM, SCM, Accounting, Project Management, and Inventory Management.",
}

const productIcons: Record<string, ComponentType<{ className?: string }>> = {
  erp: Building2,
  hrm: Users,
  crm: HandshakeIcon,
  scm: Truck,
  accounting: Calculator,
  project: FolderKanban,
  inventory: Package,
}

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-primary pt-32 pb-20 lg:pt-44 lg:pb-28">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Products
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold text-primary-foreground md:text-6xl text-balance">
              {`${products.length} systems. One platform.`}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
              Each system is powerful on its own, but together they create a
              unified operating system for your entire enterprise.
            </p>
          </div>
        </section>

        {/* Product Sections */}
        {products.map((system, index) => {
          const ProductIcon = productIcons[system.id] ?? Building2
          return (
          <section
            key={system.id}
            id={system.id}
            className={`py-20 lg:py-28 ${index % 2 === 0 ? "bg-background" : "bg-secondary"}`}
          >
            <div className="mx-auto max-w-7xl px-6">
              <div
                className={`flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <ProductIcon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-accent">
                      {system.name}
                    </span>
                  </div>
                  <h2 className="mt-6 font-display text-3xl font-bold text-foreground md:text-4xl">
                    {system.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    {system.description}
                  </p>
                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {system.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                        <span className="text-sm text-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/products/${system.id}`}
                    className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    View product details
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                 
                </div>

                {/* Product Visual */}
                <div className="flex-1">
                  <div className="group relative overflow-hidden rounded-3xl border border-border bg-background p-5 shadow-lg shadow-primary/5">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_45%)]" />
                    <Image
                      src={system.image}
                      alt={`${system.name} product illustration`}
                      width={920}
                      height={680}
                      className="systems-image-float relative z-10 h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          )
        })}

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
