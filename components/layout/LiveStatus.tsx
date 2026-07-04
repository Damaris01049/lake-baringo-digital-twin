export default function LiveStatus() {
  return (
    <div className="hidden items-center gap-2 rounded-full bg-green-100 px-3 py-1 md:flex">
      <span className="h-2 w-2 rounded-full bg-green-600 animate-pulse"></span>

      <span className="text-xs font-medium text-green-700">
        Live • Satellite Updated Today
      </span>
    </div>
  );
}