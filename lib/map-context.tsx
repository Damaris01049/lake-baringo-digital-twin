"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

/**
 * Supported basemaps
 */
export type Basemap =
  | "osm"
  | "satellite"
  | "terrain"
  | "dark";

/**
 * Shared GIS application state
 */
interface MapContextType {
  // Basemap
  basemap: Basemap;
  setBasemap: (value: Basemap) => void;

  // Currently active layer
  activeLayer: string | null;
  setActiveLayer: (value: string | null) => void;

  // Timeline
  timelineYear: number;
  setTimelineYear: (value: number) => void;
}

const MapContext = createContext<MapContextType | null>(null);

export function MapProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  /**
   * Current basemap
   */
  const [basemap, setBasemap] =
    useState<Basemap>("osm");

  /**
   * Selected layer
   */
  const [activeLayer, setActiveLayer] =
    useState<string | null>(null);

  /**
   * Timeline year
   */
  const [timelineYear, setTimelineYear] =
    useState(2025);

  const value = useMemo(
    () => ({
      basemap,
      setBasemap,

      activeLayer,
      setActiveLayer,

      timelineYear,
      setTimelineYear,
    }),
    [
      basemap,
      activeLayer,
      timelineYear,
    ]
  );

  return (
    <MapContext.Provider value={value}>
      {children}
    </MapContext.Provider>
  );
}

export function useMap() {
  const context = useContext(MapContext);

  if (!context) {
    throw new Error(
      "useMap must be used within a MapProvider"
    );
  }

  return context;
}