"use client";

import { Polyline, Popup } from "react-leaflet";

import { useMap } from "@/lib/map-context";
import { ROADS } from "@/config/layers";

export default function RoadsLayer() {
  const { layers } = useMap();

  if (!layers.roads) return null;

  return (
    <>
      {ROADS.map((road) => (
        <Polyline
          key={road.id}
          positions={road.path}
          pathOptions={{ color: "#f59e0b", weight: 4 }}
        >
          <Popup>
            <strong>{road.name}</strong>
          </Popup>
        </Polyline>
      ))}
    </>
  );
}
