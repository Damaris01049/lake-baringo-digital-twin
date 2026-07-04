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
    <div className="flex flex-1 flex-col overflow-hidden">

      {/* Main Content */}
      <div className="grid flex-1 grid-cols-[300px_minmax(0,1fr)_350px] overflow-hidden">

        {/* Left Sidebar */}
        <aside className="overflow-y-auto border-r bg-white">
          {left}
        </aside>

        {/* Map */}
        <main className="relative h-full overflow-hidden">
          {center}
        </main>

        {/* Right Panel */}
        <aside className="overflow-y-auto border-l bg-gray-50">
          {right}
        </aside>

      </div>

      {/* Bottom Panel */}
      <footer className="h-16 border-t bg-white">
        {bottom}
      </footer>

    </div>
  );
}