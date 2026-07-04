interface AppShellProps {
  left: React.ReactNode;
  center: React.ReactNode;
  right: React.ReactNode;
  bottom: React.ReactNode;
}

export default function AppShell({
  left,
  center,
  right,
  bottom,
}: AppShellProps) {
  return (
    <div className="flex h-[calc(100vh-80px)] flex-col">

      {/* Main Workspace */}
      <div className="flex flex-1 overflow-hidden">

        {/* Left Sidebar */}
        <aside className="w-72 shrink-0 overflow-y-auto border-r bg-white">
          {left}
        </aside>

        {/* Map Workspace */}
        <main className="relative min-w-0 flex-1 overflow-hidden bg-gray-100">
          {center}
        </main>

        {/* Right Panel */}
        <aside className="w-80 shrink-0 overflow-y-auto border-l bg-gray-50">
          {right}
        </aside>

      </div>

      {/* Bottom Workspace */}
      <footer className="h-40 shrink-0 border-t bg-white">
        {bottom}
      </footer>

    </div>
  );
}