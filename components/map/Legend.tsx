"use client";

export default function Legend() {
  return (
    <div className="rounded-lg bg-white p-4 shadow-lg">
      <h3 className="mb-2 font-semibold">Legend</h3>

      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-blue-600"></div>
          <span>Lake Boundary</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-3 w-3 bg-green-600"></div>
          <span>Roads</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-3 w-3 bg-red-600"></div>
          <span>Health Facilities</span>
        </div>
      </div>
    </div>
  );
}