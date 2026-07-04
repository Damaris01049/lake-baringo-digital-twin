import Logo from "./Logo";
import NavLinks from "./NavLinks";
import LiveStatus from "./LiveStatus";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />

        <div className="flex items-center gap-6">
          <NavLinks />
          <LiveStatus />
          <ThemeToggle />
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}