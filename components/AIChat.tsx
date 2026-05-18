"use client";

import { useState } from "react";

export default function AIChat() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    const trimmed = message.trim();
    if (!trimmed || loading) return;

    setLoading(true);
    setError("");
    setReply("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(data.message || "Failed to get a response. Please try again.");
        return;
      }

      setReply(data.response);
      setMessage("");
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-5 right-5 w-[min(100vw-2.5rem,20rem)] bg-zinc-900/95 border border-cyan-500/40 rounded-2xl p-4 shadow-2xl z-50 backdrop-blur-md">
      <h2 className="text-white font-bold text-lg mb-1">AI Assistant</h2>
      <p className="text-xs text-muted mb-3">Ask about Aamir&apos;s skills & work</p>

      <input
        type="text"
        placeholder="Ask me anything..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={onKeyDown}
        disabled={loading}
        className="w-full p-3 mb-3 rounded-xl bg-zinc-800 text-white text-sm outline-none border border-white/10 focus:border-cyan-400/50 disabled:opacity-60"
      />

      <button
        type="button"
        onClick={sendMessage}
        disabled={loading || !message.trim()}
        className="w-full bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed text-black font-semibold py-2 rounded-xl transition"
      >
        {loading ? "Thinking..." : "Ask AI"}
      </button>

      {error && (
        <p className="mt-3 text-sm text-red-400 leading-relaxed">{error}</p>
      )}

      {reply && (
        <div className="mt-4 text-sm text-gray-300 leading-relaxed max-h-48 overflow-y-auto">
          {reply}
        </div>
      )}
    </div>
  );
}
