import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
} from "lucide-react"

const systems = [
  {
    name: "ERP",
    title: "Enterprise Resource Planning",
    description:
      "Unify your core business processes from procurement to production in one centralized platform.",
    href: "/products#erp",
    image: "/undraw_report_k55w.svg",
  },
  {
    name: "HRM",
    title: "Human Resource Management",
    description:
      "Streamline recruitment, payroll, performance, and employee lifecycle management.",
    href: "/products#hrm",
    image: "/undraw_project-completed_ug9i.svg",
  },
  {
    name: "CRM",
    title: "Customer Relationship Management",
    description:
      "Build stronger customer relationships with intelligent sales pipeline and engagement tools.",
    href: "/products#crm",
    image: "/undraw_informed-decision_2jwi.svg",
  },
  {
    name: "SCM",
    title: "Supply Chain Management",
    description:
      "Optimize logistics, supplier relationships, and end-to-end supply chain visibility.",
    href: "/products#scm",
    image: "/undraw_folder_8dxv.svg",
  },
  {
    name: "Accounting",
    title: "Financial Management",
    description:
      "Complete financial oversight with real-time reporting, compliance, and automated reconciliation.",
    href: "/products#accounting",
    image: "/undraw_revenue-analysis_fjh2.svg",
  },
  {
    name: "Project Management",
    title: "Plan, Track & Deliver",
    description:
      "Manage projects from ideation to completion with Gantt charts, resource allocation, and milestones.",
    href: "/products#project",
    image: "/undraw_data_25jw.svg",
  },
  {
    name: "Inventory",
    title: "Inventory Management",
    description:
      "Real-time stock tracking, automated reordering, and multi-warehouse management.",
    href: "/products#inventory",
    image: "/undraw_puzzle-solved_qdjq.svg",
  },
]

export function SystemsOverview() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Platform Highlight */}
        <div className="rounded-3xl border border-border bg-secondary/40 p-6 md:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                Our Systems
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-5xl text-balance">
                Everything your enterprise needs, in one place
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Say goodbye to fragmented tools. Scoop combines ERP, HRM, CRM,
                SCM, Accounting, Project Management, and Inventory into one
                unified enterprise platform.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "One connected platform",
                  "Faster team collaboration",
                  "Real-time operational visibility",
                  "Enterprise-ready scalability",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-border/70 bg-background px-4 py-3 text-sm font-medium text-foreground"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="hero-image-float rounded-3xl border border-border bg-background p-4 shadow-xl shadow-primary/10">
                <Image
                  src="/undraw_software-engineer_xv60.svg"
                  alt="Enterprise operations managed from one platform"
                  width={860}
                  height={620}
                  className="h-auto w-full"
                />
              </div>
              <div className="hero-image-float-delayed absolute -left-6 top-8 hidden w-44 rounded-2xl border border-border bg-background p-3 shadow-lg md:block">
                <Image
                  src="/undraw_data_25jw.svg"
                  alt="Live business data visualization"
                  width={340}
                  height={260}
                  className="h-auto w-full"
                />
              </div>
              <div className="hero-image-float-soft absolute -right-6 -bottom-8 hidden w-44 rounded-2xl border border-border bg-background p-3 shadow-lg md:block">
                <Image
                  src="/undraw_folder_8dxv.svg"
                  alt="Unified business workflow organization"
                  width={340}
                  height={260}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Systems Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-12">
          {systems.map((system, index) => (
            <Link
              key={system.name}
              href={system.href}
              className={`systems-card-enter group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-background p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 lg:col-span-4 ${
                index % 3 === 1 ? "lg:translate-y-6" : ""
              }`}
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="systems-card-sheen pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 rounded-2xl border border-border/70 bg-secondary/70 p-3">
                <Image
                  src={system.image}
                  alt={`${system.name} module illustration`}
                  width={360}
                  height={220}
                  className="h-28 w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="relative z-10 mt-5 flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-accent">
                  {system.name}
                </span>
              </div>

              <h3 className="relative z-10 mt-2 font-display text-xl font-bold text-foreground">
                {system.title}
              </h3>
              <p className="relative z-10 mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {system.description}
              </p>

              <div className="relative z-10 mt-6 flex items-center gap-1 text-sm font-semibold text-primary">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}

          {/* CTA Card */}
          <div className="group flex flex-col items-center justify-center rounded-3xl border border-border bg-secondary p-8 text-center md:col-span-2 lg:col-span-4">
            <Image
              src="/undraw_puzzle-solved_qdjq.svg"
              alt="Custom enterprise solution illustration"
              width={360}
              height={260}
              className="systems-image-float mb-5 h-auto w-44 max-w-full"
            />
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
