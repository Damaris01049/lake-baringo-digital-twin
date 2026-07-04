import SearchButton from "./SearchButton";
import BasemapButton from "./BasemapButton";
import MeasureButton from "./MeasureButton";
import ExportButton from "./ExportButton";
import TimelineButton from "./TimelineButton";
import AIButton from "./AIButton";

export default function Toolbar() {
  return (
    <div className="flex items-center justify-between border-b bg-gray-50 px-4 py-3">

      <div className="flex flex-wrap gap-2">

        <SearchButton />

        <BasemapButton />

        <MeasureButton />

        <TimelineButton />

        <ExportButton />

      </div>

      <AIButton />

    </div>
  );
}