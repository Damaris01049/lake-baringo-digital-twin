import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 text-white">
      <div className="mx-auto flex min-h-[75vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        <p className="mb-4 rounded-full border border-blue-300 px-4 py-1 text-sm font-medium">
          {siteConfig.badge}
        </p>

        <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-6xl">
          {siteConfig.name}
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-blue-100 md:text-xl">
          {siteConfig.description}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/map"
            className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-100"
          >
            Explore Interactive Map
          </Link>

          <Link
            href="/about"
            className="rounded-lg border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-blue-700"
          >
            Learn More
          </Link>
        </div>

      </div>
    </section>
  );
}