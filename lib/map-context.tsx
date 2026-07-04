"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

/**
 * Supported basemaps
 */
export type Basemap = "osm" | "satellite" | "terrain" | "dark";

/**
 * Toggleable GIS layers
 */
export type LayerId =
  | "lakeBoundary"
  | "roads"
  | "health"
  | "schools"
  | "flood";

export type LayerVisibility = Record<LayerId, boolean>;

/**
 * A location the map should animate to.
 * `nonce` guarantees repeated fly-to requests to the same
 * coordinate still trigger an update.
 */
export interface FlyToTarget {
  lat: number;
  lng: number;
  zoom?: number;
  nonce: number;
}

/**
 * Live cursor position over the map (lat/lng in degrees).
 */
export interface Coords {
  lat: number;
  lng: number;
}

/**
 * Shared GIS application state
 */
interface MapContextType {
  // Basemap
  basemap: Basemap;
  setBasemap: (value: Basemap) => void;

  // Layer visibility
  layers: LayerVisibility;
  toggleLayer: (id: LayerId) => void;
  setLayer: (id: LayerId, value: boolean) => void;

  // Live cursor coordinates
  coords: Coords | null;
  setCoords: (value: Coords | null) => void;

  // Fly-to (search / navigation)
  flyTo: FlyToTarget | null;
  requestFlyTo: (lat: number, lng: number, zoom?: number) => void;

  // Measure tool
  measuring: boolean;
  toggleMeasuring: () => void;

  // Timeline
  timelineYear: number;
  setTimelineYear: (value: number) => void;
  showTimeline: boolean;
  toggleTimeline: () => void;
}

const DEFAULT_LAYERS: LayerVisibility = {
  lakeBoundary: true,
  roads: false,
  health: false,
  schools: false,
  flood: false,
};

const MapContext = createContext<MapContextType | null>(null);

export function MapProvider({ children }: { children: React.ReactNode }) {
  const [basemap, setBasemap] = useState<Basemap>("osm");

  const [layers, setLayers] = useState<LayerVisibility>(DEFAULT_LAYERS);

  const [coords, setCoords] = useState<Coords | null>(null);

  const [flyTo, setFlyTo] = useState<FlyToTarget | null>(null);

  const [measuring, setMeasuring] = useState(false);

  const [timelineYear, setTimelineYear] = useState(2025);

  const [showTimeline, setShowTimeline] = useState(true);

  const toggleLayer = useCallback((id: LayerId) => {
    setLayers((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const setLayer = useCallback((id: LayerId, value: boolean) => {
    setLayers((prev) => ({ ...prev, [id]: value }));
  }, []);

  const requestFlyTo = useCallback(
    (lat: number, lng: number, zoom?: number) => {
      setFlyTo({ lat, lng, zoom, nonce: Date.now() });
    },
    []
  );

  const toggleMeasuring = useCallback(() => {
    setMeasuring((prev) => !prev);
  }, []);

  const toggleTimeline = useCallback(() => {
    setShowTimeline((prev) => !prev);
  }, []);

  const value = useMemo(
    () => ({
      basemap,
      setBasemap,

      layers,
      toggleLayer,
      setLayer,

      coords,
      setCoords,

      flyTo,
      requestFlyTo,

      measuring,
      toggleMeasuring,

      timelineYear,
      setTimelineYear,
      showTimeline,
      toggleTimeline,
    }),
    [
      basemap,
      layers,
      toggleLayer,
      setLayer,
      coords,
      flyTo,
      requestFlyTo,
      measuring,
      toggleMeasuring,
      timelineYear,
      showTimeline,
      toggleTimeline,
    ]
  );

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
}

export function useMap() {
  const context = useContext(MapContext);

  if (!context) {
    throw new Error("useMap must be used within a MapProvider");
  }

  return context;
}
