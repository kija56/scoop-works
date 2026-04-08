import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Play, CheckCircle2, BarChart3, Users, Zap } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950/90 to-slate-950 pt-32 pb-20 lg:pt-44 lg:pb-32">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-violet-600/20 blur-[100px] animate-pulse" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[100px] animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      {/* Grid pattern overlay - using CSS grid instead of inline SVG data URL */}
      <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
           

            {/* Heading with gradient text */}
            <h1 className="max-w-3xl font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight">
              <span className="text-white">Enterprise systems that</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                scale with you
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed">
              From ERP to CRM, HRM to SCM, Scoop unifies your entire business
              under one intelligent platform. Built for speed, designed for growth.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/40"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/30"
              >
                Explore Products
              </Link>
              {/* <button className="inline-flex items-center gap-2 rounded-xl px-6 py-4 text-base font-medium text-gray-300 transition-all duration-300 hover:text-white">
                <Play className="h-4 w-4" />
                Watch Demo
              </button> */}
            </div>

            {/* Stats row */}
            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-10">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <span className="text-white font-medium">500+ Active Customers</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-blue-400" />
                <span className="text-white font-medium">99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-400" />
                <span className="text-white font-medium">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Image Area - 3D Card Stack Design */}
          <div className="flex-1 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Main floating card */}
              <div className="relative rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-2 shadow-2xl shadow-black/30 transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl -z-10" />
                <div className="rounded-xl bg-white/5 p-4 overflow-hidden">
                  <Image
                    src="/undraw_all-the-data_ijgn.svg"
                    alt="Unified business data dashboard"
                    width={800}
                    height={600}
                    className="h-auto w-full object-contain"
                    priority
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full px-3 py-1 text-xs font-bold text-white shadow-lg">
                  LIVE DEMO
                </div>
              </div>

              {/* Floating card 1 - Top Left */}
              <div className="absolute -top-8 -left-8 md:-top-12 md:-left-12 w-32 md:w-40 rounded-xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 p-3 shadow-xl transition-all duration-500 hover:scale-110 hover:rotate-3 animate-float">
                <Image
                  src="/undraw_revenue-analysis_fjh2.svg"
                  alt="Revenue analysis"
                  width={240}
                  height={180}
                  className="h-auto w-full"
                />
                <div className="mt-2 text-center text-xs font-medium text-white/80">
                  Revenue +28%
                </div>
              </div>

              {/* Floating card 2 - Bottom Right */}
              <div className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 w-32 md:w-40 rounded-xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 p-3 shadow-xl transition-all duration-500 hover:scale-110 hover:-rotate-3 animate-float-delayed">
                <Image
                  src="/undraw_report_k55w.svg"
                  alt="Analytics report"
                  width={240}
                  height={180}
                  className="h-auto w-full"
                />
                <div className="mt-2 text-center text-xs font-medium text-white/80">
                  Smart Insights
                </div>
              </div>

              {/* Floating indicator dots */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-blue-400 animate-ping" />
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                <span className="h-2 w-2 rounded-full bg-indigo-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(-2deg); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        /* Grid pattern utility (add to your global CSS or here) */
        .bg-grid-white\\/[0\\.02] {
          background-image: linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  )
}