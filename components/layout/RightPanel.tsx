"use client";

import { useState } from "react";
import { Send } from "lucide-react";

import { useMap } from "@/lib/map-context";

interface Message {
  role: "user" | "assistant";
  text: string;
}

const SUGGESTIONS = [
  "Show flood extent",
  "Where are the schools?",
  "Nearest health facility",
];

export default function RightPanel() {
  const { setLayer, requestFlyTo } = useMap();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  function respond(question: string) {
    const q = question.toLowerCase();

    if (q.includes("flood")) {
      setLayer("flood", true);
      return "I've enabled the modeled flood extent layer on the map.";
    }
    if (q.includes("school")) {
      setLayer("schools", true);
      return "Schools are now shown in purple. There are 4 sample schools around the lake.";
    }
    if (q.includes("health") || q.includes("clinic") || q.includes("hospital")) {
      setLayer("health", true);
      requestFlyTo(0.4713, 35.9822, 13);
      return "Health facilities are shown in red. Marigat Sub-County Hospital is the largest nearby.";
    }
    if (q.includes("road")) {
      setLayer("roads", true);
      return "Road network is now displayed in amber.";
    }
    if (q.includes("baringo") || q.includes("lake")) {
      requestFlyTo(0.633, 36.05, 12);
      return "Lake Baringo is a freshwater lake in the Kenyan Rift Valley. I've centered the map on it.";
    }
    return "I can toggle layers and navigate the map. Try asking about floods, schools, health facilities, or roads.";
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const question = input.trim();
    if (!question) return;

    const reply = respond(question);
    setMessages((prev) => [
      ...prev,
      { role: "user", text: question },
      { role: "assistant", text: reply },
    ]);
    setInput("");
  }

  return (
    <div className="flex h-full flex-col p-4">
      <h2 className="mb-1 text-lg font-semibold">AI Assistant</h2>
      <p className="mb-4 text-sm text-gray-500">
        Ask about layers and locations
      </p>

      <div className="mb-3 flex-1 space-y-3 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="rounded-lg border bg-white p-4 text-sm text-gray-600">
            Ask a question about Lake Baringo, or try a suggestion below.
          </div>
        ) : (
          messages.map((m, i) => (
            <div
              key={i}
              className={`max-w-[90%] rounded-lg px-3 py-2 text-sm ${
                m.role === "user"
                  ? "ml-auto bg-blue-600 text-white"
                  : "bg-white text-gray-800 shadow-sm"
              }`}
            >
              {m.text}
            </div>
          ))
        )}
      </div>

      <div className="mb-2 flex flex-wrap gap-2">
        {SUGGESTIONS.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => {
              const reply = respond(s);
              setMessages((prev) => [
                ...prev,
                { role: "user", text: s },
                { role: "assistant", text: reply },
              ]);
            }}
            className="rounded-full border bg-white px-3 py-1 text-xs hover:bg-gray-100"
          >
            {s}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          id="ai-assistant-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
          className="flex-1 rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="flex items-center justify-center rounded-md bg-blue-600 p-2 text-white hover:bg-blue-700"
          aria-label="Send message"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
