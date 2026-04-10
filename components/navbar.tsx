"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { products } from "@/lib/products"
import { Menu, X, ChevronDown } from "lucide-react"

const navLinks = [
  { name: "Products", href: "/products", hasDropdown: true },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="relative inline-block h-12 shrink-0 aspect-[470/98] sm:h-14 md:h-16"
        >
          <Image
            src="/scoopworks-logo-dark.png"
            alt="ScoopWorks"
            fill
            className="object-contain object-left"
            sizes="(max-width: 768px) 240px, 320px"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.name}
                  <ChevronDown className="h-4 w-4" />
                </Link>
                {productsOpen && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-4">
                    <div className="grid w-[520px] grid-cols-2 gap-1 rounded-xl border border-border bg-background p-3 shadow-xl">
                      {products.map((product) => (
                        <Link
                          key={product.id}
                          href={`/products/${product.id}`}
                          className="flex flex-col rounded-lg px-4 py-3 transition-colors hover:bg-secondary"
                        >
                          <span className="text-sm font-semibold text-foreground">
                            {product.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {product.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </Link>
            )
          )}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Log in
          </Link>
          <Link
            href="/contact"
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-border" />
            <Link
              href="/contact"
              className="text-base font-medium text-muted-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Log in
            </Link>
            <Link
              href="/contact"
              className="rounded-lg bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
