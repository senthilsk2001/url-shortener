import React from "react";
import {
  Link2,
  BarChart3,
  QrCode,
  Shield,
  Zap,
  Globe,
  ArrowRight,
} from "lucide-react";

export default function UrlShortenerLanding() {
  // const features = [
  //   {
  //     icon: <Link2 className="h-8 w-8 text-indigo-600" />,
  //     title: "Instant URL Shortening",
  //     description:
  //       "Convert long URLs into clean, shareable links in seconds.",
  //   },
  //   {
  //     icon: <BarChart3 className="h-8 w-8 text-indigo-600" />,
  //     title: "Advanced Analytics",
  //     description:
  //       "Track clicks, locations, devices, and referral sources in real time.",
  //   },
  //   {
  //     icon: <QrCode className="h-8 w-8 text-indigo-600" />,
  //     title: "QR Code Generator",
  //     description:
  //       "Generate downloadable QR codes automatically for every link.",
  //   },
  //   {
  //     icon: <Shield className="h-8 w-8 text-indigo-600" />,
  //     title: "Secure & Reliable",
  //     description:
  //       "Protected by HTTPS encryption and enterprise-grade security.",
  //   },
  //   {
  //     icon: <Zap className="h-8 w-8 text-indigo-600" />,
  //     title: "Lightning Fast",
  //     description:
  //       "Global infrastructure ensures blazing-fast redirects.",
  //   },
  //   {
  //     icon: <Globe className="h-8 w-8 text-indigo-600" />,
  //     title: "Custom Domains",
  //     description:
  //       "Create branded short links using your own custom domain.",
  //   },
  // ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-indigo-600 p-2 text-white">
              <Link2 size={18} />
            </div>
            <span className="text-xl font-bold">ShortLy</span>
          </div>

          {/*<nav className="hidden gap-8 md:flex">
            <a href="#features" className="hover:text-indigo-600">
              Features
            </a>
            <a href="#pricing" className="hover:text-indigo-600">
              Pricing
            </a>
            <a href="#faq" className="hover:text-indigo-600">
              FAQ
            </a>
          </nav>*/}

          <button className="cursor-pointer rounded-lg bg-indigo-600 px-5 py-2 text-white transition hover:bg-indigo-700">
            Login
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-indigo-50 via-white to-purple-50" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <span className="rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
              Smart URL Shortening Platform
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
              Shorten.
              <span className="text-indigo-600"> Share.</span>
              <br />
              Track.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Create branded short links, generate QR codes, and gain valuable
              insights with real-time analytics.
            </p>

            {/* URL Input */}
            <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-4 rounded-full p-4 shadow-2xl md:flex-row">
              <input
                type="text"
                placeholder="Paste your long URL here..."
                className="flex-1 rounded-xl border-gray-200 px-5 py-4 outline-none focus:border-indigo-500"
              />
              <button className="cursor-pointer flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-8 py-4 font-semibold text-white transition hover:bg-indigo-700">
                Shorten URL
                <ArrowRight size={18} />
              </button>
            </div>

            {/*<div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <span>✓ Free Forever</span>
              <span>✓ Custom Domains</span>
              <span>✓ Analytics</span>
              <span>✓ QR Codes</span>
            </div>*/}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      {/*<section className="border-y bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <p className="text-center text-sm uppercase tracking-wider text-gray-500">
            Trusted by teams worldwide
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-10 text-xl font-semibold text-gray-400">
            <span>Google</span>
            <span>Stripe</span>
            <span>Shopify</span>
            <span>Airbnb</span>
            <span>Microsoft</span>
          </div>
        </div>
      </section>*/}

      {/* Features */}
      {/*<section id="features" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Everything you need to manage links
          </h2>
          <p className="mt-4 text-gray-600">
            Powerful tools for marketers, creators, and businesses.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div>{feature.icon}</div>

              <h3 className="mt-4 text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>*/}

      {/* Analytics Preview */}
      {/*<section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold">
                Track every click with detailed analytics
              </h2>

              <p className="mt-6 text-gray-600">
                Understand your audience with real-time reports and actionable
                insights.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Total Clicks",
                  "Unique Visitors",
                  "Geographic Data",
                  "Device Breakdown",
                  "Traffic Sources",
                  "Conversion Tracking",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-indigo-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-2xl">
              <div className="rounded-2xl bg-linear-to-r from-indigo-500 to-purple-600 p-6 text-white">
                <h3 className="font-semibold">Analytics Dashboard</h3>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white/10 p-4">
                    <p className="text-sm">Total Clicks</p>
                    <h4 className="text-3xl font-bold">24.8K</h4>
                  </div>

                  <div className="rounded-xl bg-white/10 p-4">
                    <p className="text-sm">Visitors</p>
                    <h4 className="text-3xl font-bold">12.3K</h4>
                  </div>

                  <div className="rounded-xl bg-white/10 p-4">
                    <p className="text-sm">Countries</p>
                    <h4 className="text-3xl font-bold">78</h4>
                  </div>

                  <div className="rounded-xl bg-white/10 p-4">
                    <p className="text-sm">CTR</p>
                    <h4 className="text-3xl font-bold">8.9%</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Pricing */}
      {/*<section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Simple Pricing</h2>
          <p className="mt-4 text-gray-600">
            Start for free and scale as you grow.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {[
            {
              name: "Free",
              price: "$0",
              features: [
                "100 links/month",
                "Basic analytics",
                "QR codes",
              ],
            },
            {
              name: "Pro",
              price: "$9",
              popular: true,
              features: [
                "Unlimited links",
                "Advanced analytics",
                "Custom domains",
                "API access",
              ],
            },
            {
              name: "Business",
              price: "Custom",
              features: [
                "Team management",
                "Enterprise analytics",
                "Priority support",
              ],
            },
          ].map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-8 ${
                plan.popular
                  ? "border-indigo-600 shadow-xl"
                  : ""
              }`}
            >
              {plan.popular && (
                <span className="rounded-full bg-indigo-600 px-3 py-1 text-sm text-white">
                  Most Popular
                </span>
              )}

              <h3 className="mt-4 text-2xl font-bold">{plan.name}</h3>

              <div className="mt-4 text-5xl font-bold">
                {plan.price}
                {plan.price !== "Custom" && (
                  <span className="text-lg text-gray-500">/mo</span>
                )}
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full rounded-xl py-3 font-semibold ${
                  plan.popular
                    ? "bg-indigo-600 text-white"
                    : "border"
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>*/}

      {/* CTA */}
      {/*<section className="bg-indigo-600 py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-5xl font-bold">
            Start shortening links today
          </h2>

          <p className="mt-6 text-lg text-indigo-100">
            Join thousands of creators, marketers, and businesses.
          </p>

          <button className="mt-10 rounded-xl bg-white px-8 py-4 font-semibold text-indigo-600 transition hover:bg-gray-100">
            Create Free Account
          </button>
        </div>
      </section>*/}

      {/* Footer */}
      <footer className="py-10 items-center justify-items-center">
        <div className="mx-auto flex  flex-col items-center justify-items-center gap-4 px-6 text-sm text-gray-500 md:flex-row">
          <p>© 2026 Shortly. All rights reserved.</p>

          {/*<div className="flex gap-6">
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">API</a>
            <a href="#">Privacy</a>
          </div>*/}
        </div>
      </footer>
    </div>
  );
}