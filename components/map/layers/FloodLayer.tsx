"use client";

import { Polygon, Popup } from "react-leaflet";

import { useMap } from "@/lib/map-context";
import { FLOOD_EXTENT } from "@/config/layers";

export default function FloodLayer() {
  const { layers } = useMap();

  if (!layers.flood) return null;

  return (
    <Polygon
      positions={FLOOD_EXTENT}
      pathOptions={{
        color: "#0891b2",
        weight: 2,
        dashArray: "6 4",
        fillColor: "#22d3ee",
        fillOpacity: 0.2,
      }}
    >
      <Popup>
        <strong>Modeled Flood Extent</strong>
        <br />
        Illustrative inundation area
      </Popup>
    </Polygon>
  );
}
