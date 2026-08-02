"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

const styles = [
  { id: "teen", label: "Teen-Friendly" },
  { id: "neutral", label: "Neutral" },
  { id: "story", label: "Story" },
  { id: "comic", label: "Comic Script" },
];

const MAX_CHARS = 4000;

export default function AppPage() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [style, setStyle] = useState("teen");
  const [mode, setMode] = useState<"single" | "compare">("single");
  const [output, setOutput] = useState("");
  const [versions, setVersions] = useState<{ teen: string; neutral: string; story: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    teen: true,
    neutral: false,
    story: false,
  });

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea to fit pasted content, capped at 320px
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "120px";
    const newHeight = Math.min(el.scrollHeight, 320);
    el.style.height = `${newHeight}px`;
  }, [input]);

  const handleGenerate = async () => {
    setLoading(true);
    setOutput("");
    setVersions(null);
    setError("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          mode === "compare" ? { text: input, mode: "compare" } : { text: input, style }
        ),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
      } else if (mode === "compare" && data.versions) {
        setVersions(data.versions);
        setExpanded({ teen: true, neutral: false, story: false });
      } else if (data.narrative) {
        setOutput(data.narrative);
      } else {
        setError("Failed to generate narrative. Please try again.");
      }
    } catch (err) {
      setError("Network error — check your connection and try again.");
    }

    setLoading(false);
  };

  const handleCopy = async (text: string, key: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1500);
  };

  const charCount = input.length;
  const overLimit = charCount > MAX_CHARS;

  return (
    <div className="min-h-screen bg-[#08090A] text-[#F4F4F5] animate-fade-in relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#5E6AD2]/10 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#5E6AD2]/10 rounded-full blur-[128px] animate-pulse [animation-delay:700ms]" />
      </div>

      {/* Navbar */}
      <nav className="relative flex items-center gap-4 px-6 py-4 border-b border-[#27272A]">
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-1 text-sm text-[#A1A1AA] hover:text-[#F4F4F5] transition-all duration-200"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <a href="/" className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke="#5E6AD2" strokeWidth="2" />
            <circle cx="12" cy="12" r="3.5" fill="#5E6AD2" />
            <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="#5E6AD2" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="font-medium">Narrative Lens</span>
        </a>
      </nav>

      <div className="relative max-w-3xl mx-auto px-6 py-10">
        {/* Mode Toggle */}
        <div className="flex flex-col sm:flex-row gap-2 mb-6">
          <button
            onClick={() => setMode("single")}
            className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
              mode === "single"
                ? "bg-[#5E6AD2] text-white"
                : "bg-[#18181B] text-[#A1A1AA] hover:bg-[#27272A]"
            }`}
          >
            Single Style
          </button>
          <button
            onClick={() => setMode("compare")}
            className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
              mode === "compare"
                ? "bg-[#5E6AD2] text-white"
                : "bg-[#18181B] text-[#A1A1AA] hover:bg-[#27272A]"
            }`}
          >
            Compare Perspectives
          </button>
        </div>

        {/* Textarea — auto-resizing, glowing focus ring */}
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste news article text here..."
          className={`w-full min-h-[120px] max-h-[320px] bg-[#111113]/80 backdrop-blur-sm border rounded-xl p-4 text-sm resize-none overflow-y-auto focus:outline-none transition-all duration-200 placeholder:text-[#71717A] ${
            overLimit
              ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
              : "border-[#27272A] focus:border-[#5E6AD2] focus:ring-2 focus:ring-[#5E6AD2]/20"
          }`}
        />
        <div className={`text-xs mt-1 text-right ${overLimit ? "text-red-400" : "text-[#71717A]"}`}>
          {charCount} / {MAX_CHARS}
        </div>

        {/* Style Selector — only in single mode */}
        {mode === "single" && (
          <div className="flex flex-wrap gap-2 mt-4 mb-6">
            {styles.map((item) => (
              <button
                key={item.id}
                onClick={() => setStyle(item.id)}
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                  style === item.id
                    ? "bg-[#5E6AD2] text-white"
                    : "bg-[#18181B] text-[#A1A1AA] hover:bg-[#27272A]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}

        {mode === "compare" && (
          <p className="text-sm text-[#A1A1AA] mt-4 mb-6">
            Generates Teen-Friendly, Neutral, and Story versions side by side.
          </p>
        )}

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          disabled={loading || !input.trim() || overLimit}
          className="w-full sm:w-auto px-6 py-3 bg-[#5E6AD2] hover:bg-[#7170FF] disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          {loading ? "Generating..." : "Generate Narrative"}
        </button>

        {/* Error */}
        {error && (
          <div className="mt-6 border border-red-500/40 bg-red-500/10 text-red-300 rounded-xl p-4 text-sm animate-fade-in">
            {error}
          </div>
        )}

        {/* Loading skeleton */}
        {loading && (
          <div className="mt-6 space-y-3 animate-fade-in">
            <div className="h-4 bg-[#18181B] rounded w-3/4 animate-pulse" />
            <div className="h-4 bg-[#18181B] rounded w-full animate-pulse" />
            <div className="h-4 bg-[#18181B] rounded w-5/6 animate-pulse" />
          </div>
        )}

        {/* Single Output */}
        {!loading && output && (
          <div className="mt-6 border border-[#27272A] rounded-xl bg-[#111113] p-6 animate-scale-in">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-medium text-[#A1A1AA]">Generated Narrative</h2>
              <button
                onClick={() => handleCopy(output, "single")}
                className="text-xs px-3 py-1 rounded-md bg-[#18181B] hover:bg-[#27272A] transition-all duration-200"
              >
                {copiedKey === "single" ? "Copied!" : "Copy"}
              </button>
            </div>
            <p className="whitespace-pre-wrap text-sm leading-relaxed text-[#D4D4D8]">{output}</p>
          </div>
        )}

        {/* Compare Output — collapsible rows */}
        {!loading && versions && (
          <div className="mt-6 flex flex-col gap-3 animate-scale-in">
            {(["teen", "neutral", "story"] as const).map((key) => {
              const isOpen = expanded[key];
              const text = versions[key];
              const preview = text.split("\n").find((l) => l.trim().length > 0) || "";

              return (
                <div
                  key={key}
                  className="border border-[#27272A] rounded-xl bg-[#111113] overflow-hidden transition-all duration-200 hover:border-[#3F3F46]"
                >
                  <button
                    onClick={() => setExpanded((prev) => ({ ...prev, [key]: !prev[key] }))}
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <svg
                        className={`w-4 h-4 text-[#71717A] flex-shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-90" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="text-sm font-medium capitalize flex-shrink-0">{key}</span>
                      {!isOpen && (
                        <span className="text-sm text-[#71717A] truncate">— {preview}</span>
                      )}
                    </div>
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopy(text, key);
                      }}
                      className="text-xs px-3 py-1 rounded-md bg-[#18181B] hover:bg-[#27272A] transition-all duration-200 flex-shrink-0 ml-3"
                    >
                      {copiedKey === key ? "Copied!" : "Copy"}
                    </span>
                  </button>

                  <div
                    className="grid transition-all duration-300 ease-in-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 whitespace-pre-wrap text-sm leading-relaxed text-[#D4D4D8] border-t border-[#27272A] pt-4">
                        {text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
