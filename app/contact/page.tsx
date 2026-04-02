"use client"

import React from "react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@scoop.io",
    href: "mailto:hello@scoop.io",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (800) 555-0199",
    href: "tel:+18005550199",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "San Francisco, CA",
    href: "#",
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-primary pt-32 pb-20 lg:pt-44 lg:pb-28">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Contact
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold text-primary-foreground md:text-6xl text-balance">
              {"Let's talk about your business"}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
              Whether you need a demo, a quote, or just want to learn more,
              our team is ready to help.
            </p>
          </div>
        </section>

        {/* Contact Form + Info */}
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-16 lg:grid-cols-2">
              {/* Form */}
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Send us a message
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fill out the form and our team will get back to you within 24
                  hours.
                </p>

                {submitted ? (
                  <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/5 p-8 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                      <Mail className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="mt-4 font-display text-xl font-bold text-foreground">
                      Message sent!
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Thank you for reaching out. Our team will be in touch
                      shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="text-sm font-medium text-foreground"
                        >
                          First name
                        </label>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                          placeholder="Jane"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="text-sm font-medium text-foreground"
                        >
                          Last name
                        </label>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        Work email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="jane@company.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="text-sm font-medium text-foreground"
                      >
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        required
                        className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Acme Inc."
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="interest"
                        className="text-sm font-medium text-foreground"
                      >
                        Interested in
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select a product
                        </option>
                        <option>Full Platform</option>
                        <option>ERP</option>
                        <option>HRM</option>
                        <option>CRM</option>
                        <option>SCM</option>
                        <option>Accounting</option>
                        <option>Project Management</option>
                        <option>Inventory Management</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-foreground"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="mt-2 w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Tell us about your needs..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Get in touch
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Prefer a different channel? Reach us directly.
                </p>

                <div className="mt-8 flex flex-col gap-6">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-start gap-4 rounded-xl border border-border p-5 transition-colors hover:border-primary/30"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {item.label}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Office Hours */}
                <div className="mt-8 rounded-2xl bg-secondary p-8">
                  <h3 className="font-display text-lg font-bold text-foreground">
                    Office Hours
                  </h3>
                  <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="text-foreground">9:00 AM - 6:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-foreground">10:00 AM - 4:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-foreground">Closed</span>
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-muted-foreground">
                    Enterprise clients have access to 24/7 dedicated support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
