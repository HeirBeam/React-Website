import Link from "next/link";
// import Image from "next/image"; // uncomment when you add screenshots

const projects = [
  { slug: "", title: "Ink-And-Iron", blurb: "2D Action Platformer. WebGL playable." },
];

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <section className="py-12">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="mt-2 text-gray-600">A few things I am building and shipping.</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article key={p.slug} className="rounded-2xl border overflow-hidden">
            <div className="relative aspect-video bg-gray-100" />
            <div className="p-4">
              <h2 className="font-medium">{p.title}</h2>
              <p className="mt-1 text-sm text-gray-600">{p.blurb}</p>
              <Link href={`/projects/${p.slug}`} className="mt-3 inline-block underline">
                Open →
              </Link>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-6 text-sm text-gray-500">
      </p>
    </section>
  );
}
