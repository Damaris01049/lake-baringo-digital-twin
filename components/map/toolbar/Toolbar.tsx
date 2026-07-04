import SearchButton from "./SearchButton";
import BasemapButton from "./BasemapButton";
import MeasureButton from "./MeasureButton";
import ExportButton from "./ExportButton";
import TimelineButton from "./TimelineButton";
import AIButton from "./AIButton";

export default function Toolbar() {
  return (
    <div className="flex items-center gap-2 rounded-lg border bg-white/95 p-2 shadow-lg backdrop-blur">
      <SearchButton />
      <BasemapButton />
      <MeasureButton />
      <TimelineButton />
      <ExportButton />

      <div className="mx-1 h-6 w-px bg-gray-200" aria-hidden="true" />

      <AIButton />
    </div>
  );
}
