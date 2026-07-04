"use client";

import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer } from "react-leaflet";
import { mapConfig } from "@/config/map";

export default function LeafletMap() {
  return (
    <MapContainer
      center={mapConfig.center}
      zoom={mapConfig.zoom}
      scrollWheelZoom={true}
      className="h-full w-full"
    >
      <TileLayer
        attribution="© OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}