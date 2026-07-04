"use client";

import { useEffect, useState } from "react";
import { CircleMarker, Polyline, Tooltip, useMapEvents } from "react-leaflet";
import L from "leaflet";

import { useMap } from "@/lib/map-context";

/**
 * Interactive distance measurement. When measuring is active,
 * each map click adds a vertex; the running total distance is
 * shown at the last point.
 */
export default function MeasureTool() {
  const { measuring } = useMap();
  const [points, setPoints] = useState<[number, number][]>([]);

  useMapEvents({
    click(e) {
      if (!measuring) return;
      setPoints((prev) => [...prev, [e.latlng.lat, e.latlng.lng]]);
    },
  });

  // Clear the measurement whenever the tool is turned off.
  useEffect(() => {
    if (!measuring) setPoints([]);
  }, [measuring]);

  if (!measuring || points.length === 0) return null;

  let total = 0;
  for (let i = 1; i < points.length; i++) {
    total += L.latLng(points[i - 1]).distanceTo(L.latLng(points[i]));
  }

  const label =
    total >= 1000
      ? `${(total / 1000).toFixed(2)} km`
      : `${total.toFixed(0)} m`;

  const last = points[points.length - 1];

  return (
    <>
      {points.length > 1 && (
        <Polyline
          positions={points}
          pathOptions={{ color: "#111827", weight: 3, dashArray: "6 6" }}
        />
      )}

      {points.map((p, i) => (
        <CircleMarker
          key={i}
          center={p}
          radius={5}
          pathOptions={{
            color: "#111827",
            weight: 2,
            fillColor: "#ffffff",
            fillOpacity: 1,
          }}
        />
      ))}

      <CircleMarker center={last} radius={0} opacity={0}>
        <Tooltip permanent direction="top" offset={[0, -6]}>
          {points.length > 1 ? label : "Click to add points"}
        </Tooltip>
      </CircleMarker>
    </>
  );
}
