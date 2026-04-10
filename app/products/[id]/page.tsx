import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  Users,
  HandshakeIcon,
  Truck,
  Calculator,
  FolderKanban,
  Package,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/home/cta-section"
import { products, productsById } from "@/lib/products"

type ProductPageProps = {
  params: Promise<{
    id: string
  }>
}

const productIcons = {
  erp: Building2,
  hrm: Users,
  crm: HandshakeIcon,
  scm: Truck,
  accounting: Calculator,
  project: FolderKanban,
  inventory: Package,
} as const

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }))
}

export async function generateMetadata({
  params,
}: Readonly<ProductPageProps>): Promise<Metadata> {
  const { id } = await params
  const product = productsById[id]
  if (!product) {
    return {
      title: "Product Not Found - Scoop",
    }
  }

  return {
    title: `${product.name} - ${product.title} | Scoop`,
    description: product.description,
  }
}

export default async function ProductDetailPage({
  params,
}: Readonly<ProductPageProps>) {
  const { id } = await params
  const product = productsById[id]
  if (!product) notFound()

  const ProductIcon = productIcons[product.id as keyof typeof productIcons] ?? Building2
  const relatedProducts = products
    .filter((item) => item.id !== product.id)
    .slice(0, 3)

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-primary pt-40 pb-20 lg:pt-48 lg:pb-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/75 transition-colors hover:text-primary-foreground"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
                Back to Products
              </Link>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/10">
                  <ProductIcon className="h-6 w-6 text-accent" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent">
                  {product.name}
                </span>
              </div>
              <h1 className="mt-6 font-display text-4xl font-bold text-primary-foreground md:text-6xl text-balance">
                {product.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
                {product.description}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:brightness-110"
                >
                  Request a demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/25 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  View pricing
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-primary-foreground/20 bg-primary-foreground/10 p-5 shadow-2xl shadow-black/20 backdrop-blur-sm">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.2),transparent_42%)]" />
              <Image
                src={product.image}
                alt={`${product.name} illustration`}
                width={960}
                height={700}
                className="relative z-10 h-auto w-full object-contain"
                priority
              />
            </div>
          </div>
        </section>

        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl text-balance">
                What you can do with {product.name}
              </h2>
              <p className="mt-4 text-muted-foreground">
                Built for enterprise teams that need reliability, visibility, and
                speed at scale.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {product.features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-lg"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-sm font-medium leading-relaxed text-card-foreground">
                      {feature}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                  Related Modules
                </p>
                <h3 className="mt-3 font-display text-3xl font-bold text-foreground">
                  Explore more products
                </h3>
              </div>
              <Link
                href="/products"
                className="hidden text-sm font-semibold text-primary transition-colors hover:text-primary/80 md:inline-flex"
              >
                View all
              </Link>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {relatedProducts.map((item) => (
                <Link
                  key={item.id}
                  href={`/products/${item.id}`}
                  className="group rounded-2xl border border-border bg-background p-5 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
                >
                  <div className="rounded-xl border border-border/70 bg-secondary/60 p-3">
                    <Image
                      src={item.image}
                      alt={`${item.name} illustration`}
                      width={360}
                      height={240}
                      className="h-28 w-full object-contain"
                    />
                  </div>
                  <p className="mt-4 text-xs font-bold uppercase tracking-widest text-accent">
                    {item.name}
                  </p>
                  <h4 className="mt-1 font-display text-lg font-bold text-foreground">
                    {item.title}
                  </h4>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    View details
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
