"use client";

import { Sparkles } from "lucide-react";

export default function AIButton() {
  function handleClick() {
    const input = document.getElementById(
      "ai-assistant-input"
    ) as HTMLInputElement | null;
    input?.focus();
    input?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
    >
      <Sparkles className="h-4 w-4" />
      <span className="hidden sm:inline">AI Assistant</span>
    </button>
  );
}
