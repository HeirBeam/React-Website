import Link from "next/link";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="py-12">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-3 text-gray-700 max-w-2xl">
        Want to collaborate, report a bug, or suggest an improvement? Reach out anytime.
      </p>
    
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a
          href="Test" // ← change to your inbox
          className="rounded-xl border px-5 py-4 hover:bg-gray-50"
        >
          <div className="font-medium">Email</div>
          <div className="text-gray-600 text-sm">Undecided whether to include personal email</div>
        </a>

        <a
          href="https://github.com/HeirBeam"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border px-5 py-4 hover:bg-gray-50"
        >
          <div className="font-medium">GitHub</div>
          <div className="text-gray-600 text-sm">github.com/HeirBeam</div>
        </a>
      </div>

      <form
        action="mailto:hello@heirbeam.dev" // or swap to an API route/Formspree later
        method="POST"
        encType="text/plain"
        className="mt-10 rounded-2xl border p-5 grid gap-4 max-w-xl"
      >
        <label className="grid gap-1">
          <span className="text-sm text-gray-700">Your email</span>
          <input name="email" type="email" required className="rounded-md border px-3 py-2" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm text-gray-700">Message</span>
          <textarea name="message" rows={5} required className="rounded-md border px-3 py-2" />
        </label>
        <button type="submit" className="rounded-lg bg-black text-white px-5 py-2.5 w-fit">
          Send
        </button>
        <p className="text-xs text-gray-500">
        </p>
      </form>

      <div className="mt-8 text-sm">
        <Link href="/" className="underline">← Back to home</Link>
      </div>
    </section>
  );
}
