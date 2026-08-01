export default function Home() {
  return (
    <div className="min-h-screen bg-[#08090A] text-[#F4F4F5]">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-[#27272A]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#5E6AD2]" />
          <span className="font-medium text-lg">Narrative Lens</span>
        </div>
        <a
          href="/app"
          className="px-4 py-2 bg-[#5E6AD2] hover:bg-[#7170FF] rounded-lg text-sm font-medium transition"
        >
          Try it now
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
          Turn news into powerful
          <br />
          narratives in seconds
        </h1>
        <p className="mt-6 text-lg text-[#A1A1AA] max-w-2xl mx-auto">
          Narrative Lens transforms any news article into clear, engaging
          stories — made for students, creators, and curious minds.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="/app"
            className="px-6 py-3 bg-[#5E6AD2] hover:bg-[#7170FF] rounded-lg font-medium transition"
          >
            Try it now
          </a>
          <a
            href="#how-it-works"
            className="px-6 py-3 border border-[#27272A] hover:bg-[#18181B] rounded-lg font-medium transition"
          >
            How it works
          </a>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-[#27272A] bg-[#111113]">
            <h3 className="font-medium text-lg mb-2">Clear & Accessible</h3>
            <p className="text-[#A1A1AA] text-sm">
              Makes complex news easy to understand for any age.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-[#27272A] bg-[#111113]">
            <h3 className="font-medium text-lg mb-2">Multiple Perspectives</h3>
            <p className="text-[#A1A1AA] text-sm">
              See the same story framed in different ways.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-[#27272A] bg-[#111113]">
            <h3 className="font-medium text-lg mb-2">Built for Speed</h3>
            <p className="text-[#A1A1AA] text-sm">
              Paste → Generate → Read. No fluff.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#27272A] py-10 px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-6 text-sm text-[#71717A]">
          <div>
            <span className="text-[#F4F4F5] font-medium">Narrative Lens</span>
            <p className="mt-1">Making news accessible through narratives.</p>
          </div>
          <div>Built for STEMist Hacks IV</div>
        </div>
      </footer>
    </div>
  );
}