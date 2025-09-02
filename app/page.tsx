export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">My First Next.js Site</h1>
      <p className="mt-2 text-gray-700">Styled with Tailwind.</p>
      <a href="/about" className="mt-6 inline-block underline">
        Go to About →
      </a>
    </main>
  );
}
