import AppShell from "@/components/layout/AppShell";
import Sidebar from "@/components/layout/Sidebar";
import RightPanel from "@/components/layout/RightPanel";
import BottomBar from "@/components/layout/BottomBar";

import MapCanvas from "@/components/map/MapCanvas";

export default function MapPage() {
  return (
    <AppShell
      left={<Sidebar />}
      center={<MapCanvas />}
      right={<RightPanel />}
      bottom={<BottomBar />}
    />
  );
}