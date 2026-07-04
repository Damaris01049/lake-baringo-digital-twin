import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-xl text-white shadow-md">
        🌊
      </div>

      <div>
        <h1 className="text-lg font-bold text-blue-700">
          {siteConfig.shortName}
        </h1>

        <p className="text-xs text-gray-500">
          Decision Support System
        </p>
      </div>
    </Link>
  );
}