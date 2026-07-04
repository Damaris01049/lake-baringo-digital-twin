"use client";

import { CircleMarker, Popup } from "react-leaflet";

import { useMap } from "@/lib/map-context";
import { SCHOOLS } from "@/config/layers";

export default function SchoolsLayer() {
  const { layers } = useMap();

  if (!layers.schools) return null;

  return (
    <>
      {SCHOOLS.map((f) => (
        <CircleMarker
          key={f.id}
          center={f.position}
          radius={7}
          pathOptions={{
            color: "#ffffff",
            weight: 2,
            fillColor: "#7c3aed",
            fillOpacity: 1,
          }}
        >
          <Popup>
            <strong>{f.name}</strong>
            <br />
            {f.category} School
          </Popup>
        </CircleMarker>
      ))}
    </>
  );
}
