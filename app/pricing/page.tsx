"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { CheckCircle2, X, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

const plans = [
  {
    name: "Starter",
    description: "For small businesses getting started with enterprise tools.",
    price: "$49",
    period: "/user/month",
    highlight: false,
    features: [
      { name: "Up to 25 users", included: true },
      { name: "3 modules included", included: true },
      { name: "5 GB storage", included: true },
      { name: "Email support", included: true },
      { name: "Basic reporting", included: true },
      { name: "API access", included: false },
      { name: "Custom integrations", included: false },
      { name: "Dedicated account manager", included: false },
    ],
    cta: "Start Free Trial",
    href: "/contact",
  },
  {
    name: "Business",
    description: "For growing companies that need the full suite.",
    price: "$99",
    period: "/user/month",
    highlight: true,
    features: [
      { name: "Up to 200 users", included: true },
      { name: "All 7 modules included", included: true },
      { name: "50 GB storage", included: true },
      { name: "Priority support", included: true },
      { name: "Advanced reporting & analytics", included: true },
      { name: "API access", included: true },
      { name: "Custom integrations", included: true },
      { name: "Dedicated account manager", included: false },
    ],
    cta: "Start Free Trial",
    href: "/contact",
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex requirements.",
    price: "Custom",
    period: "",
    highlight: false,
    features: [
      { name: "Unlimited users", included: true },
      { name: "All 7 modules included", included: true },
      { name: "Unlimited storage", included: true },
      { name: "24/7 dedicated support", included: true },
      { name: "Custom reporting & dashboards", included: true },
      { name: "API access", included: true },
      { name: "Custom integrations", included: true },
      { name: "Dedicated account manager", included: true },
    ],
    cta: "Contact Sales",
    href: "/contact",
  },
]

const faqs = [
  {
    question: "Can I switch plans later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle. No penalties or lock-in contracts.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Absolutely. Every plan includes a 14-day free trial with full access to all features. No credit card required to start.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, wire transfers, and purchase orders for Enterprise clients. All payments are processed securely.",
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer:
      "Yes, we offer a 20% discount when you choose annual billing. Contact our sales team for volume discounts on larger deployments.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer:
      "Your data remains accessible for 30 days after cancellation. You can export all your data at any time during this period. After 30 days, data is permanently deleted per our data retention policy.",
  },
  {
    question: "Can I add more modules to my Starter plan?",
    answer:
      "Yes, additional modules can be purchased as add-ons for $29/user/month each. Or you can upgrade to the Business plan for access to all 7 modules.",
  },
]

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-primary pt-32 pb-20 lg:pt-44 lg:pb-28">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Pricing
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold text-primary-foreground md:text-6xl text-balance">
              Simple, transparent pricing
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
              No hidden fees, no surprise charges. Choose the plan that fits
              your business and scale when you are ready.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 lg:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col rounded-2xl border p-8 ${
                    plan.highlight
                      ? "border-accent bg-background shadow-xl shadow-accent/10"
                      : "border-border bg-background"
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold text-accent-foreground uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="font-display text-5xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>
                  <Link
                    href={plan.href}
                    className={`mt-8 block rounded-lg px-6 py-3 text-center text-sm font-semibold transition-colors ${
                      plan.highlight
                        ? "bg-accent text-accent-foreground hover:brightness-110"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                  <ul className="mt-8 flex flex-col gap-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature.name}
                        className="flex items-center gap-2"
                      >
                        {feature.included ? (
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                        ) : (
                          <X className="h-5 w-5 shrink-0 text-muted-foreground/40" />
                        )}
                        <span
                          className={`text-sm ${feature.included ? "text-foreground" : "text-muted-foreground/60"}`}
                        >
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-secondary py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-6">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                FAQ
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-5xl">
                Frequently asked questions
              </h2>
            </div>
            <div className="mt-16 flex flex-col gap-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="rounded-xl border border-border bg-background"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                    aria-expanded={openFaq === index}
                  >
                    <span className="text-base font-semibold text-foreground">
                      {faq.question}
                    </span>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 shrink-0 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-5">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
