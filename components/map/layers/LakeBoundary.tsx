"use client";

import { GeoJSON } from "react-leaflet";
import { useEffect, useState } from "react";
import type { GeoJsonObject } from "geojson";

export default function LakeBoundary() {
  const [data, setData] = useState<GeoJsonObject | null>(null);

  useEffect(() => {
    fetch("/data/boundaries/lake-baringo.geojson")
      .then((res) => res.json())
      .then((geojson: GeoJsonObject) => setData(geojson))
      .catch(console.error);
  }, []);

  if (!data) return null;

  return (
    <GeoJSON
      data={data}
      style={{
        color: "#2563eb",
        weight: 3,
        fillColor: "#60a5fa",
        fillOpacity: 0.25,
      }}
    />
  );
}