// app/page.tsx
import Link from "next/link";

export default function Home() {
   return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: text */}
        <div>
          <h1 className="text-4xl font-bold">I build apps & Unity games</h1>
          <p className="mt-3 text-lg text-gray-600">
            Play my WebGL builds in the browser and check out recent projects.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/projects" className="rounded-lg bg-black text-white px-4 py-2">
              View Projects
            </Link>
            <Link href="/about" className="rounded-lg border px-4 py-2">
              About me
            </Link>
          </div>
        </div>

        {/* Right: image placeholder */}
        <div className="rounded-xl border aspect-video bg-gray-100 flex items-center justify-center">
          <span className="text-gray-500">Hero image / screenshot</span>
        </div>
      </div>
    </section>
  );
}
