"use client";

import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer } from "react-leaflet";

import { mapConfig } from "@/config/map";
import { useMap } from "@/lib/map-context";
import { basemaps } from "./basemaps/basemaps";

import LakeMarker from "./LakeMarker";
import LakeBoundary from "./layers/LakeBoundary";

export default function LeafletMap() {
  const { basemap } = useMap();

  const currentBasemap = basemaps[basemap];

  return (
    <MapContainer
      center={mapConfig.center}
      zoom={mapConfig.zoom}
      minZoom={mapConfig.minZoom}
      maxZoom={mapConfig.maxZoom}
      scrollWheelZoom={true}
      className="h-full w-full"
    >
      {/* Basemap */}
      <TileLayer
        url={currentBasemap.url}
        attribution={currentBasemap.attribution}
      />

      {/* Study Area Marker */}
      <LakeMarker />

      {/* Lake Boundary */}
      <LakeBoundary />

      {/* Future GIS Layers */}

      {/* Roads */}
      {/* Schools */}
      {/* Health Facilities */}
      {/* Flood Extent */}
      {/* Satellite Imagery */}
      {/* Drone Orthomosaic */}
      {/* Administrative Boundaries */}

    </MapContainer>
  );
}