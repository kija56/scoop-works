import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog - Scoop Enterprise Systems",
  description:
    "Insights, updates, and best practices for enterprise operations from the Scoop team.",
}

const featuredPost = {
  slug: "future-of-enterprise-software",
  title: "The Future of Enterprise Software: AI-Driven Operations",
  excerpt:
    "How artificial intelligence is reshaping enterprise resource planning, customer management, and supply chain logistics in 2026 and beyond.",
  category: "Industry Trends",
  date: "Feb 5, 2026",
  readTime: "8 min read",
  author: {
    name: "Alexandra Reid",
    initials: "AR",
    title: "CEO",
  },
}

const posts = [
  {
    slug: "erp-implementation-guide",
    title: "The Complete ERP Implementation Guide for Mid-Market Companies",
    excerpt:
      "Step-by-step framework for successfully rolling out an ERP system without disrupting daily operations.",
    category: "ERP",
    date: "Jan 28, 2026",
    readTime: "12 min read",
    author: { name: "David Kimura", initials: "DK" },
  },
  {
    slug: "hrm-employee-retention",
    title: "5 Ways HRM Software Improves Employee Retention",
    excerpt:
      "Data-driven strategies that leverage human resource management tools to reduce turnover and boost engagement.",
    category: "HRM",
    date: "Jan 20, 2026",
    readTime: "6 min read",
    author: { name: "Priya Sharma", initials: "PS" },
  },
  {
    slug: "crm-sales-pipeline",
    title: "Building a High-Converting Sales Pipeline with CRM Analytics",
    excerpt:
      "Learn how to identify bottlenecks, predict close rates, and accelerate deals with intelligent CRM reporting.",
    category: "CRM",
    date: "Jan 15, 2026",
    readTime: "7 min read",
    author: { name: "Marcus Johnson", initials: "MJ" },
  },
  {
    slug: "supply-chain-resilience",
    title: "Supply Chain Resilience: Lessons from 2025",
    excerpt:
      "What last year's global disruptions taught us about building adaptable, tech-enabled supply chains.",
    category: "SCM",
    date: "Jan 8, 2026",
    readTime: "9 min read",
    author: { name: "David Kimura", initials: "DK" },
  },
  {
    slug: "accounting-automation",
    title: "Automating Your Close: How Modern Accounting Systems Save Weeks",
    excerpt:
      "Explore the tools and workflows that cut month-end close from weeks to days without sacrificing accuracy.",
    category: "Accounting",
    date: "Dec 30, 2025",
    readTime: "5 min read",
    author: { name: "Priya Sharma", initials: "PS" },
  },
  {
    slug: "project-management-remote-teams",
    title: "Project Management Best Practices for Distributed Teams",
    excerpt:
      "Strategies and tooling to keep remote and hybrid teams aligned, productive, and accountable.",
    category: "Project Management",
    date: "Dec 22, 2025",
    readTime: "8 min read",
    author: { name: "Marcus Johnson", initials: "MJ" },
  },
]

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-primary pt-32 pb-20 lg:pt-44 lg:pb-28">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Blog
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold text-primary-foreground md:text-6xl text-balance">
              Insights for enterprise leaders
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
              Expert perspectives on enterprise operations, digital
              transformation, and the future of business technology.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-2xl border border-border bg-secondary p-8 lg:p-12">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent">
                      {featuredPost.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Featured
                    </span>
                  </div>
                  <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-4xl">
                    {featuredPost.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {featuredPost.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        {featuredPost.author.initials}
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {featuredPost.author.name}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {featuredPost.date}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <Link
                    href="#"
                    className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
                  >
                    Read article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
                <div className="flex-1">
                  <div className="flex aspect-[16/10] items-center justify-center rounded-xl bg-primary/5 border border-border">
                    <span className="text-6xl font-bold text-primary/10 font-display">
                      AI
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Post Grid */}
        <section className="bg-background pb-24 lg:pb-32">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-display text-2xl font-bold text-foreground">
              Latest Articles
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href="#"
                  className="group flex flex-col rounded-2xl border border-border transition-all hover:border-primary/30 hover:shadow-lg"
                >
                  {/* Thumbnail */}
                  <div className="flex aspect-[16/10] items-center justify-center rounded-t-2xl bg-secondary">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary/30">
                      {post.category}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-lg font-bold text-foreground group-hover:text-primary">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        {post.author.initials}
                      </div>
                      <span className="text-xs font-medium text-foreground">
                        {post.author.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {post.date}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
