import Link from "next/link";
import { navigation } from "@/config/navigation";

export default function NavLinks() {
  return (
    <ul className="hidden items-center gap-8 md:flex">
      {navigation.map((item) => (
        <li key={item.name}>
          <Link
            href={item.href}
            className="font-medium text-gray-700 transition-colors hover:text-blue-600"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}