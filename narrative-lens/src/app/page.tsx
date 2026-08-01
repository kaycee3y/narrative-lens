export default function Home() {
  return (
    <div className="min-h-screen bg-[#08090A] text-[#F4F4F5]">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-[#27272A] animate-fade-in">
        <div className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke="#5E6AD2" strokeWidth="2" />
            <circle cx="12" cy="12" r="3.5" fill="#5E6AD2" />
            <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="#5E6AD2" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="font-medium text-lg">Narrative Lens</span>
        </div>
        <a
          href="/app"
          className="px-4 py-2 bg-[#5E6AD2] hover:bg-[#7170FF] rounded-lg text-sm font-medium transition-all duration-200 hover:scale-[1.02]"
        >
          Try it now
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight animate-fade-in">
          Turn news into powerful
          <br />
          narratives in seconds
        </h1>
        <p className="mt-6 text-lg text-[#A1A1AA] max-w-2xl mx-auto animate-fade-in animate-delay-100">
          Narrative Lens transforms any news article into clear, engaging
          stories made for students, creators, and curious minds.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animate-delay-200">
          <a
            href="/app"
            className="px-6 py-3 bg-[#5E6AD2] hover:bg-[#7170FF] rounded-lg font-medium transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            Try it now
          </a>
          <a
            href="#how-it-works"
            className="px-6 py-3 border border-[#27272A] hover:bg-[#18181B] rounded-lg font-medium transition-all duration-200"
          >
            How it works
          </a>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-[#27272A] bg-[#111113] animate-scale-in hover:border-[#5E6AD2]/50 transition-all duration-300 hover:-translate-y-1">
            <h3 className="font-medium text-lg mb-2">Clear & Accessible</h3>
            <p className="text-[#A1A1AA] text-sm">
              Makes complex news easy to understand for any age.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-[#27272A] bg-[#111113] animate-scale-in animate-delay-100 hover:border-[#5E6AD2]/50 transition-all duration-300 hover:-translate-y-1">
            <h3 className="font-medium text-lg mb-2">Multiple Perspectives</h3>
            <p className="text-[#A1A1AA] text-sm">
              See the same story framed in different ways.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-[#27272A] bg-[#111113] animate-scale-in animate-delay-200 hover:border-[#5E6AD2]/50 transition-all duration-300 hover:-translate-y-1">
            <h3 className="font-medium text-lg mb-2">Built for Speed</h3>
            <p className="text-[#A1A1AA] text-sm">
              Paste → Generate → Read. No fluff.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works — wavy process path */}
      <section id="how-it-works" className="max-w-5xl mx-auto px-6 pb-24">
        <div className="relative rounded-2xl border border-[#27272A] bg-[#0D0D0F] p-8 md:p-14 overflow-hidden">
          <span className="hidden sm:block absolute top-4 right-6 text-7xl md:text-8xl font-bold text-[#18181B] select-none pointer-events-none">
            3x
          </span>

          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#5E6AD2] border border-[#5E6AD2]/30 bg-[#5E6AD2]/10 rounded-full px-3 py-1">
              Narrative Lens
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
            How it works.
          </h2>

          {/* Wavy connector (decorative, sits behind the columns) */}
          <div className="relative">
            <svg
              viewBox="0 0 800 200"
              className="absolute top-10 left-0 w-full h-32 md:h-40 hidden md:block"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M80,150 C220,150 260,20 400,20 C540,20 580,110 720,110"
                stroke="#5E6AD2"
                strokeOpacity="0.5"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
            </svg>

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center md:translate-y-16">
                <div className="relative w-14 h-14 rounded-2xl bg-[#111113] border border-[#5E6AD2]/40 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#5E6AD2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6M9 8h1m5 12H8a2 2 0 01-2-2V6a2 2 0 012-2h5.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V18a2 2 0 01-2 2z" />
                  </svg>
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#5E6AD2] text-[10px] flex items-center justify-center font-medium">1</span>
                </div>
                <h3 className="font-medium mb-2">Paste an article</h3>
                <p className="text-[#A1A1AA] text-sm max-w-[200px]">
                  Drop in the text of any news article you want transformed.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-14 h-14 rounded-2xl bg-[#111113] border border-[#5E6AD2]/40 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#5E6AD2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 10l-5.714 2.143L13 19l-2.286-6.857L5 10l5.714-2.143L13 1z" />
                  </svg>
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#5E6AD2] text-[10px] flex items-center justify-center font-medium">2</span>
                </div>
                <h3 className="font-medium mb-2">Pick a lens</h3>
                <p className="text-[#A1A1AA] text-sm max-w-[200px]">
                  Choose a single style, or compare all perspectives at once.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center md:translate-y-10">
                <div className="relative w-14 h-14 rounded-2xl bg-[#111113] border border-[#5E6AD2]/40 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#5E6AD2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8.684 13.342a4 4 0 106.632 0M8.684 10.658a4 4 0 116.632 0M18 6a3 3 0 11-6 0 3 3 0 016 0zM9 18a3 3 0 11-6 0 3 3 0 016 0zm9 0a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#5E6AD2] text-[10px] flex items-center justify-center font-medium">3</span>
                </div>
                <h3 className="font-medium mb-2">Read & share</h3>
                <p className="text-[#A1A1AA] text-sm max-w-[200px]">
                  Get a clear narrative in seconds — copy it anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Preview — browser chrome card */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-semibold text-center mb-4">See it in action</h2>
        <p className="text-[#A1A1AA] text-center mb-10 max-w-xl mx-auto">
          Same article, three different lenses — instantly.
        </p>
        <div className="rounded-2xl border border-[#27272A] bg-[#0D0D0F] overflow-hidden">
          {/* Browser chrome bar */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-[#27272A] bg-[#111113]">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3F3F46]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#3F3F46]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#3F3F46]" />
            </div>
            <div className="flex-1 text-center text-xs text-[#71717A] truncate">
              narrativelens.app/demo
            </div>
          </div>

          <div className="p-6 md:p-8">
            <p className="text-xs text-[#71717A] mb-4 uppercase tracking-wide">Original headline</p>
            <p className="text-sm text-[#D4D4D8] mb-6 pb-6 border-b border-[#27272A]">
              &ldquo;Local chess club sees unexpected feline visitor during Wednesday match.&rdquo;
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-xs font-medium text-[#5E6AD2] mb-2 uppercase tracking-wide">Teen-Friendly</p>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  So this is wild — a cat literally strolled into a chess club and started watching the games like it owned the place.
                </p>
              </div>
              <div>
                <p className="text-xs font-medium text-[#5E6AD2] mb-2 uppercase tracking-wide">Neutral</p>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  A cat entered a local chess club during a scheduled match and remained near the players for the session&apos;s duration.
                </p>
              </div>
              <div>
                <p className="text-xs font-medium text-[#5E6AD2] mb-2 uppercase tracking-wide">Story</p>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  It was an ordinary Wednesday evening — until a curious cat wandered in and turned the quiet chess club into the talk of the town.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between px-6 pb-4 text-xs text-[#71717A]">
            <span>2026 essentials.</span>
            <a href="/app" className="hover:text-[#5E6AD2] transition-all duration-200">
              ↗ narrativelens.app
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#27272A] py-10 px-8 animate-fade-in">
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