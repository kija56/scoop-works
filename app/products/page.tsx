import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/home/cta-section"
import Link from "next/link"
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

const systems = [
  {
    id: "erp",
    name: "ERP",
    title: "Enterprise Resource Planning",
    description:
      "Unify every aspect of your organization from procurement and production to distribution and finance. Scoop ERP gives you a single source of truth for all operational data.",
    icon: Building2,
    features: [
      "Centralized data management",
      "Real-time operational dashboards",
      "Automated procurement workflows",
      "Production planning & scheduling",
      "Multi-entity support",
      "Custom reporting engine",
    ],
  },
  {
    id: "hrm",
    name: "HRM",
    title: "Human Resource Management",
    description:
      "Manage the entire employee lifecycle from recruitment to retirement. Automate payroll, track performance, and build a thriving workplace culture.",
    icon: Users,
    features: [
      "Applicant tracking system",
      "Automated payroll processing",
      "Performance management",
      "Time & attendance tracking",
      "Employee self-service portal",
      "Learning management system",
    ],
  },
  {
    id: "crm",
    name: "CRM",
    title: "Customer Relationship Management",
    description:
      "Build deeper customer connections with intelligent sales pipelines, marketing automation, and comprehensive customer analytics.",
    icon: HandshakeIcon,
    features: [
      "Visual sales pipeline",
      "Lead scoring & qualification",
      "Marketing automation",
      "Customer analytics & insights",
      "Email campaign management",
      "Service ticket management",
    ],
  },
  {
    id: "scm",
    name: "SCM",
    title: "Supply Chain Management",
    description:
      "Gain end-to-end visibility into your supply chain. Optimize logistics, manage suppliers, and ensure timely delivery of goods across the globe.",
    icon: Truck,
    features: [
      "Supplier relationship management",
      "Demand forecasting",
      "Logistics & route optimization",
      "Warehouse management",
      "Order fulfillment tracking",
      "Compliance management",
    ],
  },
  {
    id: "accounting",
    name: "Accounting",
    title: "Financial Management",
    description:
      "Take complete control of your finances with real-time reporting, multi-currency support, and automated reconciliation that keeps you audit-ready.",
    icon: Calculator,
    features: [
      "General ledger management",
      "Accounts payable & receivable",
      "Multi-currency transactions",
      "Automated bank reconciliation",
      "Tax compliance & reporting",
      "Financial forecasting",
    ],
  },
  {
    id: "project",
    name: "Project Management",
    title: "Plan, Track & Deliver",
    description:
      "From small tasks to large-scale programs, manage every project with clarity. Gantt charts, resource allocation, and milestone tracking keep teams aligned.",
    icon: FolderKanban,
    features: [
      "Gantt chart visualization",
      "Resource allocation & planning",
      "Milestone & deadline tracking",
      "Team collaboration tools",
      "Budget & expense tracking",
      "Time logging & reports",
    ],
  },
  {
    id: "inventory",
    name: "Inventory",
    title: "Inventory Management",
    description:
      "Track stock levels across multiple warehouses in real time. Automated reordering, batch tracking, and barcode integration keep your inventory optimized.",
    icon: Package,
    features: [
      "Real-time stock tracking",
      "Multi-warehouse management",
      "Automated reorder points",
      "Batch & serial number tracking",
      "Barcode & QR integration",
      "Stock valuation reports",
    ],
  },
]

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
              Seven systems. One platform.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
              Each system is powerful on its own, but together they create a
              unified operating system for your entire enterprise.
            </p>
          </div>
        </section>

        {/* Product Sections */}
        {systems.map((system, index) => (
          <section
            key={system.id}
            id={system.id}
            className={`py-20 lg:py-28 ${index % 2 === 0 ? "bg-background" : "bg-secondary"}`}
          >
            <div className="mx-auto max-w-7xl px-6">
              <div
                className={`flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <system.icon className="h-6 w-6 text-primary" />
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
                    href="/contact"
                    className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    Request a demo
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Visual Placeholder */}
                <div className="flex-1">
                  <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-border bg-secondary/50">
                    <system.icon className="h-20 w-20 text-primary/20" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
