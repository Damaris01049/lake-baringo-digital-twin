import AppShell from "@/components/layout/AppShell";
import Sidebar from "@/components/layout/Sidebar";
import RightPanel from "@/components/layout/RightPanel";
import BottomBar from "@/components/layout/BottomBar";

import MapWorkspace from "@/components/map/MapWorkspace";

export default function MapPage() {
  return (
    <AppShell
      left={<Sidebar />}
      center={<MapWorkspace />}
      right={<RightPanel />}
      bottom={<BottomBar />}
    />
  );
}