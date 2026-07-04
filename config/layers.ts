import type { LayerId } from "@/lib/map-context";

export interface PointFeature {
  id: string;
  name: string;
  category: string;
  position: [number, number];
}

export interface RoadFeature {
  id: string;
  name: string;
  path: [number, number][];
}

/**
 * Layer metadata used by the sidebar and legend so the two
 * stay in sync from a single source of truth.
 */
export interface LayerMeta {
  id: LayerId;
  label: string;
  color: string;
  shape: "line" | "dot" | "square";
}

export const LAYER_META: LayerMeta[] = [
  { id: "lakeBoundary", label: "Lake Boundary", color: "#2563eb", shape: "square" },
  { id: "roads", label: "Roads", color: "#f59e0b", shape: "line" },
  { id: "health", label: "Health Facilities", color: "#dc2626", shape: "dot" },
  { id: "schools", label: "Schools", color: "#7c3aed", shape: "dot" },
  { id: "flood", label: "Flood Extent", color: "#0891b2", shape: "square" },
];

/**
 * Illustrative sample data around Lake Baringo. Coordinates are
 * approximate and intended for demonstrating the interface.
 */
export const HEALTH_FACILITIES: PointFeature[] = [
  { id: "h1", name: "Marigat Sub-County Hospital", category: "Hospital", position: [0.4713, 35.9822] },
  { id: "h2", name: "Kampi ya Samaki Dispensary", category: "Dispensary", position: [0.6118, 36.0158] },
  { id: "h3", name: "Loruk Health Centre", category: "Health Centre", position: [0.7562, 36.0361] },
  { id: "h4", name: "Ng'ambo Dispensary", category: "Dispensary", position: [0.5401, 36.0089] },
];

export const SCHOOLS: PointFeature[] = [
  { id: "s1", name: "Kampi ya Samaki Primary", category: "Primary", position: [0.6089, 36.0201] },
  { id: "s2", name: "Salabani Secondary", category: "Secondary", position: [0.5231, 36.0421] },
  { id: "s3", name: "Loruk Primary", category: "Primary", position: [0.7498, 36.0402] },
  { id: "s4", name: "Marigat Boys High", category: "Secondary", position: [0.4689, 35.9901] },
];

export const ROADS: RoadFeature[] = [
  {
    id: "r1",
    name: "B4 Marigat - Loruk Road",
    path: [
      [0.4681, 35.9822],
      [0.5401, 35.9989],
      [0.6118, 36.0158],
      [0.6902, 36.0281],
      [0.7562, 36.0361],
    ],
  },
  {
    id: "r2",
    name: "Kampi ya Samaki Access",
    path: [
      [0.6118, 36.0158],
      [0.6205, 36.0312],
      [0.6288, 36.0489],
    ],
  },
];

/**
 * A simplified flooded-extent polygon (a buffer beyond the
 * normal lake outline) for the flood layer demo.
 */
export const FLOOD_EXTENT: [number, number][] = [
  [0.732, 36.006],
  [0.719, 36.052],
  [0.69, 36.086],
  [0.651, 36.104],
  [0.607, 36.101],
  [0.566, 36.083],
  [0.54, 36.05],
  [0.556, 36.013],
  [0.586, 35.99],
  [0.63, 35.982],
  [0.68, 35.986],
  [0.716, 35.996],
  [0.732, 36.006],
];
