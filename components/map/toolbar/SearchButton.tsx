"use client";

import { useMemo, useRef, useState } from "react";
import { Search } from "lucide-react";

import { useMap } from "@/lib/map-context";
import {
  HEALTH_FACILITIES,
  SCHOOLS,
  type PointFeature,
} from "@/config/layers";

interface Result extends PointFeature {
  group: string;
}

const PLACES: Result[] = [
  { id: "p1", name: "Kampi ya Samaki", category: "Town", group: "Place", position: [0.6118, 36.0158] },
  { id: "p2", name: "Marigat", category: "Town", group: "Place", position: [0.4681, 35.9822] },
  { id: "p3", name: "Loruk", category: "Town", group: "Place", position: [0.7562, 36.0361] },
  { id: "p4", name: "Lake Baringo", category: "Lake", group: "Place", position: [0.633, 36.05] },
];

const INDEX: Result[] = [
  ...PLACES,
  ...HEALTH_FACILITIES.map((f) => ({ ...f, group: "Health" })),
  ...SCHOOLS.map((f) => ({ ...f, group: "School" })),
];

export default function SearchButton() {
  const { requestFlyTo } = useMap();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return INDEX.filter((r) => r.name.toLowerCase().includes(q)).slice(0, 6);
  }, [query]);

  function handleSelect(r: Result) {
    requestFlyTo(r.position[0], r.position[1], 14);
    setQuery(r.name);
    setOpen(false);
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => {
          setOpen((o) => !o);
          setTimeout(() => inputRef.current?.focus(), 0);
        }}
        className="flex items-center gap-2 rounded-md border bg-white px-3 py-2 text-sm font-medium hover:bg-gray-50"
        aria-expanded={open}
      >
        <Search className="h-4 w-4" />
        <span className="hidden sm:inline">Search</span>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-[1100] mt-2 w-72 rounded-lg border bg-white p-2 shadow-xl">
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search places, schools, clinics..."
            className="w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />

          {query.trim() !== "" && (
            <ul className="mt-2 max-h-60 overflow-y-auto">
              {results.length === 0 ? (
                <li className="px-3 py-2 text-sm text-gray-500">
                  No matches found
                </li>
              ) : (
                results.map((r) => (
                  <li key={`${r.group}-${r.id}`}>
                    <button
                      type="button"
                      onClick={() => handleSelect(r)}
                      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm hover:bg-gray-100"
                    >
                      <span>{r.name}</span>
                      <span className="text-xs text-gray-400">{r.group}</span>
                    </button>
                  </li>
                ))
              )}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
