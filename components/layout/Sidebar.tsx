export default function Sidebar() {
  return (
    <div className="h-full overflow-y-auto p-5">

      <h2 className="mb-4 text-xl font-bold">
        GIS Layers
      </h2>

      <div className="space-y-3">

        <label className="flex items-center gap-2">
          <input type="checkbox" defaultChecked />
          Lake Boundary
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" />
          Roads
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" />
          Health Facilities
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" />
          Schools
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" />
          Flood Extent
        </label>

      </div>

    </div>
  );
}