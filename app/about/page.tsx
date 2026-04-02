import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/home/cta-section"
import { Target, Eye, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "About - Scoop Enterprise Systems",
  description:
    "Learn about Scoop's mission to empower enterprises with unified, scalable business systems.",
}

const stats = [
  { value: "2,000+", label: "Enterprise Clients" },
  { value: "50K+", label: "Active Users" },
  { value: "35+", label: "Countries Served" },
  { value: "99.9%", label: "Uptime SLA" },
]

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "We exist to eliminate the complexity of enterprise operations. Every feature we build makes businesses more efficient and teams more productive.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Open communication, clear pricing, and honest timelines. We believe trust is built through transparency, not salesmanship.",
  },
  {
    icon: Heart,
    title: "Customer Obsession",
    description:
      "Our customers' success is our success. We measure ourselves by the impact we create for the businesses that rely on us every day.",
  },
]

const team = [
  {
    name: "Alexandra Reid",
    title: "Chief Executive Officer",
    initials: "AR",
    bio: "15+ years leading enterprise software companies through hyper-growth.",
  },
  {
    name: "David Kimura",
    title: "Chief Technology Officer",
    initials: "DK",
    bio: "Former engineering lead at two Fortune 500 tech companies.",
  },
  {
    name: "Priya Sharma",
    title: "Chief Product Officer",
    initials: "PS",
    bio: "Built and scaled product teams from startup to enterprise scale.",
  },
  {
    name: "Marcus Johnson",
    title: "Chief Revenue Officer",
    initials: "MJ",
    bio: "Drove $200M+ in enterprise SaaS revenue across global markets.",
  },
]

const milestones = [
  { year: "2018", event: "Scoop founded with a vision to unify enterprise systems." },
  { year: "2019", event: "Launched ERP and HRM modules, onboarded first 100 clients." },
  { year: "2020", event: "Expanded to CRM and Accounting. Reached 500 enterprise clients." },
  { year: "2021", event: "SCM and Inventory modules launched. Series B funding secured." },
  { year: "2022", event: "Project Management module released. Expanded to 20+ countries." },
  { year: "2023", event: "Crossed 1,500 enterprise clients. Opened EU headquarters." },
  { year: "2024", event: "AI-powered features launched across all modules." },
  { year: "2025", event: "2,000+ enterprises trust Scoop. Series C funding secured." },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-primary pt-32 pb-20 lg:pt-44 lg:pb-28">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              About Scoop
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold text-primary-foreground md:text-6xl text-balance">
              Building the operating system for modern enterprises
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
              We started with a simple belief: enterprises deserve software that
              works as hard as they do. Today, Scoop powers operations for
              thousands of businesses worldwide.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-background py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-4xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="bg-secondary py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                Our Story
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
                From frustration to innovation
              </h2>
              <div className="mt-8 flex flex-col gap-6 text-base leading-relaxed text-muted-foreground">
                <p>
                  In 2018, our founders experienced firsthand the chaos of
                  managing a growing enterprise with disconnected tools. Data
                  lived in silos, teams worked in isolation, and critical
                  decisions were delayed by weeks.
                </p>
                <p>
                  They set out to build something different: a unified platform
                  where every department, every process, and every data point
                  connects seamlessly. Scoop was born not from a business plan,
                  but from a genuine need to fix what was broken.
                </p>
                <p>
                  Today, Scoop serves over 2,000 enterprises across 35+
                  countries, processing millions of transactions daily. But our
                  mission remains the same: make enterprise operations
                  effortless.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                Our Journey
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-5xl">
                Key milestones
              </h2>
            </div>
            <div className="mx-auto mt-16 max-w-2xl">
              <div className="relative border-l-2 border-border pl-8">
                {milestones.map((m) => (
                  <div key={m.year} className="relative mb-10 last:mb-0">
                    <div className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full border-2 border-accent bg-background">
                      <div className="h-2 w-2 rounded-full bg-accent" />
                    </div>
                    <span className="text-sm font-bold text-accent">
                      {m.year}
                    </span>
                    <p className="mt-1 text-base text-foreground">{m.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-secondary py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                Our Values
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-5xl">
                What drives us
              </h2>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-border bg-background p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                Leadership
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-5xl">
                Meet the team
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Industry veterans dedicated to building the future of enterprise
                software.
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="flex flex-col items-center rounded-2xl border border-border p-8 text-center"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground font-display">
                    {member.initials}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-accent">
                    {member.title}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                </div>
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
