"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MenuIcon from "./ui/icons/menu";
import MobileNav from "./MobileNav";
import CloseIcon from "./ui/icons/close";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "About Founder", href: "/about-founder" },
  { label: "Contact Us", href: "/contact-us" },
];

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-neutral-900">
      <div className="max-w-480 mx-auto px-[2.4rem] md:px-[4.8rem]">
        <div className="flex items-center justify-between h-28">
          <Link href="/" className="flex flex-col leading-none group">
            <p>Logo here</p>
          </Link>

          <div className="hidden md:flex items-center gap-[3.2rem]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[1.4rem] tracking-[0.08em] uppercase font-medium transition-colors duration-300 pb-[0.4rem]
                  after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-gold after:transition-all after:duration-300
                  ${
                    pathname === link.href
                      ? "text-neutral-100 after:w-full"
                      : " text-neutral-400 hover:text-cream after:w-0 hover:after:w-full"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden flex flex-col justify-center items-center w-16 h-16 gap-1.5 cursor-pointer -translate-y-2 text-neutral-100"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <CloseIcon className="size-10" />
            ) : (
              <MenuIcon className="size-10" />
            )}
          </button>
        </div>
      </div>

      <MobileNav isOpen={menuOpen} />
    </nav>
  );
}

export default NavBar;
