"use client";

import { useEffect } from "react";
import { useMap as useLeafletMap, useMapEvents } from "react-leaflet";

import { useMap } from "@/lib/map-context";

/**
 * Bridges Leaflet map events into the shared MapContext:
 * - reports the live cursor position
 * - reacts to fly-to requests (search / navigation)
 */
export default function MapController() {
  const leaflet = useLeafletMap();
  const { setCoords, flyTo } = useMap();

  useMapEvents({
    mousemove(e) {
      setCoords({ lat: e.latlng.lat, lng: e.latlng.lng });
    },
    mouseout() {
      setCoords(null);
    },
  });

  useEffect(() => {
    if (!flyTo) return;
    leaflet.flyTo([flyTo.lat, flyTo.lng], flyTo.zoom ?? leaflet.getZoom(), {
      duration: 1,
    });
  }, [flyTo, leaflet]);

  return null;
}
