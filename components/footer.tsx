import Link from "next/link"

const footerLinks = {
  Products: [
    { name: "ERP", href: "/products#erp" },
    { name: "HRM", href: "/products#hrm" },
    { name: "CRM", href: "/products#crm" },
    { name: "SCM", href: "/products#scm" },
    { name: "Accounting", href: "/products#accounting" },
    { name: "Project Management", href: "/products#project" },
    { name: "Inventory", href: "/products#inventory" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
  ],
  Resources: [
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Community", href: "#" },
    { name: "Support", href: "/contact" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
                <span className="text-lg font-bold text-accent-foreground font-display">S</span>
              </div>
              <span className="text-xl font-bold font-display">Scoop</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed opacity-70">
              Enterprise systems that scale with you. Powering the next generation of business operations worldwide.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold uppercase tracking-wider opacity-50">
                {category}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm opacity-70 transition-opacity hover:opacity-100"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row">
          <p className="text-sm opacity-50">
            {"\u00A9"} 2026 Scoop. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm opacity-50 transition-opacity hover:opacity-100" aria-label="Twitter">
              Twitter
            </Link>
            <Link href="#" className="text-sm opacity-50 transition-opacity hover:opacity-100" aria-label="LinkedIn">
              LinkedIn
            </Link>
            <Link href="#" className="text-sm opacity-50 transition-opacity hover:opacity-100" aria-label="GitHub">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
