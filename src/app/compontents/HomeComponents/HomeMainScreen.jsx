import Link from "next/link";
import React from 'react'

function HomeMainScreen() {
  return (
    <div>
        <main className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 font-sans">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        <span className="px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
          Welcome to my portfolio
        </span>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
          Hi, I&apos;m <span className="text-blue-600">Kunal Thakur</span>
        </h1>

        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 mb-10">
          A web developer building fast, responsive, and modern web applications
          with React, Next.js, and Tailwind CSS.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/services"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
          >
            Explore Services
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
          >
            About Me
          </Link>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white dark:bg-zinc-900 shadow-sm border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-lg font-semibold mb-2">Frontend Development</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Clean, responsive interfaces built with React, Next.js, and Tailwind CSS.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-zinc-900 shadow-sm border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-lg font-semibold mb-2">Full-Stack Apps</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              End-to-end web solutions with APIs, databases, and smooth performance.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-zinc-900 shadow-sm border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-lg font-semibold mb-2">SEO &amp; Speed</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Optimized for fast load times, accessibility, and search visibility.
            </p>
          </div>
        </div>
      </section>
    </main>
    </div>
  )
}

export default HomeMainScreen