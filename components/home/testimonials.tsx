const testimonials = [
  {
    quote:
      "Scoop transformed how we manage our entire operation. We consolidated five separate tools into one unified platform.",
    name: "Sarah Chen",
    title: "CTO, Meridian Corp",
    initials: "SC",
  },
  {
    quote:
      "The HRM and payroll modules alone saved us 30 hours per week. The ROI was immediate and substantial.",
    name: "James Okafor",
    title: "VP Operations, NexGen Industries",
    initials: "JO",
  },
  {
    quote:
      "Rolling out Scoop across 12 countries was seamless. Multi-currency and compliance features are world-class.",
    name: "Maria Gonzalez",
    title: "CFO, Atlas Global",
    initials: "MG",
  },
]

export function Testimonials() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Testimonials
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-5xl text-balance">
            Loved by enterprise teams
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-border p-8"
            >
              {/* Stars */}
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={`star-${t.name}-${i}`}
                    className="h-5 w-5 fill-current"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-6 flex-1 text-base leading-relaxed text-foreground">
                {`"${t.quote}"`}
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
