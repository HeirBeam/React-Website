export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="py-12">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="mt-3 text-gray-700 max-w-2xl">
        I am Ibraheem Sharif. I build apps and Unity WebGL games you can play in the browser.
        I care about clean UX, performance, and shipping fast MVPs.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border p-5">
          <h2 className="font-semibold">Skills</h2>
          <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
            <li>React / Next.js (App Router)</li>
            <li>Unity (WebGL)</li>
            <li>TypeScript, Tailwind</li>
            <li>Supabase / Firebase</li>
          </ul>
        </div>
        <div className="rounded-2xl border p-5">
          <h2 className="font-semibold">What I am focusing on</h2>
          <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
            <li>Browser-playable game experiences</li>
            <li>Lightweight tools and UIs</li>
            <li>Fast deploys and iteration</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
