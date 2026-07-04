"use client";

import { Download } from "lucide-react";

import { useMap } from "@/lib/map-context";
import {
  HEALTH_FACILITIES,
  SCHOOLS,
  ROADS,
  FLOOD_EXTENT,
} from "@/config/layers";

export default function ExportButton() {
  const { layers } = useMap();

  function handleExport() {
    const features: GeoJSON.Feature[] = [];

    if (layers.health) {
      HEALTH_FACILITIES.forEach((f) =>
        features.push({
          type: "Feature",
          properties: { name: f.name, category: f.category, layer: "health" },
          geometry: {
            type: "Point",
            coordinates: [f.position[1], f.position[0]],
          },
        })
      );
    }

    if (layers.schools) {
      SCHOOLS.forEach((f) =>
        features.push({
          type: "Feature",
          properties: { name: f.name, category: f.category, layer: "schools" },
          geometry: {
            type: "Point",
            coordinates: [f.position[1], f.position[0]],
          },
        })
      );
    }

    if (layers.roads) {
      ROADS.forEach((r) =>
        features.push({
          type: "Feature",
          properties: { name: r.name, layer: "roads" },
          geometry: {
            type: "LineString",
            coordinates: r.path.map(([lat, lng]) => [lng, lat]),
          },
        })
      );
    }

    if (layers.flood) {
      features.push({
        type: "Feature",
        properties: { name: "Flood Extent", layer: "flood" },
        geometry: {
          type: "Polygon",
          coordinates: [FLOOD_EXTENT.map(([lat, lng]) => [lng, lat])],
        },
      });
    }

    const collection: GeoJSON.FeatureCollection = {
      type: "FeatureCollection",
      features,
    };

    const blob = new Blob([JSON.stringify(collection, null, 2)], {
      type: "application/geo+json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "lake-baringo-export.geojson";
    a.click();
    URL.revokeObjectURL(url);
  }

  const hasData =
    layers.health || layers.schools || layers.roads || layers.flood;

  return (
    <button
      type="button"
      onClick={handleExport}
      disabled={!hasData}
      title={
        hasData
          ? "Export visible layers as GeoJSON"
          : "Enable a data layer to export"
      }
      className="flex items-center gap-2 rounded-md border bg-white px-3 py-2 text-sm font-medium hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
    >
      <Download className="h-4 w-4" />
      <span className="hidden sm:inline">Export</span>
    </button>
  );
}
