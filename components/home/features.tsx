import { Shield, Zap, Globe, Lock, RefreshCcw, HeadphonesIcon } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Sub-second response times across all modules. Built on modern infrastructure for peak performance.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "SOC 2 compliant, end-to-end encryption, and role-based access control to protect your data.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description:
      "Multi-region deployment, multi-currency, and multi-language support for worldwide operations.",
  },
  {
    icon: Lock,
    title: "Data Sovereignty",
    description:
      "Choose where your data lives. On-premise, cloud, or hybrid deployments to meet compliance needs.",
  },
  {
    icon: RefreshCcw,
    title: "Seamless Integrations",
    description:
      "Connect with 200+ third-party tools and build custom workflows with our open API.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description:
      "Dedicated account managers and round-the-clock support to keep your business running smoothly.",
  },
]

export function Features() {
  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Why Scoop
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-5xl text-balance">
            Built for modern enterprises
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            We obsess over the details so you can focus on growing your business.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
