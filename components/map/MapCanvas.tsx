"use client";

import dynamic from "next/dynamic";

const LeafletMap = dynamic(
  () => import("./LeafletMap"),
  { ssr: false }
);

export default function MapCanvas() {
  return (
    <div className="absolute inset-0">
      <LeafletMap />
    </div>
  );
}