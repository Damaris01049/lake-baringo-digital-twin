"use client";

import { GeoJSON } from "react-leaflet";
import { useEffect, useState } from "react";
import type { GeoJsonObject } from "geojson";

import { useMap } from "@/lib/map-context";

export default function LakeBoundary() {
  const { layers } = useMap();
  const [data, setData] = useState<GeoJsonObject | null>(null);

  useEffect(() => {
    fetch("/data/boundaries/lake-baringo.geojson")
      .then((res) => res.json())
      .then((geojson: GeoJsonObject) => setData(geojson))
      .catch(console.error);
  }, []);

  if (!layers.lakeBoundary || !data) return null;

  return (
    <GeoJSON
      key="lake-boundary"
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
