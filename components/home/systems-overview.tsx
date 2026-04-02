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
} from "lucide-react"

const systems = [
  {
    name: "ERP",
    title: "Enterprise Resource Planning",
    description:
      "Unify your core business processes from procurement to production in one centralized platform.",
    icon: Building2,
    href: "/products#erp",
  },
  {
    name: "HRM",
    title: "Human Resource Management",
    description:
      "Streamline recruitment, payroll, performance, and employee lifecycle management.",
    icon: Users,
    href: "/products#hrm",
  },
  {
    name: "CRM",
    title: "Customer Relationship Management",
    description:
      "Build stronger customer relationships with intelligent sales pipeline and engagement tools.",
    icon: HandshakeIcon,
    href: "/products#crm",
  },
  {
    name: "SCM",
    title: "Supply Chain Management",
    description:
      "Optimize logistics, supplier relationships, and end-to-end supply chain visibility.",
    icon: Truck,
    href: "/products#scm",
  },
  {
    name: "Accounting",
    title: "Financial Management",
    description:
      "Complete financial oversight with real-time reporting, compliance, and automated reconciliation.",
    icon: Calculator,
    href: "/products#accounting",
  },
  {
    name: "Project Management",
    title: "Plan, Track & Deliver",
    description:
      "Manage projects from ideation to completion with Gantt charts, resource allocation, and milestones.",
    icon: FolderKanban,
    href: "/products#project",
  },
  {
    name: "Inventory",
    title: "Inventory Management",
    description:
      "Real-time stock tracking, automated reordering, and multi-warehouse management.",
    icon: Package,
    href: "/products#inventory",
  },
]

export function SystemsOverview() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Our Systems
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-5xl text-balance">
            Everything your enterprise needs, in one place
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Seven powerful modules that work together seamlessly to power every
            corner of your business.
          </p>
        </div>

        {/* Systems Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {systems.map((system) => (
            <Link
              key={system.name}
              href={system.href}
              className="group flex flex-col rounded-2xl border border-border bg-background p-8 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                <system.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-accent">
                  {system.name}
                </span>
              </div>
              <h3 className="mt-2 font-display text-xl font-bold text-foreground">
                {system.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {system.description}
              </p>
              <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Learn more
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}

          {/* CTA Card */}
          <div className="flex flex-col items-center justify-center rounded-2xl bg-secondary p-8 text-center">
            <h3 className="font-display text-xl font-bold text-foreground">
              Need a custom solution?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We build tailored enterprise systems to fit your unique
              requirements.
            </p>
            <Link
              href="/contact"
              className="mt-6 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
