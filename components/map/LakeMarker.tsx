"use client";

import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

const icon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function LakeMarker() {
  return (
    <Marker
      position={[0.633, 36.05]}
      icon={icon}
    >
      <Popup>
        <strong>Lake Baringo</strong>
        <br />
        Digital Twin Study Area
      </Popup>
    </Marker>
  );
}