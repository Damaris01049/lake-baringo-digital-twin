"use client";

import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer } from "react-leaflet";

import { mapConfig } from "@/config/map";
import { useMap } from "@/lib/map-context";
import { basemaps } from "./basemaps/basemaps";

import MapController from "./MapController";
import MeasureTool from "./MeasureTool";
import LakeMarker from "./LakeMarker";
import LakeBoundary from "./layers/LakeBoundary";
import RoadsLayer from "./layers/RoadsLayer";
import HealthLayer from "./layers/HealthLayer";
import SchoolsLayer from "./layers/SchoolsLayer";
import FloodLayer from "./layers/FloodLayer";

export default function LeafletMap() {
  const { basemap, measuring } = useMap();

  const currentBasemap = basemaps[basemap];

  return (
    <MapContainer
      center={mapConfig.center}
      zoom={mapConfig.zoom}
      minZoom={mapConfig.minZoom}
      maxZoom={mapConfig.maxZoom}
      scrollWheelZoom={true}
      className={`h-full w-full ${measuring ? "cursor-crosshair" : ""}`}
    >
      {/* Basemap */}
      <TileLayer
        url={currentBasemap.url}
        attribution={currentBasemap.attribution}
      />

      {/* Event + navigation bridge */}
      <MapController />

      {/* Study Area Marker */}
      <LakeMarker />

      {/* GIS Layers */}
      <LakeBoundary />
      <RoadsLayer />
      <HealthLayer />
      <SchoolsLayer />
      <FloodLayer />

      {/* Measurement overlay */}
      <MeasureTool />
    </MapContainer>
  );
}
