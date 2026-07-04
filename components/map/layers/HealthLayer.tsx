"use client";

import { CircleMarker, Popup } from "react-leaflet";

import { useMap } from "@/lib/map-context";
import { HEALTH_FACILITIES } from "@/config/layers";

export default function HealthLayer() {
  const { layers } = useMap();

  if (!layers.health) return null;

  return (
    <>
      {HEALTH_FACILITIES.map((f) => (
        <CircleMarker
          key={f.id}
          center={f.position}
          radius={7}
          pathOptions={{
            color: "#ffffff",
            weight: 2,
            fillColor: "#dc2626",
            fillOpacity: 1,
          }}
        >
          <Popup>
            <strong>{f.name}</strong>
            <br />
            {f.category}
          </Popup>
        </CircleMarker>
      ))}
    </>
  );
}
