"use client";

import { useState } from "react";

export default function AppPage() {
  const [input, setInput] = useState("");
  const [style, setStyle] = useState("teen");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setOutput("");

    // Simulate thinking time
    await new Promise((resolve) => setTimeout(resolve, 1400));

    const shortInput = input.length > 300 ? input.slice(0, 300) + "..." : input;

    const responses: Record<string, string> = {
      teen: `Teen-Friendly Version:\n\n${shortInput}\n\nIn simple words: This news is about something important that is happening right now. The main idea is that people are dealing with a big situation, and it can affect many of us. Understanding what is really going on helps us think clearly instead of just reacting to headlines.`,

      neutral: `Neutral Version:\n\n${shortInput}\n\nKey points:\n• The article reports on a current event\n• Multiple sides or factors are involved\n• The outcome is still developing\n\nThis version focuses on facts and avoids strong emotional language.`,

      story: `Story Style:\n\nNot long ago, something important began to unfold...\n\n${shortInput}\n\nThis moment shows how real events can shape the lives of ordinary people. Behind the headlines are choices, challenges, and consequences that continue to develop.`,
    };

    setOutput(responses[style] || responses.teen);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#08090A] text-[#F4F4F5]">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-[#27272A]">
        <a href="/" className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-[#5E6AD2]" />
          <span className="font-medium">Narrative Lens</span>
        </a>
        <span className="text-sm text-[#71717A]">MVP</span>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-semibold mb-2">Create a Narrative</h1>
        <p className="text-[#A1A1AA] mb-8 text-sm">
          Paste any news text and transform it into a clearer story.
        </p>

        {/* Input Area */}
        <div className="space-y-4 mb-8">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste news article text here..."
            className="w-full h-40 bg-[#111113] border border-[#27272A] rounded-xl p-4 text-sm resize-none focus:outline-none focus:border-[#5E6AD2] placeholder:text-[#71717A]"
          />

          {/* Style Selector */}
          <div className="flex gap-3">
            {[
              { id: "teen", label: "Teen Friendly" },
              { id: "neutral", label: "Neutral" },
              { id: "story", label: "Story Style" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setStyle(item.id)}
                className={`px-4 py-2 rounded-lg text-sm transition ${
                  style === item.id
                    ? "bg-[#5E6AD2] text-white"
                    : "bg-[#18181B] text-[#A1A1AA] hover:bg-[#27272A]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading || !input.trim()}
            className="px-6 py-3 bg-[#5E6AD2] hover:bg-[#7170FF] disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-medium transition"
          >
            {loading ? "Generating..." : "Generate Narrative"}
          </button>
        </div>

        {/* Output Area */}
        {(output || loading) && (
          <div className="border border-[#27272A] rounded-xl bg-[#111113] p-6">
            <h2 className="text-sm font-medium text-[#A1A1AA] mb-3">
              Generated Narrative
            </h2>
            {loading ? (
              <p className="text-[#71717A] text-sm">Thinking...</p>
            ) : (
              <div className="whitespace-pre-wrap text-[15px] leading-relaxed">
                {output}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}