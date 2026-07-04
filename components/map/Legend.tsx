"use client";

import { useMap } from "@/lib/map-context";
import { LAYER_META } from "@/config/layers";

export default function Legend() {
  const { layers } = useMap();

  const visible = LAYER_META.filter((l) => layers[l.id]);

  return (
    <div className="w-48 rounded-lg bg-white/95 p-4 shadow-lg backdrop-blur">
      <h3 className="mb-2 text-sm font-semibold">Legend</h3>

      {visible.length === 0 ? (
        <p className="text-xs text-gray-500">No layers enabled</p>
      ) : (
        <div className="space-y-2 text-sm">
          {visible.map((layer) => (
            <div key={layer.id} className="flex items-center gap-2">
              <span
                className="inline-block shrink-0"
                style={{
                  backgroundColor: layer.color,
                  width: layer.shape === "line" ? "1rem" : "0.75rem",
                  height: layer.shape === "line" ? "0.2rem" : "0.75rem",
                  borderRadius: layer.shape === "dot" ? "9999px" : "0.125rem",
                }}
                aria-hidden="true"
              />
              <span className="text-xs">{layer.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
